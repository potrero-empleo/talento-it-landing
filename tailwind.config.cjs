module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        '140': '560px', // permite usar max-w-140 en los componentes
      },
    },
  },
  plugins: [],
};