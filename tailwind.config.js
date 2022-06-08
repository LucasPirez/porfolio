module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        presentation: {
          "0%": {
            transform: "rotate(0)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        back: {
          "0%": { opacity: "0" },
          "100%": { backgopacityround: "1" },
        },
        wiggle: {
          "0%": { transform: "translate(0,-300px)" },
          "100%": { transform: "translate(0,0)" },
        },
        wiggleMedia: {
          "0%": { transform: "translate(100px,0)" },
          "100%": { transform: "translate(0,0)" },
        },

        rot: {
          "0%": { transform: "rotateY(0)" },
          "50%": {
            transform: "rotateY(-30deg)",
          },
          "100%": { transform: "rotateY(0)" },
        },
      },

      animation: {
        aniRot: "rot 3s linear infinite",
      },
    },
  },
};
//
