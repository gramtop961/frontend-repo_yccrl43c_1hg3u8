import Spline from '@splinetool/react-spline';
import { Sparkles, Shield, Rocket } from 'lucide-react';

export default function LandingSection({ onGetStarted }) {
  return (
    <div className="relative">
      {/* Hero Section with Spline */}
      <section className="relative h-[70vh] md:h-[80vh] overflow-hidden">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        {/* Soft gradient overlay to enhance readability */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/40 via-white/30 to-white dark:from-black/30 dark:via-black/20 dark:to-black" />
        <div className="relative z-10 flex h-full items-center">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl rounded-2xl border border-white/20 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-xl p-8 md:p-10 shadow-xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 dark:border-white/10 bg-white/50 dark:bg-white/10 px-3 py-1 text-xs font-medium text-gray-700 dark:text-gray-200">
                <Sparkles className="h-3.5 w-3.5 text-violet-600" />
                Next‑gen AI Voice & Chat Agent
              </div>
              <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                Talk to your data. Automate conversations.
              </h1>
              <p className="mt-4 text-base md:text-lg text-gray-700/90 dark:text-gray-300">
                AuraAI is a futuristic, minimal AI agent that understands context, speaks naturally, and integrates with your stack. Built for speed, reliability, and delightful experiences.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <button onClick={onGetStarted} className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-violet-600 to-fuchsia-600 text-white px-5 py-3 font-semibold shadow-lg hover:opacity-95">
                  Get Started
                </button>
                <a href="#pricing" className="rounded-xl border border-white/20 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur px-5 py-3 font-semibold text-gray-800 dark:text-gray-200 hover:bg-white/80 dark:hover:bg-white/10">
                  See Pricing
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="relative py-16 md:py-24">
        <div className="absolute inset-0 -z-[0] pointer-events-none">
          <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-violet-500/20 blur-3xl" />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            <FeatureCard icon={<Rocket className="h-5 w-5" />} title="Blazing Fast" description="Low-latency responses with streaming for instant feedback and fluid conversations." />
            <FeatureCard icon={<Shield className="h-5 w-5" />} title="Enterprise-Grade Security" description="SOC2-ready controls, data isolation, and configurable retention policies." />
            <FeatureCard icon={<Sparkles className="h-5 w-5" />} title="Natural & Contextual" description="Understands user intent, memory, and tools to complete complex workflows." />
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="rounded-2xl border border-white/20 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-xl p-6 shadow-lg">
      <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-fuchsia-600 text-white">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
      <p className="mt-1 text-sm text-gray-700/90 dark:text-gray-300">{description}</p>
    </div>
  );
}
