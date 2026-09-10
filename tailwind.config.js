/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          void: '#050505',
          black: '#0a0a0a',
          dark: '#111111',
          surface: '#161616',
          card: '#1c1c1c',
          border: '#2a2a2a',
          borderLight: '#3a3a3a',
          concrete: '#737373',
          muted: '#a3a3a3',
          light: '#e5e5e5',
          white: '#ffffff',
          accent: '#ffffff',
          gold: '#c5a880',
        }
      },
      fontFamily: {
        sans: ['Space Grotesk', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Syncopate', 'Space Grotesk', 'sans-serif'],
      },
      letterSpacing: {
        'widest-plus': '0.25em',
        'luxury': '0.35em',
      },
      boxShadow: {
        'card': '0 8px 30px rgba(0, 0, 0, 0.7)',
        'glow': '0 0 35px rgba(255, 255, 255, 0.06)',
      },
      backgroundImage: {
        'noise-radial': 'radial-gradient(circle at 50% 0%, rgba(35, 35, 35, 0.5) 0%, rgba(5, 5, 5, 0.95) 75%)',
        'metallic-shimmer': 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.01) 50%, rgba(255,255,255,0.05) 100%)',
      }
    },
  },
  plugins: [],
}
