import clsx from 'clsx'
import { AlertCircle, CheckCircle2, Info, ShieldAlert } from 'lucide-react'

const iconMap = {
  success: CheckCircle2,
  error: ShieldAlert,
  warning: AlertCircle,
  info: Info,
}

const backgroundMap = {
  success: 'bg-emerald-500/15 border-emerald-400 text-emerald-200',
  error: 'bg-rose-500/15 border-rose-400 text-rose-100',
  warning: 'bg-amber-500/15 border-amber-400 text-amber-100',
  info: 'bg-sky-500/15 border-sky-400 text-sky-100',
}

const ToastViewport = ({ toasts, onDismiss }) => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {toasts.map((toast) => {
        const Icon = iconMap[toast.type] || Info
        return (
          <div
            key={toast.id}
            className={clsx(
              'rounded-lg border px-4 py-3 shadow-glow backdrop-blur-sm transition-all',
              backgroundMap[toast.type],
            )}
          >
            <div className="flex items-start gap-3">
              <Icon className="mt-1 h-4 w-4 shrink-0" />
              <div className="flex-1">
                <p className="text-sm font-semibold tracking-wide uppercase text-slate-100">
                  {toast.title}
                </p>
                <p className="text-sm text-slate-200">{toast.description}</p>
              </div>
              <button
                className="text-xs font-semibold uppercase text-slate-200 transition hover:text-white"
                onClick={() => onDismiss(toast.id)}
              >
                Close
              </button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default ToastViewport

