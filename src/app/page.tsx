"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Database,
  Brain,
  Cpu,
  ArrowDown,
  Menu,
  X,
} from "lucide-react";
import { useInView } from "react-intersection-observer";
import { GroqChatButton } from "@/components/Chatbot";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = ["about", "skills", "projects", "contact"];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            className="text-xl font-bold text-gradient cursor-pointer"
            whileHover={{ scale: 1.05, rotate: [0, 2, -2, 0] }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("about")}
          >
            SK
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-muted-foreground hover:text-foreground transition-colors capitalize relative group"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {item}
                <motion.div
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                />
              </motion.button>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <motion.div
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.6 }}
            >
              <ThemeToggle />
            </motion.div>
            <motion.button
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.div>
            </motion.button>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden py-4 border-t"
            >
              {navItems.map((item, index) => (
                <motion.button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left py-2 text-muted-foreground hover:text-foreground transition-colors capitalize"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  {item}
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

const HeroSection = () => {
  const [currentText, setCurrentText] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const roles = [
    "Full Stack Developer",
    "Machine Learning Engineer",
    "Problem Solver",
    "Tech Enthusiast",
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 50%, rgba(255, 119, 198, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 40% 80%, rgba(120, 219, 255, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.1) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center z-10 px-4 max-w-5xl mx-auto"
      >
        <motion.div variants={itemVariants} className="mb-8">
          <motion.div
            whileHover={{ scale: 1.05, rotate: [0, 1, -1, 0] }}
            transition={{ duration: 0.3 }}
          >
            <Badge variant="outline" className="mb-4 text-sm px-4 py-2">
              Welcome to my portfolio
            </Badge>
          </motion.div>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
        >
          <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Hi, I'm{" "}
          </span>
          <motion.span
            className="relative inline-block"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Swarup Kumar
            </span>
            <motion.div
              className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 1, duration: 1 }}
            />
          </motion.span>
        </motion.h1>

        <motion.div variants={itemVariants} className="h-8 mb-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentText}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl md:text-3xl text-muted-foreground font-medium"
            >
              {roles[currentText]}
            </motion.div>
          </AnimatePresence>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Passionate about creating innovative solutions at the intersection of
          full-stack development and machine learning. I love building scalable
          applications and exploring the frontiers of AI.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap gap-4 justify-center mb-12"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              className="px-8 py-3 text-base relative overflow-hidden group"
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <span className="relative z-10">View My Work</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
              <ArrowDown className="ml-2 h-4 w-4 relative z-10" />
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-3 text-base"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Contact Me
              <Mail className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex gap-6 justify-center"
        >
          {[
            { icon: <Github size={24} />, href: "https://github.com" },
            { icon: <Linkedin size={24} />, href: "https://linkedin.com" },
            { icon: <Mail size={24} />, href: "mailto:swarup@example.com" },
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.2,
                rotate: [0, 10, -10, 0],
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.9 }}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </motion.div>
    </section>
  );
};

const SkillsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    {
      category: "Full Stack Development",
      icon: <Code className="h-5 w-5" />,
      image: "/skills-icons.png",
      items: ["React/Next.js", "Node.js", "TypeScript", "Python"],
      description:
        "Building modern web applications with cutting-edge frameworks",
    },
    {
      category: "Programming Languages",
      icon: <Cpu className="h-5 w-5" />,
      image: "/languages-skills.png",
      items: ["C/C++", "Java", "JavaScript", "Go"],
      description: "Strong foundation in multiple programming paradigms",
    },
    {
      category: "Machine Learning",
      icon: <Brain className="h-5 w-5" />,
      image: "/ml-skills.png",
      items: ["TensorFlow", "PyTorch", "Scikit-learn", "Data Science"],
      description:
        "Developing intelligent solutions with advanced ML techniques",
    },
    {
      category: "Database & Tools",
      icon: <Database className="h-5 w-5" />,
      image: "/database-skills.png",
      items: ["PostgreSQL", "MongoDB", "Docker", "AWS"],
      description: "Managing data and deploying applications at scale",
    },
  ];

  const getSkillColor = (level: string) => {
    switch (level) {
      case "Expert":
        return "bg-green-500";
      case "Advanced":
        return "bg-blue-500";
      case "Intermediate":
        return "bg-yellow-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <section
      ref={ref}
      id="skills"
      className="py-20 px-4 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Skills & Expertise
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            A comprehensive skill set spanning full-stack development,
            programming languages, and machine learning
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -100 : 100,
                rotateY: index % 2 === 0 ? -15 : 15,
              }}
              animate={inView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                z: 50,
              }}
              className="perspective-1000"
            >
              <Card className="h-full hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-background via-background/95 to-background/80 backdrop-blur-sm group overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={skillGroup.image}
                    alt={skillGroup.category}
                    className="w-full h-full object-cover"
                    initial={{ scale: 1.2 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
                    whileHover={{ scale: 1.1 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                  <motion.div
                    className="absolute bottom-4 left-4 right-4"
                    initial={{ y: 20, opacity: 0 }}
                    animate={inView ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <motion.div
                        className="p-2 bg-primary/20 backdrop-blur-sm rounded-lg text-primary border border-primary/20"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        {skillGroup.icon}
                      </motion.div>
                      <h3 className="text-xl font-semibold text-white">
                        {skillGroup.category}
                      </h3>
                    </div>
                  </motion.div>
                </div>

                <CardContent className="p-6">
                  <motion.p
                    className="text-muted-foreground mb-6 leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.7 }}
                  >
                    {skillGroup.description}
                  </motion.p>

                  <motion.div
                    className="flex flex-wrap gap-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.9 }}
                  >
                    {skillGroup.items.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Badge
                          variant="outline"
                          className="text-xs px-3 py-1 border-primary/20 bg-primary/5 hover:bg-primary/10 transition-colors"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-32 h-32 bg-secondary/20 rounded-full blur-2xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </section>
  );
};

const ProjectsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with real-time inventory management, payment processing, and AI-powered recommendations.",
      tech: ["Next.js", "TypeScript", "PostgreSQL", "Stripe"],
      features: [
        "Real-time inventory",
        "AI recommendations",
        "Payment processing",
        "Admin dashboard",
      ],
      link: "#",
      icon: "🛒",
    },
    {
      title: "ML-Powered Analytics Dashboard",
      description:
        "An intelligent analytics platform that uses machine learning to provide predictive insights and automated reporting.",
      tech: ["Python", "TensorFlow", "React", "FastAPI"],
      features: [
        "Predictive analytics",
        "Automated reports",
        "Data visualization",
        "ML models",
      ],
      link: "#",
      icon: "📊",
    },
    {
      title: "Real-Time Chat Application",
      description:
        "A scalable chat application with end-to-end encryption, video calling, and AI-powered message moderation.",
      tech: ["Node.js", "Socket.io", "WebRTC", "React"],
      features: [
        "End-to-end encryption",
        "Video calls",
        "AI moderation",
        "File sharing",
      ],
      link: "#",
      icon: "💬",
    },
  ];

  return (
    <section
      ref={ref}
      id="projects"
      className="py-20 px-4 bg-muted/30 relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(circle at 30% 20%, rgba(120, 119, 198, 0.05) 0%, transparent 50%)",
              "radial-gradient(circle at 70% 80%, rgba(255, 119, 198, 0.05) 0%, transparent 50%)",
              "radial-gradient(circle at 30% 20%, rgba(120, 119, 198, 0.05) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Featured Projects
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            A selection of my recent work showcasing full-stack development and
            machine learning capabilities
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
              className="group"
            >
              <Card className="h-full hover:shadow-2xl transition-all duration-300 border-0 bg-background/50 backdrop-blur-sm group-hover:bg-background/70 overflow-hidden">
                <motion.div
                  className="p-6 relative"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="absolute top-2 right-2 text-4xl opacity-20"
                    animate={{
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.5,
                      ease: "easeInOut",
                    }}
                  >
                    {project.icon}
                  </motion.div>

                  <div className="flex justify-between items-start mb-4">
                    <motion.h3
                      className="text-xl font-semibold group-hover:text-primary transition-colors"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      {project.title}
                    </motion.h3>
                    <motion.a
                      href={project.link}
                      whileHover={{
                        scale: 1.2,
                        rotate: 45,
                        transition: { duration: 0.3 },
                      }}
                      whileTap={{ scale: 0.9 }}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                  </div>

                  <motion.p
                    className="text-muted-foreground mb-6 leading-relaxed"
                    initial={{ opacity: 0.7 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {project.description}
                  </motion.p>

                  <motion.div
                    className="mb-6"
                    initial={{ opacity: 0, y: 10 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                  >
                    <h4 className="font-medium mb-3 text-sm">Key Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <motion.div
                          key={feature}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={inView ? { opacity: 1, scale: 1 } : {}}
                          transition={{
                            duration: 0.4,
                            delay: 1 + index * 0.2 + featureIndex * 0.1,
                          }}
                          whileHover={{
                            scale: 1.1,
                            transition: { duration: 0.2 },
                          }}
                        >
                          <Badge variant="secondary" className="text-xs">
                            {feature}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  <Separator className="mb-4" />

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 1.2 + index * 0.2 }}
                  >
                    <h4 className="font-medium mb-3 text-sm">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <motion.div
                          key={tech}
                          initial={{ opacity: 0, rotate: -180 }}
                          animate={inView ? { opacity: 1, rotate: 0 } : {}}
                          transition={{
                            duration: 0.6,
                            delay: 1.4 + index * 0.2 + techIndex * 0.1,
                          }}
                          whileHover={{
                            scale: 1.1,
                            transition: { duration: 0.2 },
                          }}
                        >
                          <Badge variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 2 }}
          className="text-center mt-12"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              size="lg"
              className="px-8 relative overflow-hidden group"
            >
              <span className="relative z-10">View All Projects</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
              <ExternalLink className="ml-2 h-4 w-4 relative z-10" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const contactMethods = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Get In Touch",
      href: "mailto:swarup@example.com",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      href: "https://github.com",
      color: "from-gray-700 to-gray-900",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      href: "https://linkedin.com",
      color: "from-blue-600 to-blue-800",
    },
  ];

  return (
    <section
      ref={ref}
      id="contact"
      className="py-20 px-4 relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(circle at 50% 50%, rgba(120, 119, 198, 0.05) 0%, transparent 70%)",
              "radial-gradient(circle at 20% 80%, rgba(255, 119, 198, 0.05) 0%, transparent 70%)",
              "radial-gradient(circle at 80% 20%, rgba(120, 219, 255, 0.05) 0%, transparent 70%)",
              "radial-gradient(circle at 50% 50%, rgba(120, 119, 198, 0.05) 0%, transparent 70%)",
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Let's Connect
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            I'm always interested in hearing about new opportunities and
            exciting projects. Feel free to reach out if you'd like to
            collaborate or just have a chat!
          </motion.p>
        </motion.div>

        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.a
                href={method.href}
                target={method.label !== "Get In Touch" ? "_blank" : undefined}
                rel="noopener noreferrer"
                className={`relative overflow-hidden group`}
              >
                <Button
                  size="lg"
                  className="px-8 py-3 text-base relative overflow-hidden group"
                  variant={index === 0 ? "default" : "outline"}
                >
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${method.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative z-10 flex items-center">
                    <motion.div
                      className="mr-2"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      {method.icon}
                    </motion.div>
                    {method.label}
                  </span>
                </Button>
              </motion.a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="relative"
        >
          <motion.div
            className="text-muted-foreground"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <motion.span
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              © 2024 Swarup Kumar. Built with passion and lots of coffee ☕
            </motion.span>
          </motion.div>

          <motion.div
            className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.1, 0.3],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <GroqChatButton />
    </div>
  );


}
