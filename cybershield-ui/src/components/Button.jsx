import clsx from 'clsx'

const baseStyles =
  'inline-flex items-center justify-center gap-2 rounded-lg border text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon disabled:cursor-not-allowed disabled:opacity-50'

const variantStyles = {
  primary: 'bg-neon/80 hover:bg-neon text-night border-transparent shadow-glow',
  secondary: 'bg-abyss border-abyss hover:border-neon/70 hover:text-neon',
  outline: 'bg-transparent border-slate-600 text-slate-200 hover:border-neon/70 hover:text-neon',
  ghost: 'bg-transparent border-transparent text-slate-300 hover:text-neon',
}

const sizeStyles = {
  sm: 'px-3 py-1.5 text-xs',
  md: 'px-4 py-2 text-sm',
  lg: 'px-5 py-3 text-base',
}

const Button = ({ variant = 'primary', size = 'md', className, icon: Icon, children, ...props }) => (
  <button
    className={clsx(baseStyles, variantStyles[variant], sizeStyles[size], className)}
    {...props}
  >
    {Icon && <Icon className="h-4 w-4" />}
    {children}
  </button>
)

export default Button

