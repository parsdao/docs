import Link from 'next/link';

const features = [
  {
    title: 'Governance',
    description: 'Council, Committees, Voting, Resolutions',
    href: '/docs/governance/council',
    icon: '🏛️',
  },
  {
    title: 'Tokens',
    description: 'PARS, xPARS, vePARS, MIGA',
    href: '/docs/tokens/pars',
    icon: '🪙',
  },
  {
    title: 'Treasury',
    description: 'Multi-sig vault, committee allocations',
    href: '/docs/treasury/overview',
    icon: '🏦',
  },
  {
    title: 'Bonds',
    description: 'OHM-style bonding mechanism',
    href: '/docs/bonds/overview',
    icon: '📜',
  },
  {
    title: 'Cryptography',
    description: 'ML-DSA, ML-KEM, SLH-DSA, FROST',
    href: '/docs/crypto',
    icon: '🔐',
  },
  {
    title: 'DEX',
    description: 'PoolManager, SwapRouter, Hooks',
    href: '/docs/dex',
    icon: '🔄',
  },
  {
    title: 'Oracle',
    description: 'Native price feeds via G-Chain',
    href: '/docs/oracle',
    icon: '📊',
  },
  {
    title: 'AI',
    description: 'GPU attestation, compute rewards',
    href: '/docs/ai',
    icon: '🤖',
  },
];

const committees = [
  { name: 'AMN', persian: 'امن', focus: 'Security & Infrastructure' },
  { name: 'KHAZ', persian: 'خزانه', focus: 'Treasury & Finance' },
  { name: 'DAD', persian: 'داد', focus: 'Legal & Justice' },
  { name: 'SAL', persian: 'سلامت', focus: 'Health & Welfare' },
  { name: 'FARH', persian: 'فرهنگ', focus: 'Culture & Heritage' },
  { name: 'DAN', persian: 'دانش', focus: 'Education & Research' },
  { name: 'SAZ', persian: 'سازندگی', focus: 'Development & Construction' },
  { name: 'PAY', persian: 'پایداری', focus: 'Sustainability & Environment' },
  { name: 'WAQF', persian: 'وقف', focus: 'Endowment & Charity' },
  { name: 'MIZ', persian: 'میزان', focus: 'Compliance & Standards' },
];

const stats = [
  { label: 'Committees', value: '10' },
  { label: 'Token Types', value: '4' },
  { label: 'Chain ID', value: '6133' },
  { label: 'Block Time', value: '~400ms' },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-fd-background to-fd-muted/30">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-8 flex justify-center">
              <div className="rounded-full bg-fd-primary/10 px-4 py-1.5 text-sm font-medium text-fd-primary ring-1 ring-inset ring-fd-primary/20">
                Lux L2 EVM — Chain 6133
              </div>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl bg-gradient-to-r from-fd-foreground to-fd-foreground/70 bg-clip-text text-transparent">
              Pars Protocol
            </h1>
            <p className="mt-6 text-lg leading-8 text-fd-muted-foreground">
              Decentralized governance and treasury protocol for the Persian diaspora.
              10 committees, transparent funding, community-driven decisions.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-4">
              <Link
                href="/docs"
                className="rounded-lg bg-fd-primary px-5 py-2.5 text-sm font-semibold text-fd-primary-foreground shadow-sm hover:bg-fd-primary/90 transition-colors"
              >
                Documentation
              </Link>
              <Link
                href="https://pars.vote"
                className="rounded-lg px-5 py-2.5 text-sm font-semibold text-fd-foreground ring-1 ring-fd-border hover:bg-fd-muted transition-colors"
              >
                Launch App →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y border-fd-border bg-fd-muted/30">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <dl className="grid grid-cols-2 gap-x-8 gap-y-8 text-center lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="mx-auto flex max-w-xs flex-col">
                <dt className="text-base leading-7 text-fd-muted-foreground">{stat.label}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-fd-foreground">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Features Grid */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Protocol Components
          </h2>
          <p className="mt-4 text-lg text-fd-muted-foreground">
            Governance, treasury, and native precompiles for the Pars ecosystem
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <Link
              key={feature.title}
              href={feature.href}
              className="group relative rounded-xl border border-fd-border bg-fd-card p-6 hover:border-fd-primary/50 hover:bg-fd-muted/50 transition-all"
            >
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-fd-foreground group-hover:text-fd-primary transition-colors">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm text-fd-muted-foreground">
                {feature.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Committees Section */}
      <section className="border-t border-fd-border bg-fd-muted/30">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              10 Specialized Committees
            </h2>
            <p className="mt-4 text-lg text-fd-muted-foreground">
              Each committee manages a specific domain with dedicated treasury allocation
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {committees.map((committee) => (
              <div
                key={committee.name}
                className="rounded-xl border border-fd-border bg-fd-card p-4 text-center hover:border-fd-primary/50 transition-all"
              >
                <div className="text-xl font-bold text-fd-primary mb-1">{committee.name}</div>
                <div className="text-lg text-fd-muted-foreground mb-2">{committee.persian}</div>
                <div className="text-xs text-fd-muted-foreground">{committee.focus}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Token System */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight">Token System</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="mx-auto w-12 h-12 rounded-full bg-fd-primary/10 flex items-center justify-center mb-4">
              <span className="text-2xl">🪙</span>
            </div>
            <h3 className="font-semibold mb-2">PARS</h3>
            <p className="text-sm text-fd-muted-foreground">Base governance token</p>
          </div>
          <div className="text-center">
            <div className="mx-auto w-12 h-12 rounded-full bg-fd-primary/10 flex items-center justify-center mb-4">
              <span className="text-2xl">💎</span>
            </div>
            <h3 className="font-semibold mb-2">xPARS</h3>
            <p className="text-sm text-fd-muted-foreground">Staked PARS with yield</p>
          </div>
          <div className="text-center">
            <div className="mx-auto w-12 h-12 rounded-full bg-fd-primary/10 flex items-center justify-center mb-4">
              <span className="text-2xl">🗳️</span>
            </div>
            <h3 className="font-semibold mb-2">vePARS</h3>
            <p className="text-sm text-fd-muted-foreground">Vote-escrowed governance</p>
          </div>
          <div className="text-center">
            <div className="mx-auto w-12 h-12 rounded-full bg-fd-primary/10 flex items-center justify-center mb-4">
              <span className="text-2xl">🌐</span>
            </div>
            <h3 className="font-semibold mb-2">MIGA</h3>
            <p className="text-sm text-fd-muted-foreground">Freedom of Information DAO</p>
          </div>
        </div>
      </section>

      {/* Contracts Callout */}
      <section className="border-t border-fd-border">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <a
            href="https://github.com/parsdao/contracts"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between rounded-xl border border-fd-border bg-gradient-to-r from-fd-muted/50 to-fd-card p-6 hover:border-fd-primary/50 transition-all"
          >
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl">📜</span>
                <h3 className="text-lg font-semibold text-fd-foreground group-hover:text-fd-primary transition-colors">
                  Smart Contracts
                </h3>
                <span className="rounded-full bg-fd-primary/10 px-2.5 py-0.5 text-xs font-medium text-fd-primary">
                  Solidity
                </span>
              </div>
              <p className="mt-2 text-sm text-fd-muted-foreground max-w-xl">
                PARS, xPARS, vePARS tokens, Council, Charter, Treasury, and BondDepository contracts.
              </p>
            </div>
            <span className="text-fd-muted-foreground group-hover:text-fd-primary transition-colors">→</span>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-fd-border">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-sm font-semibold text-fd-foreground mb-4">Protocol</h4>
              <ul className="space-y-2">
                <li><Link href="/docs" className="text-sm text-fd-muted-foreground hover:text-fd-foreground">Documentation</Link></li>
                <li><Link href="/docs/governance/council" className="text-sm text-fd-muted-foreground hover:text-fd-foreground">Governance</Link></li>
                <li><Link href="/docs/tokens/pars" className="text-sm text-fd-muted-foreground hover:text-fd-foreground">Tokens</Link></li>
                <li><Link href="/docs/treasury/overview" className="text-sm text-fd-muted-foreground hover:text-fd-foreground">Treasury</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-fd-foreground mb-4">Network</h4>
              <ul className="space-y-2">
                <li><Link href="https://pars.vote" className="text-sm text-fd-muted-foreground hover:text-fd-foreground">Governance App</Link></li>
                <li><Link href="https://explorer.pars.network" className="text-sm text-fd-muted-foreground hover:text-fd-foreground">Explorer</Link></li>
                <li><Link href="https://bridge.pars.network" className="text-sm text-fd-muted-foreground hover:text-fd-foreground">Bridge</Link></li>
                <li><Link href="https://pars.network" className="text-sm text-fd-muted-foreground hover:text-fd-foreground">Website</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-fd-foreground mb-4">Developers</h4>
              <ul className="space-y-2">
                <li><Link href="https://github.com/parsdao" className="text-sm text-fd-muted-foreground hover:text-fd-foreground">GitHub</Link></li>
                <li><Link href="https://github.com/parsdao/contracts" className="text-sm text-fd-muted-foreground hover:text-fd-foreground">Contracts</Link></li>
                <li><Link href="https://github.com/parsdao/pips" className="text-sm text-fd-muted-foreground hover:text-fd-foreground">PIPs</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-fd-foreground mb-4">Community</h4>
              <ul className="space-y-2">
                <li><Link href="https://discord.gg/pars" className="text-sm text-fd-muted-foreground hover:text-fd-foreground">Discord</Link></li>
                <li><Link href="https://twitter.com/parsprotocol" className="text-sm text-fd-muted-foreground hover:text-fd-foreground">Twitter</Link></li>
                <li><Link href="https://t.me/parsprotocol" className="text-sm text-fd-muted-foreground hover:text-fd-foreground">Telegram</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-fd-border pt-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-fd-muted-foreground">
              &copy; 2025 Pars Protocol. MIT License.
            </p>
            <p className="text-sm text-fd-muted-foreground">
              Built on Pars Network
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
