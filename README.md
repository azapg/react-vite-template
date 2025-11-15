# React Vite Template

> ⚠️ **Early Stage Template** - This is a very early version, primarily for personal use.

## Why This Template?

LLMs often use outdated versions of technologies or generate configurations that waste tokens. This template provides a modern, pre-configured setup so you can start building immediately without instructing an LLM to scaffold everything from scratch.

## Stack

- **⚡ Vite** - Next generation frontend tooling
- **⚛️ React 19** - Latest React with TypeScript
- **🎨 Tailwind CSS v4** - Modern utility-first CSS framework
- **🧩 shadcn/ui** - Re-usable components built with Radix UI and Tailwind
- **📦 Bun** - Fast all-in-one JavaScript runtime

## Features

- ✅ TypeScript configured with path aliases (`@/*`)
- ✅ Tailwind CSS v4 with Vite plugin
- ✅ shadcn/ui components ready to use
- ✅ Modern project structure
- ✅ ESLint configured

## Getting Started

### Clone and Install

```bash
# Clone this repository
git clone https://github.com/yourusername/react-vite-template.git my-project

# Navigate to project
cd my-project

# Install dependencies
bun install

# Start development server
bun dev
```

### Add shadcn/ui Components

```bash
bunx shadcn@latest add [component-name]
```

Example:
```bash
bunx shadcn@latest add button card dialog
```

## Project Structure

```
├── src/
│   ├── components/
│   │   └── ui/          # shadcn/ui components
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── public/
├── components.json      # shadcn/ui configuration
├── vite.config.ts
└── tsconfig.json
```

## Usage Example

```tsx
import { Button } from "@/components/ui/button"

function App() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <Button>Click me</Button>
    </div>
  )
}
```

## Roadmap

Future enhancements planned:

- 🌓 Optional dark mode setup generator
- 🔌 API client configuration options
- 🗂️ Context/state management templates
- 🧪 Testing setup (Vitest)
- 📱 PWA configuration
- 🚀 Deployment scripts

## Scripts

```bash
bun dev      # Start development server
bun build    # Build for production
bun preview  # Preview production build
bun lint     # Run ESLint
```

## Notes

- This template uses Bun instead of npm/yarn/pnpm
- Tailwind CSS v4 is configured with the new `@import "tailwindcss"` syntax
- Path aliases are configured to use `@/` for imports from `src/`

## License

MIT - Personal use template
