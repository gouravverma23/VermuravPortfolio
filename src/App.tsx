import { useState } from 'react'
import { Sparkles, CheckCircle2, ArrowRight, Layers, Palette, Zap, Code2, ExternalLink } from 'lucide-react'

export default function App() {
  const [count, setCount] = useState(0)

  const features = [
    {
      icon: <Zap className="w-5 h-5 text-amber-500" />,
      title: 'Vite 6 + React 19',
      description: 'Lightning-fast Hot Module Replacement with modern React concurrent features.'
    },
    {
      icon: <Palette className="w-5 h-5 text-indigo-500" />,
      title: 'Tailwind CSS v4',
      description: 'Zero-config modern CSS engine powered by @tailwindcss/vite with native performance.'
    },
    {
      icon: <Code2 className="w-5 h-5 text-cyan-500" />,
      title: 'TypeScript Ready',
      description: 'Strict type safety with modern configuration and out-of-the-box linting.'
    },
    {
      icon: <Layers className="w-5 h-5 text-rose-500" />,
      title: 'Agency Ready',
      description: 'Clean starter template designed for building high-converting portfolio and client sites.'
    }
  ]

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-indigo-500 selection:text-white">
      {/* Background Glow */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-indigo-600/20 via-purple-600/20 to-pink-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl" />
      </div>

      {/* Navigation */}
      <header className="border-b border-slate-800/80 backdrop-blur-md sticky top-0 z-50 bg-slate-950/70">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/25">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold tracking-tight text-lg text-white">
              Agency<span className="text-indigo-400">Portfolio</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Tailwind v4 Active
            </span>
            <a
              href="https://tailwindcss.com/docs"
              target="_blank"
              rel="noreferrer"
              className="text-xs text-slate-400 hover:text-white transition-colors flex items-center gap-1"
            >
              Docs <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-6 py-16 flex flex-col items-center text-center">
        {/* Hero Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 mb-8 animate-fade-in shadow-sm shadow-indigo-500/10">
          <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
          <span>Vite + React + Tailwind CSS v4 Setup Complete</span>
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-50 max-w-3xl leading-[1.15]">
          Build Stunning Experiences with{' '}
          <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400 bg-clip-text text-transparent">
            React & Tailwind
          </span>
        </h1>

        {/* Hero Subtitle */}
        <p className="mt-6 text-lg text-slate-400 max-w-2xl leading-relaxed">
          Your modern development stack is fully configured and ready for production.
          Start building your agency portfolio, landing pages, and web applications.
        </p>

        {/* Action Buttons & Counter Demo */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => setCount((c) => c + 1)}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-medium shadow-lg shadow-indigo-500/25 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2 cursor-pointer"
          >
            <span>Interactive State: {count}</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href="https://tailwindcss.com/blog/tailwindcss-v4"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white font-medium border border-slate-800 transition-colors duration-200 flex items-center gap-2"
          >
            What's new in v4
            <ExternalLink className="w-4 h-4 text-slate-400" />
          </a>
        </div>

        {/* Features Grid */}
        <div className="mt-20 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-slate-700/80 transition-all duration-200 backdrop-blur-sm group"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700/50 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-200">
                {feature.icon}
              </div>
              <h3 className="font-semibold text-slate-100 text-base mb-1.5 flex items-center gap-2">
                {feature.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Quick Setup Checklist */}
        <div className="mt-16 w-full max-w-2xl bg-slate-900/40 border border-slate-800 rounded-2xl p-6 text-left">
          <h2 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-4">
            Configuration Status
          </h2>
          <ul className="space-y-3">
            {[
              'Vite React TypeScript template initialized',
              'Tailwind CSS v4 engine installed with @tailwindcss/vite',
              'Vite configuration updated with tailwindcss plugin',
              'CSS import `@import "tailwindcss";` set in src/index.css',
              'Lucide React icons integrated'
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-3 text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 py-8 text-center text-xs text-slate-500">
        <p>Built with Vite, React 19, TypeScript & Tailwind CSS v4</p>
      </footer>
    </div>
  )
}
