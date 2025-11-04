/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E40AF',
        'dark-bg': '#0F172A',
        'card-bg': '#1E293B',
        'card-hover': '#334155',
      },
      animation: {
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'glow-drift': 'glow-drift 6s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 4s ease-in-out infinite',
        'glow-pulse-delayed': 'glow-pulse-delayed 4s ease-in-out infinite 1s',
        'light-sweep': 'light-sweep 8s linear infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { 
            opacity: '0.6',
            transform: 'scaleY(1)',
            filter: 'blur(0px)'
          },
          '50%': { 
            opacity: '1',
            transform: 'scaleY(2)',
            filter: 'blur(1px)'
          },
        },
        'glow-drift': {
          '0%, 100%': { 
            opacity: '0.25',
            transform: 'translateX(0) scale(1)'
          },
          '50%': { 
            opacity: '0.35',
            transform: 'translateX(-10px) scale(1.05)'
          },
        },
        'glow-pulse': {
          '0%, 100%': { 
            opacity: '0.2'
          },
          '50%': { 
            opacity: '0.35'
          },
        },
        'glow-pulse-delayed': {
          '0%, 100%': { 
            opacity: '0.15'
          },
          '50%': { 
            opacity: '0.3'
          },
        },
        'light-sweep': {
          '0%': { 
            transform: 'translateX(-100%)',
            opacity: '0'
          },
          '50%': { 
            opacity: '0.6'
          },
          '100%': { 
            transform: 'translateX(100%)',
            opacity: '0'
          },
        },
      },
    },
  },
  plugins: [],
}
