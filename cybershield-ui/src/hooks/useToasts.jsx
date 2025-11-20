import { createContext, useCallback, useContext, useMemo, useState } from 'react'
import ToastViewport from '../components/ToastViewport.jsx'

const ToastContext = createContext({
  addToast: () => {},
  removeToast: () => {},
})

const createToast = (toast) => ({
  id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now() + Math.random()),
  title: toast.title || '',
  description: toast.description || '',
  type: toast.type || 'info',
  duration: toast.duration || 4000,
})

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([])

  const removeToast = useCallback((id) => {
    setToasts((current) => current.filter((toast) => toast.id !== id))
  }, [])

  const addToast = useCallback((toast) => {
    const next = createToast(toast)
    setToasts((current) => [...current, next])
    setTimeout(() => removeToast(next.id), next.duration)
    return next.id
  }, [removeToast])

  const value = useMemo(
    () => ({
      addToast,
      removeToast,
    }),
    [addToast, removeToast],
  )

  return (
    <ToastContext.Provider value={value}>
      {children}
      <ToastViewport toasts={toasts} onDismiss={removeToast} />
    </ToastContext.Provider>
  )
}

export const useToasts = () => useContext(ToastContext)

