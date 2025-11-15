/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'neon-300': '#7DFF8C',
        'neon-400': '#5BFF5E',
        'neon-500': '#39FF14',
        'neon-600': '#23CC0C',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glass: '0 20px 45px -20px rgba(57, 255, 20, 0.45)',
      },
      backgroundImage: {
        'grid-neon':
          'linear-gradient(rgba(57, 255, 20, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(57, 255, 20, 0.08) 1px, transparent 1px)',
      },
      backdropBlur: {
        xl: '28px',
      },
      animation: {
        float: 'float 12s ease-in-out infinite',
        pulseGlow: 'pulseGlow 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 0 rgba(57, 255, 20, 0.5)' },
          '50%': { boxShadow: '0 0 30px rgba(57, 255, 20, 0.35)' },
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.glass-dark': {
          background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.85), rgba(15, 23, 42, 0.65))',
          border: '1px solid rgba(148, 163, 184, 0.15)',
          boxShadow: '0 30px 60px -25px rgba(15, 23, 42, 0.8)',
          backdropFilter: 'blur(24px)',
        },
        '.text-glow': {
          textShadow: '0 0 18px rgba(57, 255, 20, 0.45)',
        },
        '.border-neon': {
          borderImage: 'linear-gradient(135deg, rgba(57,255,20,0.45), rgba(148,163,184,0.2)) 1',
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
