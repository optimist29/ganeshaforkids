/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'ganesha-orange': '#FF6B35',
        'ganesha-yellow': '#F7931E',
        'ganesha-red': '#DC2626',
        'ganesha-pink': '#F472B6',
        'ganesha-purple': '#A855F7',
        'warm-bg': '#FEF7E0'
      },
      fontFamily: {
        'heading': ['Georgia', 'serif'],
        'body': ['Inter', 'sans-serif']
      },
      animation: {
        'bounce-gentle': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s infinite',
        'float': 'float 3s ease-in-out infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      }
    },
  },
  plugins: [],
}