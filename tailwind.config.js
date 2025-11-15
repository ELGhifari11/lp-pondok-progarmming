/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          100: '#ECE8FF',
          200: '#D7CEFF',
          300: '#BBA6FF',
          400: '#8F74FF',
          500: '#6C4DFF',
          600: '#4C2FD4',
        },
        midnight: '#050213',
        'surface-900': '#08051C',
        accent: '#FFB356',
        skyglow: '#38BDF8',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        brand: '0 30px 70px -30px rgba(143, 116, 255, 0.6)',
        glow: '0 0 0 1px rgba(255, 255, 255, 0.05)',
      },
      backgroundImage: {
        'grid-brand':
          'radial-gradient(circle at top left, rgba(143, 116, 255, 0.14), transparent 55%), radial-gradient(circle at bottom right, rgba(56, 189, 248, 0.12), transparent 60%)',
        'hero-radial':
          'radial-gradient(80% 80% at 16% 10%, rgba(143, 116, 255, 0.55), transparent 75%), radial-gradient(80% 80% at 86% 80%, rgba(56, 189, 248, 0.45), transparent 72%)',
      },
      backdropBlur: {
        xl: '28px',
      },
      animation: {
        float: 'float 12s ease-in-out infinite',
        pulseGlow: 'pulseGlow 3s ease-in-out infinite',
        slowSpin: 'slowSpin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 0 rgba(143, 116, 255, 0.5)' },
          '50%': { boxShadow: '0 0 35px rgba(143, 116, 255, 0.35)' },
        },
        slowSpin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.glass-dark': {
          background: 'linear-gradient(135deg, rgba(8, 5, 28, 0.92), rgba(10, 6, 30, 0.72))',
          border: '1px solid rgba(143, 116, 255, 0.16)',
          boxShadow: '0 40px 70px -35px rgba(8, 5, 28, 0.9)',
          backdropFilter: 'blur(28px)',
        },
        '.text-glow': {
          textShadow: '0 0 22px rgba(143, 116, 255, 0.6)',
        },
        '.border-brand': {
          borderImage: 'linear-gradient(135deg, rgba(143, 116, 255, 0.65), rgba(56, 189, 248, 0.2)) 1',
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
