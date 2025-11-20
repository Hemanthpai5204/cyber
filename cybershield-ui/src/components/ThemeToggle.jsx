import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../hooks/useTheme.jsx'

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-300 transition hover:border-neon/60 hover:text-neon"
    >
      {theme === 'dark' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
      {theme === 'dark' ? 'Night Ops' : 'Daylight'}
    </button>
  )
}

export default ThemeToggle

