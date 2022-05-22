module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: [
    {
      mytheme: {
        primary: "#4B5563",
        secondary: "#F000B8",
        accent: "#37CDBE",
        neutral: "#3D4451",
        "base-100": "#FFFFFF",
        info: "#3ABFF8",
        success: "#36D399",
        warning: "#FBBD23",
        error: "#1F2937",
      },
    },
  ],
  plugins: [require("daisyui")],
};
