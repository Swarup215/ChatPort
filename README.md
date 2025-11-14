# Portfolio Website

A modern, responsive portfolio website built with Next.js, featuring a beautiful UI with dark mode support, smooth animations, and a comprehensive showcase of skills and projects.

## 🛠️ Tech Stack

### Core Framework

- **Next.js 15** - React framework with App Router for server-side rendering and optimal performance
- **React 19** - Latest React library for building user interfaces
- **TypeScript 5** - Type-safe JavaScript for enhanced developer experience and code reliability

### Styling & UI

- **Tailwind CSS 4** - Utility-first CSS framework for rapid UI development
- **shadcn/ui** - High-quality, accessible component library built on Radix UI
- **Framer Motion** - Production-ready animation library for smooth transitions and interactions
- **Next Themes** - Seamless dark/light mode switching
- **Lucide React** - Beautiful and consistent icon library

### Forms & Validation

- **React Hook Form** - Performant forms with minimal re-renders
- **Zod** - TypeScript-first schema validation library
- **@hookform/resolvers** - Validation resolver for React Hook Form

### State Management & Data Fetching

- **Zustand** - Lightweight and scalable state management
- **TanStack Query** - Powerful data synchronization and caching for React
- **Axios** - Promise-based HTTP client for API requests

### Database & Backend

- **Prisma** - Next-generation ORM for type-safe database access
- **NextAuth.js** - Complete authentication solution for Next.js

### UI Components & Libraries

- **Radix UI** - Unstyled, accessible component primitives
- **TanStack Table** - Headless UI for building powerful data tables
- **Recharts** - Composable charting library built on React components
- **DND Kit** - Modern drag and drop toolkit for React
- **React Markdown** - Markdown renderer for React
- **React Syntax Highlighter** - Syntax highlighting component

### Utilities & Tools

- **date-fns** - Modern JavaScript date utility library
- **clsx** - Utility for constructing className strings conditionally
- **tailwind-merge** - Merge Tailwind CSS classes without style conflicts
- **uuid** - Generate RFC-compliant UUIDs
- **Sharp** - High performance image processing

### Development Tools

- **Nodemon** - Automatically restart the server during development
- **ESLint** - Code linting for maintaining code quality
- **TypeScript** - Static type checking

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed on your system:

- **Node.js** (v18 or higher)
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Swarup215/PortFolio.git
   cd PortFolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables** (if needed)

   ```bash
   # Create a .env.local file in the root directory
   # Add your environment variables here
   ```

4. **Set up the database** (if using Prisma)

   ```bash
   # Generate Prisma Client
   npm run db:generate

   # Push database schema
   npm run db:push
   ```

### Running the Development Server

Start the development server with hot reload:

```bash
npm run dev
```

The website will be available at [http://localhost:3000](http://localhost:3000)

The development server uses **Nodemon** to automatically restart when you make changes to files in the `src` directory.

### Building for Production

1. **Build the application**

   ```bash
   npm run build
   ```

2. **Start the production server**
   ```bash
   npm start
   ```

### Other Available Scripts

- `npm run lint` - Run ESLint to check for code issues
- `npm run db:generate` - Generate Prisma Client
- `npm run db:push` - Push database schema changes
- `npm run db:migrate` - Run database migrations
- `npm run db:reset` - Reset the database

## 📖 How to Use This Website

### For Visitors

1. **Navigate the Portfolio**

   - Scroll through the homepage to view different sections
   - Use the navigation menu to jump to specific sections (Skills, Projects, Contact)

2. **Dark Mode Toggle**

   - Click the theme toggle button to switch between light and dark modes
   - Your preference is automatically saved

3. **View Projects**

   - Browse through the projects section to see featured work
   - Each project card displays technologies used and key features

4. **Contact**
   - Use the contact form to send messages
   - View social media links and other contact information

### For Developers

1. **Customize Content**

   - Edit `src/app/page.tsx` to modify the homepage content
   - Update project information, skills, and personal details

2. **Add New Components**

   - Create new components in `src/components/`
   - Use shadcn/ui components from `src/components/ui/`

3. **Modify Styling**

   - Update `src/app/globals.css` for global styles
   - Use Tailwind CSS classes directly in components
   - Customize theme in `tailwind.config.ts`

4. **Database Management**
   - Modify `prisma/schema.prisma` to update database schema
   - Run migrations when schema changes

## 📁 Project Structure

```
PortFolio/
├── src/
│   ├── app/              # Next.js App Router pages and layouts
│   │   ├── api/          # API routes
│   │   ├── globals.css   # Global styles
│   │   ├── layout.tsx    # Root layout
│   │   └── page.tsx      # Homepage
│   ├── components/       # React components
│   │   ├── ui/          # shadcn/ui components
│   │   ├── theme-provider.tsx
│   │   └── theme-toggle.tsx
│   ├── hooks/           # Custom React hooks
│   └── lib/             # Utility functions and configurations
├── public/              # Static assets (images, icons, etc.)
├── prisma/             # Prisma schema and migrations
├── db/                 # Database files
├── next.config.ts      # Next.js configuration
├── tailwind.config.ts  # Tailwind CSS configuration
├── tsconfig.json       # TypeScript configuration
└── package.json        # Project dependencies and scripts
```

## 🎨 Features

- ✨ **Responsive Design** - Works seamlessly on all device sizes
- 🌙 **Dark Mode** - Toggle between light and dark themes
- 🎭 **Smooth Animations** - Beautiful transitions powered by Framer Motion
- 📱 **Mobile-First** - Optimized for mobile devices
- ⚡ **Fast Performance** - Optimized with Next.js server-side rendering
- 🔒 **Type-Safe** - Full TypeScript support throughout the codebase
- ♿ **Accessible** - Built with accessibility in mind using Radix UI

## 📝 License

This project is private and proprietary.

## 👤 Author

**Swarup215**

- GitHub: [@Swarup215](https://github.com/Swarup215)

---

Built with ❤️ using Next.js and modern web technologies.
