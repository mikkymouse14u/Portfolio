import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#131318',
        panel: '#1c1c26',
        border: '#2b2b38',
        accent: '#b087f0',
        'accent-dim': '#8a63c9',
        'text-secondary': '#8d8da0',
        'text-tertiary': '#63636f',
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'monospace'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config
