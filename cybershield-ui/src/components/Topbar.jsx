import { Bell, Search, ShieldCheck } from 'lucide-react'
import ThemeToggle from './ThemeToggle.jsx'

const Topbar = () => {
  return (
    <header className="sticky top-0 z-30 flex items-center justify-between border-b border-slate-800 bg-slate-950/70 px-8 py-4 backdrop-blur">
      <div className="flex items-center gap-3 text-sm text-slate-400">
        <ShieldCheck className="h-5 w-5 text-neon" />
        <div>
          <p className="text-xs uppercase tracking-wide text-slate-500">Live shield posture</p>
          <p className="text-base font-semibold text-white">No anomalies detected</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
          <input
            type="text"
            placeholder="Search intelligence..."
            className="w-64 rounded-full border border-slate-700 bg-slate-900/70 py-2 pl-9 pr-4 text-sm text-white placeholder:text-slate-500 focus:border-neon focus:outline-none"
          />
        </div>
        <ThemeToggle />
        <button className="relative rounded-full border border-slate-700 bg-slate-900/70 p-2 text-slate-300 transition hover:border-neon/60 hover:text-neon">
          <Bell className="h-5 w-5" />
          <span className="absolute -right-0.5 -top-0.5 inline-flex h-3.5 w-3.5 items-center justify-center rounded-full bg-rose-500 text-[10px] font-bold text-white">
            3
          </span>
        </button>
        <div className="flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-neon/60 to-emerald-400/40" />
          <div>
            <p className="text-xs font-semibold text-white">Ava Sentinel</p>
            <p className="text-[10px] uppercase tracking-wide text-slate-400">Security lead</p>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Topbar

