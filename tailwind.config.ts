import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#080B16",
          900: "#0B0F1E",
          800: "#111530",
        },
        brand: {
          blue: "#3B7CFF",
          violet: "#7C3AED",
          cyan: "#22D3EE",
        },
        ink: "#0B0F1E",
        muted: "#6B7280",
        surface: "#F6F7FB",
      },
      fontFamily: {
        sans: [
          "var(--font-inter)",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #22D3EE 0%, #3B7CFF 50%, #7C3AED 100%)",
        "brand-gradient-diag": "linear-gradient(120deg, #3B7CFF 0%, #7C3AED 100%)",
      },
      maxWidth: {
        content: "1200px",
      },
    },
  },
  plugins: [],
};

export default config;
