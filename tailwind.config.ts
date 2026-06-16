import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#1462FF",
          picton: "#3ABEF9",
          water: "#C7ECFD",
          navy: "#0F0C4A",
          "navy-soft": "#1A1660",
          "blue-soft": "#EEF6FF",
        },
      },
      fontFamily: {
        spotnik: ["CA Spotnik", "system-ui", "sans-serif"],
        sora: ["Sora", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "hero-gradient":
          "radial-gradient(ellipse 80% 60% at 60% 0%, #C7ECFD22 0%, transparent 70%), radial-gradient(ellipse 40% 40% at 100% 50%, #3ABEF920 0%, transparent 60%)",
        "blue-gradient":
          "linear-gradient(135deg, #1462FF 0%, #3ABEF9 100%)",
        "card-glass":
          "linear-gradient(135deg, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.65) 100%)",
      },
      boxShadow: {
        "card-float":
          "0 8px 32px rgba(20, 98, 255, 0.10), 0 2px 8px rgba(20, 98, 255, 0.06)",
        "card-hover":
          "0 16px 48px rgba(20, 98, 255, 0.16), 0 4px 12px rgba(20, 98, 255, 0.08)",
        "btn-primary":
          "0 4px 24px rgba(20, 98, 255, 0.35)",
        "btn-hover":
          "0 8px 32px rgba(20, 98, 255, 0.5)",
      },
      animation: {
        "float-slow": "floatSlow 6s ease-in-out infinite",
        "float-medium": "floatMedium 5s ease-in-out infinite",
        "float-fast": "floatFast 4s ease-in-out infinite",
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "scale-in": "scaleIn 0.5s ease-out forwards",
        "shimmer": "shimmer 2s linear infinite",
      },
      keyframes: {
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        floatMedium: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-7px)" },
        },
        floatFast: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-5px)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.92)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      screens: {
        xs: "375px",
      },
    },
  },
  plugins: [],
};

export default config;
