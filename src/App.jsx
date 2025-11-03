import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import LandingSection from './components/LandingSection';
import PricingSection from './components/PricingSection';
import ChatbotSection from './components/ChatbotSection';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [view, setView] = useState('home');

  // Persist theme preference
  useEffect(() => {
    const saved = localStorage.getItem('aura_theme');
    if (saved) setDarkMode(saved === 'dark');
  }, []);
  useEffect(() => {
    localStorage.setItem('aura_theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-gradient-to-b from-white to-white/80 dark:from-[#0a0a0f] dark:to-[#0a0a0f] text-gray-900 dark:text-gray-100 selection:bg-violet-600/30 selection:text-white">
        <Navbar currentView={view} onNavigate={setView} darkMode={darkMode} onToggleTheme={() => setDarkMode((v) => !v)} />

        {view === 'home' && (
          <>
            <LandingSection onGetStarted={() => setView('chat')} />
            <PricingSection />
          </>
        )}
        {view === 'pricing' && <PricingSection />}
        {view === 'chat' && <ChatbotSection />}

        <footer className="mt-8 border-t border-white/20 dark:border-white/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-700 dark:text-gray-300">© {new Date().getFullYear()} AuraAI. All rights reserved.</p>
            <div className="text-sm text-gray-700 dark:text-gray-300">Built with love • Semi‑glass UI • Dark mode</div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
