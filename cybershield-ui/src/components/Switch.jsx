import clsx from 'clsx'

const Switch = ({ enabled, onChange, label }) => {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={enabled}
      onClick={() => onChange(!enabled)}
      className={clsx(
        'relative inline-flex h-6 w-11 items-center rounded-full border border-slate-700 transition',
        enabled ? 'bg-neon/80' : 'bg-slate-700',
      )}
    >
      <span
        className={clsx(
          'inline-block h-5 w-5 rounded-full bg-night transition',
          enabled ? 'translate-x-5' : 'translate-x-1',
        )}
      />
      {label && <span className="sr-only">{label}</span>}
    </button>
  )
}

export default Switch

