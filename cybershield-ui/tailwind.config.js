/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        night: '#0f172a',
        abyss: '#1e293b',
        neon: '#22ff88',
      },
      boxShadow: {
        glow: '0 0 20px rgba(34, 255, 136, 0.35)',
      },
      animation: {
        'pulse-slow': 'pulse 8s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
    },
  },
  plugins: [],
}

