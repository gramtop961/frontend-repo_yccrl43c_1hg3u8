export default function PricingSection() {
  const tiers = [
    {
      name: 'Starter',
      price: 'Free',
      desc: 'Get started with core AI chat features.',
      features: ['100 messages/mo', 'Basic models', 'Community support'],
      cta: 'Start for Free',
      highlight: false,
    },
    {
      name: 'Pro',
      price: '$19/mo',
      desc: 'For creators and teams who need speed and power.',
      features: ['Unlimited chat', 'Fast inference', 'Custom personas', 'Priority support'],
      cta: 'Go Pro',
      highlight: true,
    },
    {
      name: 'Enterprise',
      price: 'Let’s talk',
      desc: 'Advanced controls, SSO, SLAs and private deployments.',
      features: ['SSO/SAML', 'Dedicated capacity', 'Analytics & audit logs', 'Custom integrations'],
      cta: 'Contact Sales',
      highlight: false,
    },
  ];

  return (
    <section id="pricing" className="relative py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">Simple, transparent pricing</h2>
          <p className="mt-2 text-gray-700/90 dark:text-gray-300">Choose a plan that scales with you.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {tiers.map((tier) => (
            <div key={tier.name} className={`rounded-2xl border border-white/20 dark:border-white/10 backdrop-blur-xl p-6 shadow-xl bg-white/60 dark:bg-white/5 ${tier.highlight ? 'ring-2 ring-violet-500/60' : ''}`}>
              <div className="flex items-baseline justify-between">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{tier.name}</h3>
                <span className="text-lg font-bold bg-gradient-to-br from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">{tier.price}</span>
              </div>
              <p className="mt-2 text-sm text-gray-700/90 dark:text-gray-300">{tier.desc}</p>
              <ul className="mt-4 space-y-2 text-sm text-gray-800 dark:text-gray-200">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gradient-to-br from-violet-600 to-fuchsia-600" />
                    {f}
                  </li>
                ))}
              </ul>
              <button className={`mt-6 w-full rounded-xl px-4 py-2.5 font-semibold shadow ${tier.highlight ? 'bg-gradient-to-br from-violet-600 to-fuchsia-600 text-white' : 'border border-white/20 dark:border-white/10 bg-white/70 dark:bg-white/5 text-gray-900 dark:text-gray-100'}`}>
                {tier.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
