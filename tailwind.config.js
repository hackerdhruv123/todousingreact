/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",

  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        // Warm paper palette
        paper: {
          DEFAULT: "#f6f1ea",
          soft: "#fbf8f4",
          deep: "#ebe4d9",
        },
        ink: {
          DEFAULT: "#1c1917",
          soft: "#44403c",
          mute: "#78716c",
          faint: "#a8a29e",
        },
        // Terracotta accent — warm, human
        clay: {
          DEFAULT: "#c45c26",
          deep: "#9a4519",
          soft: "#f3e0d4",
          wash: "#faf0e8",
        },
        // Surfaces
        card: {
          DEFAULT: "#fffcf8",
          dark: "#1a1816",
          "dark-raised": "#24211e",
        },
        line: {
          DEFAULT: "#e8e0d4",
          strong: "#d6cec2",
          dark: "rgba(255,255,255,0.08)",
        },
        night: {
          DEFAULT: "#141210",
          soft: "#1c1917",
        },
        ok: "#3d7a4a",
        danger: "#b91c1c",
      },

      fontFamily: {
        display: [
          '"Fraunces"',
          "Georgia",
          "serif",
        ],
        sans: [
          '"DM Sans"',
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "sans-serif",
        ],
      },

      boxShadow: {
        card: "0 1px 2px rgba(28, 25, 23, 0.04), 0 8px 24px rgba(28, 25, 23, 0.06)",
        lift: "0 2px 8px rgba(28, 25, 23, 0.08)",
        inset: "inset 0 1px 2px rgba(28, 25, 23, 0.04)",
      },

      maxWidth: {
        app: "640px",
      },

      borderRadius: {
        card: "20px",
        item: "14px",
      },
    },
  },

  plugins: [],
};
