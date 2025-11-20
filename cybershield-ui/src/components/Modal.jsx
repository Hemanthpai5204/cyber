import clsx from 'clsx'
import { X } from 'lucide-react'

const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  size = 'md',
  placement = 'center',
  footer,
}) => {
  if (!isOpen) return null

  const sizeMap = {
    sm: 'max-w-md',
    md: 'max-w-2xl',
    lg: 'max-w-4xl',
  }

  const placementMap = {
    center: 'items-center',
    right: 'items-start justify-end',
  }

  return (
    <div className="fixed inset-0 z-40 flex">
      <div
        className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm"
        onClick={onClose}
      />
      <div
        className={clsx(
          'relative z-50 flex h-full w-full overflow-y-auto p-6',
          placementMap[placement],
        )}
      >
        <div
          className={clsx(
            'w-full rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-2xl shadow-black/40',
            sizeMap[size],
            placement === 'right' ? 'h-full max-w-md rounded-none rounded-l-2xl' : '',
          )}
        >
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-white">{title}</h3>
            <button
              className="rounded-full border border-transparent p-1 text-slate-400 transition hover:border-slate-700 hover:text-neon"
              onClick={onClose}
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="space-y-4 text-sm text-slate-200">{children}</div>
          {footer && <div className="mt-6">{footer}</div>}
        </div>
      </div>
    </div>
  )
}

export default Modal

