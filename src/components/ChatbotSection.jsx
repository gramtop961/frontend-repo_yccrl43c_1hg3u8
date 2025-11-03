import { useEffect, useRef, useState } from 'react';
import { Send, User } from 'lucide-react';

export default function ChatbotSection() {
  const [isAuthed, setIsAuthed] = useState(false);
  const [tab, setTab] = useState('login');
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hey! I\'m Aura, your AI copilot. Ask me anything about the product.' },
  ]);
  const [input, setInput] = useState('');
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  if (!isAuthed) {
    return (
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-md px-4">
          <div className="rounded-2xl border border-white/20 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-xl p-6 shadow-xl">
            <div className="mb-4 flex items-center gap-2">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-violet-600 to-fuchsia-600" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Welcome back</h3>
            </div>
            <div className="mb-4 grid grid-cols-2 rounded-xl bg-white/60 dark:bg-white/5 border border-white/20 dark:border-white/10 p-1">
              <button onClick={() => setTab('login')} className={`px-3 py-2 rounded-lg text-sm font-medium ${tab === 'login' ? 'bg-white dark:bg-white/10 text-gray-900 dark:text-white' : 'text-gray-700 dark:text-gray-300'}`}>Login</button>
              <button onClick={() => setTab('register')} className={`px-3 py-2 rounded-lg text-sm font-medium ${tab === 'register' ? 'bg-white dark:bg-white/10 text-gray-900 dark:text-white' : 'text-gray-700 dark:text-gray-300'}`}>Register</button>
            </div>
            {tab === 'login' ? <AuthForm onSuccess={() => setIsAuthed(true)} mode="login" /> : <AuthForm onSuccess={() => setIsAuthed(true)} mode="register" />}
          </div>
        </div>
      </section>
    );
  }

  const sendMessage = () => {
    const text = input.trim();
    if (!text) return;
    setMessages((m) => [...m, { role: 'user', content: text }]);
    setInput('');
    // Simulated assistant reply
    setTimeout(() => {
      setMessages((m) => [
        ...m,
        { role: 'assistant', content: `You said: "${text}" — Imagine this connected to your AI backend.` },
      ]);
    }, 500);
  };

  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-5xl px-4">
        <div className="rounded-2xl border border-white/20 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-xl shadow-xl">
          <div className="flex items-center justify-between border-b border-white/20 dark:border-white/10 px-4 py-3">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-violet-600 to-fuchsia-600" />
              <div>
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white">Aura Chat</h4>
                <p className="text-xs text-gray-700/80 dark:text-gray-300/80">Ask product questions or explore features</p>
              </div>
            </div>
            <button onClick={() => setIsAuthed(false)} className="text-xs font-medium text-gray-700 hover:text-violet-600 dark:text-gray-300">Sign out</button>
          </div>

          <div className="h-[50vh] overflow-y-auto px-4 py-4 space-y-3">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm shadow ${m.role === 'user' ? 'bg-gradient-to-br from-violet-600 to-fuchsia-600 text-white' : 'bg-white/80 dark:bg-white/10 border border-white/20 dark:border-white/10 text-gray-900 dark:text-gray-100 backdrop-blur'}`}>
                  {m.content}
                </div>
              </div>
            ))}
            <div ref={endRef} />
          </div>

          <div className="border-t border-white/20 dark:border-white/10 p-3">
            <div className="flex items-center gap-2">
              <div className="hidden sm:flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 dark:border-white/10 bg-white/70 dark:bg-white/5 text-gray-700 dark:text-gray-300">
                <User className="h-4 w-4" />
              </div>
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                placeholder="Type your message..."
                className="flex-1 rounded-xl border border-white/20 dark:border-white/10 bg-white/70 dark:bg-white/5 px-3 py-2 text-sm text-gray-900 dark:text-gray-100 placeholder-gray-500 focus:outline-none"
              />
              <button onClick={sendMessage} className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-violet-600 to-fuchsia-600 text-white px-4 py-2 text-sm font-semibold shadow">
                <Send className="h-4 w-4" />
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AuthForm({ mode, onSuccess }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSuccess();
      }}
      className="space-y-3"
    >
      {mode === 'register' && (
        <div>
          <label className="mb-1 block text-xs font-medium text-gray-700 dark:text-gray-300">Name</label>
          <input required type="text" className="w-full rounded-xl border border-white/20 dark:border-white/10 bg-white/70 dark:bg-white/5 px-3 py-2 text-sm text-gray-900 dark:text-gray-100 focus:outline-none" />
        </div>
      )}
      <div>
        <label className="mb-1 block text-xs font-medium text-gray-700 dark:text-gray-300">Email</label>
        <input required type="email" className="w-full rounded-xl border border-white/20 dark:border-white/10 bg-white/70 dark:bg-white/5 px-3 py-2 text-sm text-gray-900 dark:text-gray-100 focus:outline-none" />
      </div>
      <div>
        <label className="mb-1 block text-xs font-medium text-gray-700 dark:text-gray-300">Password</label>
        <input required type="password" className="w-full rounded-xl border border-white/20 dark:border-white/10 bg-white/70 dark:bg-white/5 px-3 py-2 text-sm text-gray-900 dark:text-gray-100 focus:outline-none" />
      </div>
      <button type="submit" className="mt-2 w-full rounded-xl bg-gradient-to-br from-violet-600 to-fuchsia-600 px-4 py-2.5 text-sm font-semibold text-white shadow">{mode === 'login' ? 'Login' : 'Create account'}</button>
    </form>
  );
}
