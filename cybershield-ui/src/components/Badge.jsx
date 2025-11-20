import clsx from 'clsx'

const variants = {
  success: 'bg-emerald-500/10 text-emerald-300 border border-emerald-400/40',
  warning: 'bg-amber-500/10 text-amber-300 border border-amber-400/40',
  danger: 'bg-rose-500/10 text-rose-300 border border-rose-400/40',
  info: 'bg-sky-500/10 text-sky-300 border border-sky-400/40',
  neutral: 'bg-slate-800 text-slate-200 border border-slate-700',
}

const Badge = ({ variant = 'neutral', children, className }) => (
  <span
    className={clsx(
      'inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide',
      variants[variant],
      className,
    )}
  >
    {children}
  </span>
)

export default Badge

