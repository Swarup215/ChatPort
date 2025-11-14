import { NextRequest, NextResponse } from "next/server";

// Groq API configuration
const GROQ_API_KEY = process.env.GROQ_API_KEY;
const GROQ_API_URL = "https://api.groq.com/openai/v1/chat/completions";
const GROQ_MODEL = "llama-3.3-70b-versatile";

// Portfolio context information
const PORTFOLIO_CONTEXT = `
You are an AI assistant for Swarup Kumar's portfolio website. You can ONLY answer questions about:
- Swarup Kumar (the portfolio owner)
- His skills and expertise
- His projects
- His background and experience
- The portfolio website itself
- Technologies and tools mentioned in the portfolio

Portfolio Information:
- Name: Swarup Kumar
- Roles: Full Stack Developer, Machine Learning Engineer, Problem Solver, Tech Enthusiast
- About: Passionate about creating innovative solutions at the intersection of full-stack development and machine learning. Loves building scalable applications and exploring the frontiers of AI.

Skills:
- Web Development: React/Next.js, Node.js, TypeScript, Python
- Programming Languages: C/C++, Java, JavaScript, Go
- Machine Learning: TensorFlow, PyTorch, Scikit-learn, Data Science
- Database & DevOps: PostgreSQL, MongoDB, Docker, AWS

Projects:
1. E-Commerce Platform - Full-stack e-commerce solution with real-time inventory management, payment processing, and AI-powered recommendations. Tech: Next.js, TypeScript, PostgreSQL, Stripe
2. ML-Powered Analytics Dashboard - Intelligent analytics platform with predictive insights and automated reporting. Tech: Python, TensorFlow, React, FastAPI
3. Real-Time Chat Application - Scalable chat application with end-to-end encryption, video calling, and AI-powered message moderation. Tech: Node.js, Socket.io, WebRTC, React

If asked about anything NOT related to the portfolio, politely decline and redirect to portfolio-related topics.
`;

const RELEVANCE_CHECK_PROMPT = `You are a relevance checker. Determine if the following question is about Swarup Kumar's portfolio, his skills, projects, experience, or the portfolio website itself.

Question: "{question}"

Respond with ONLY "YES" if the question is relevant to the portfolio, or "NO" if it's not relevant. Do not provide any explanation, just "YES" or "NO".`;

const POLITE_DECLINE_MESSAGE =
  "I'm here to help you learn about Swarup Kumar's portfolio, skills, and projects. Could you please ask me something related to his work, experience, or the portfolio website? I'd be happy to help with that!";

async function checkRelevance(question: string): Promise<boolean> {
  try {
    const response = await fetch(GROQ_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: GROQ_MODEL,
        messages: [
          {
            role: "system",
            content: RELEVANCE_CHECK_PROMPT.replace("{question}", question),
          },
        ],
        temperature: 0.1,
        max_tokens: 10,
      }),
    });

    if (!response.ok) {
      // If relevance check fails, default to allowing the question
      return true;
    }

    const data = await response.json();
    const answer =
      data.choices?.[0]?.message?.content?.trim().toUpperCase() || "";
    return answer === "YES";
  } catch (error) {
    console.error("Relevance check error:", error);
    // Default to allowing if check fails
    return true;
  }
}

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Message is required and must be a string" },
        { status: 400 }
      );
    }

    if (!GROQ_API_KEY) {
      return NextResponse.json(
        { error: "Groq API key is not configured. Please set GROQ_API_KEY in your environment variables." },
        { status: 500 }
      );
    }

    // Check if the question is relevant to the portfolio
    const isRelevant = await checkRelevance(message);

    if (!isRelevant) {
      return NextResponse.json({ content: POLITE_DECLINE_MESSAGE });
    }

    // Call Groq API with portfolio context
    const response = await fetch(GROQ_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: GROQ_MODEL,
        messages: [
          {
            role: "system",
            content: PORTFOLIO_CONTEXT,
          },
          {
            role: "user",
            content: message,
          },
        ],
        temperature: 0.7,
        max_tokens: 1024,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Groq API error:", errorText);
      return NextResponse.json(
        { error: `Groq API error: ${response.status}` },
        { status: response.status }
      );
    }

    const data = await response.json();

    // Extract the response content
    const content =
      data.choices?.[0]?.message?.content || "No response from AI";

    return NextResponse.json({ content });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Internal server error",
      },
      { status: 500 }
    );
  }
}
