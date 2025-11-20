import clsx from 'clsx'

const Card = ({ className, children }) => (
  <div
    className={clsx(
      'rounded-xl border border-slate-700 bg-slate-900/70 p-5 shadow-lg shadow-black/30 backdrop-blur',
      className,
    )}
  >
    {children}
  </div>
)

export default Card

