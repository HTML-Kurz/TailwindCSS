/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    extend: {
      colors: {
        primary: "#74C69D", // Updated to match the design spec
        dark: "#212529",
        "white-75": "rgba(255, 255, 255, 0.75)",
        "dark-50": "rgba(33, 37, 41, 0.50)",
      },

      // ——— SPACING (šířky / výšky) ———
      spacing: {
        /* BTN */ "btn-w": "170px", "btn-h": "48px",
        /* CARD */ "card-w": "279px", "card-h": "299px",
        /* GRID GAP */ "47": "47px",
        /* AVATAR */ "175": "175px",
        /* Content widths */ "416": "416px", "462": "462px", "470": "470px", "335": "335px",  
      },

      // ——— BORDER RADIUS ———
      borderRadius: {
        btn: "5px",
      },

      // ——— SHADOWS ———
      boxShadow: {
        card: "3px 4px 12px 1px rgba(0,0,0,0.25)",
      },

      // ——— FONT SIZES ———
      fontSize: {
        // Base font sizes
        "body": ["15px", "125%"],    // 15 / 18.75 px
        "label": ["16px", { lineHeight: "125%", letterSpacing: "5px" }], // 16 / 20px with tracking
        "sub": ["20px", "125%"],     // 20 / 25 px
        "h1-desktop": ["40px", "125%"], // 40 / 50 px
        "h1-mobile": ["28px", "125%"],  // 28 / 35 px
        "h3-desktop": ["40px", "125%"], // 40 / 50 px
        "h3-mobile": ["24px", "125%"],  // 24 / 30 px
        "cardName": ["24px", "125%"],   // 24 / 30 px
      },

      fontFamily: {
        'sans': ['"Work Sans"', 'sans-serif'],
        'serif': ['"Crimson Text"', 'serif'],
      },
    },
  },
  plugins: [],
};