import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {  },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'basic-green': 'rgb(156, 189, 178)',
        'accent-blue': 'rgb(47, 72, 88)'
      }
    },
  },
  daisyui: {
    themes: [
      {
        portfolioTheme: {
          "primary": "rgb(156, 189, 178)",
          "secondary": "rgb(241, 245, 249)",
          "accent": "rgb(95, 89, 133)",
          "neutral": "rgb(243, 236, 255)"
        },
      }
    ]
  },
  plugins: [require("daisyui")],
}

export default config
