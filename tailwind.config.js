/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./public/**/*.svg"],
  theme: {
    extend: {
      keyframes: {
        faultyNeon: {
          '0%': { opacity: '1', textShadow: '0 0 4px #ff007f, 0 0 12px #ff007f, 0 0 24px #ff007f' },
          '20%': { opacity: '0.8', textShadow: '0 0 2px #ff007f, 0 0 6px #ff007f' },
          '40%': { opacity: '1', textShadow: '0 0 8px #ff007f, 0 0 16px #ff007f, 0 0 32px #ff007f' },
          '60%': { opacity: '0.6', textShadow: '0 0 1px #ff007f, 0 0 4px #ff007f' },
          '80%': { opacity: '1', textShadow: '0 0 6px #ff007f, 0 0 12px #ff007f' },
          '100%': { opacity: '0.7', textShadow: '0 0 3px #ff007f, 0 0 9px #ff007f' },
        },
      },
      animation: {
        faultyNeon: 'faultyNeon 1.5s infinite',
      },
      fontFamily: {
        sans: ["Iosevka", "sans-serif"],
        mono: ["var(--font-geist-mono)"],
      },
      typography: {
        quoteless: {
          css: {
            "blockquote p:first-of-type::before": { content: "none" },
            "blockquote p:first-of-type::after": { content: "none" },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require('tailwindcss-textshadow')],
};
