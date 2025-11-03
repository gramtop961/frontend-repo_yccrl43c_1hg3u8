import { Sun, Moon, MessageSquare } from 'lucide-react';

export default function Navbar({ currentView, onNavigate, darkMode, onToggleTheme }) {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/60 dark:bg-white/5 border-b border-white/20 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-amber-400 shadow-lg" />
            <span className="font-semibold tracking-tight text-gray-900 dark:text-white">AuraAI</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <button onClick={() => onNavigate('home')} className={`transition-colors hover:text-violet-500 ${currentView === 'home' ? 'text-violet-500' : 'text-gray-700 dark:text-gray-200'}`}>Home</button>
            <button onClick={() => onNavigate('pricing')} className={`transition-colors hover:text-violet-500 ${currentView === 'pricing' ? 'text-violet-500' : 'text-gray-700 dark:text-gray-200'}`}>Pricing</button>
            <button onClick={() => onNavigate('chat')} className={`transition-colors hover:text-violet-500 ${currentView === 'chat' ? 'text-violet-500' : 'text-gray-700 dark:text-gray-200'} flex items-center gap-2`}>
              <MessageSquare className="h-4 w-4" /> Chat
            </button>
          </nav>
          <div className="flex items-center gap-3">
            <button onClick={onToggleTheme} aria-label="Toggle theme" className="inline-flex items-center justify-center h-9 w-9 rounded-lg border border-white/20 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur hover:scale-[1.03] transition">
              {darkMode ? <Sun className="h-4 w-4 text-amber-300" /> : <Moon className="h-4 w-4 text-violet-600" />}
            </button>
            <button onClick={() => onNavigate('chat')} className="hidden sm:inline-flex items-center gap-2 rounded-lg bg-gradient-to-br from-violet-600 to-fuchsia-600 text-white px-4 py-2 text-sm font-semibold shadow hover:opacity-95">
              <MessageSquare className="h-4 w-4" /> Launch App
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
