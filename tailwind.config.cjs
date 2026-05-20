module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // আমরা DaisyUI এর data-theme পদ্ধতি ব্যবহার করবো (অথবা চাইলে 'class' ব্যবহার করা যায়)
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"],
    darkTheme: "dark",
  },
};
