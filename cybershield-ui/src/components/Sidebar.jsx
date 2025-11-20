import { NavLink } from 'react-router-dom'
import {
  Activity,
  AlertTriangle,
  Lock,
  Shield,
  ShieldCheck,
  Users,
} from 'lucide-react'
import clsx from 'clsx'

const navItems = [
  { to: '/', label: 'Dashboard', icon: ShieldCheck },
  { to: '/data-protection', label: 'Data Protection', icon: Lock },
  { to: '/network-monitor', label: 'Network Monitor', icon: Activity },
  { to: '/access-control', label: 'Access Control', icon: Users },
  { to: '/alerts', label: 'Alerts Center', icon: AlertTriangle },
]

const Sidebar = () => {
  return (
    <aside className="flex h-screen w-64 flex-col border-r border-slate-800 bg-slate-950/80 px-4 py-6 backdrop-blur">
      <div className="flex items-center gap-3 px-2">
        <div className="rounded-2xl border border-neon/60 bg-night/80 p-2 shadow-glow">
          <Shield className="h-6 w-6 text-neon" />
        </div>
        <div>
          <p className="text-lg font-semibold text-white">CyberShield</p>
          <p className="text-xs uppercase tracking-wide text-slate-400">Security Command</p>
        </div>
      </div>

      <nav className="mt-10 flex flex-1 flex-col gap-2 text-sm">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              clsx(
                'flex items-center gap-3 rounded-xl px-3 py-3 font-medium text-slate-300 transition hover:bg-slate-800/60 hover:text-white',
                isActive && 'bg-slate-800/80 text-neon shadow-inner shadow-black/50',
              )
            }
          >
            <item.icon className="h-4 w-4" />
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 text-xs text-slate-400">
        <p className="font-semibold text-white">System Status</p>
        <p className="mt-1 text-neon">Secure perimeter active</p>
        <p className="mt-3 text-[11px]">Last sync: 2 mins ago</p>
      </div>
    </aside>
  )
}

export default Sidebar

