import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Eye, EyeOff, Lock, Shield } from 'lucide-react'
import Button from '../components/Button.jsx'
import Card from '../components/Card.jsx'
import { useToasts } from '../hooks/useToasts.jsx'

const LoginPage = () => {
  const navigate = useNavigate()
  const { addToast } = useToasts()
  const [form, setForm] = useState({ email: '', password: '' })
  const [showPassword, setShowPassword] = useState(false)
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validate = () => {
    const nextErrors = {}
    if (!form.email) {
      nextErrors.email = 'Email is required'
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/i.test(form.email)) {
      nextErrors.email = 'Provide a valid email address'
    }
    if (!form.password) {
      nextErrors.password = 'Password is required'
    } else if (form.password.length < 8) {
      nextErrors.password = 'Use at least 8 characters'
    }
    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const handleChange = (event) => {
    setForm((prev) => ({ ...prev, [event.target.name]: event.target.value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!validate()) return
    setIsSubmitting(true)
    setTimeout(() => {
      addToast({
        title: 'Access granted',
        description: 'Session token issued. Welcome back.',
        type: 'success',
      })
      navigate('/')
    }, 900)
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-night via-slate-900 to-abyss text-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="animate-pulse-slow absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-neon/10 blur-3xl" />
        <div className="animate-spin-slow absolute right-10 top-10 h-72 w-72 rounded-full border border-neon/30" />
      </div>
      <Card className="z-10 grid w-full max-w-4xl grid-cols-1 gap-10 bg-slate-950/80 p-10 shadow-2xl shadow-black/40 lg:grid-cols-2">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="rounded-full border border-neon/60 bg-night p-3 shadow-glow">
              <Shield className="h-7 w-7 text-neon" />
            </div>
            <div>
              <p className="text-lg font-semibold">CyberShield UI</p>
              <p className="text-xs uppercase tracking-widest text-slate-500">
                Secure Access Gateway
              </p>
            </div>
          </div>
          <h1 className="text-3xl font-bold">Authenticate to continue</h1>
          <p className="text-sm text-slate-400">
            Hardened login portal with adaptive MFA and telemetry inspection.
          </p>
          <div className="mt-10 flex flex-col gap-4 text-sm text-slate-300">
            <div className="flex items-center gap-3 rounded-2xl border border-slate-800 bg-gradient-to-r from-slate-900 to-slate-950/40 px-4 py-3">
              <Lock className="h-5 w-5 text-neon" />
              <p>256-bit mutual TLS handshake enforced.</p>
            </div>
            <div className="flex w-full flex-wrap gap-2 text-[11px] uppercase tracking-wide text-slate-500">
              <span className="rounded-full border border-slate-700 px-3 py-1">Intrusion watch</span>
              <span className="rounded-full border border-slate-700 px-3 py-1">Shield tokens</span>
              <span className="rounded-full border border-slate-700 px-3 py-1">SIEM sync</span>
            </div>
          </div>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-1 text-sm">
            <label htmlFor="email" className="text-xs uppercase tracking-wide text-slate-400">
              Secure email channel
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-700 bg-slate-900/60 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-neon focus:outline-none"
              placeholder="analyst@cybershield.io"
            />
            {errors.email && <p className="text-xs text-rose-400">{errors.email}</p>}
          </div>

          <div className="space-y-1 text-sm">
            <label htmlFor="password" className="text-xs uppercase tracking-wide text-slate-400">
              Zero trust passphrase
            </label>
            <div className="relative">
              <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                value={form.password}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-700 bg-slate-900/60 px-4 py-3 pr-11 text-sm text-white placeholder:text-slate-500 focus:border-neon focus:outline-none"
                placeholder="••••••••"
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
            {errors.password && <p className="text-xs text-rose-400">{errors.password}</p>}
          </div>

          <div className="flex items-center justify-between text-xs text-slate-400">
            <label className="inline-flex items-center gap-2">
              <input type="checkbox" className="rounded border-slate-700 bg-slate-900" />
              Trust this environment
            </label>
            <button type="button" className="text-neon hover:underline">
              Need help?
            </button>
          </div>

          <Button type="submit" disabled={isSubmitting} className="w-full">
            {isSubmitting ? 'Verifying...' : 'Enter Secure Console'}
          </Button>

          <p className="text-center text-xs text-slate-500">
            All sessions monitored. Unauthorized access is prosecuted.
          </p>
        </form>
      </Card>
    </div>
  )
}

export default LoginPage

