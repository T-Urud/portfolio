/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      height: {
        unset: "unset",
      },
      screens: {
        imgSizeMQ: "500px",
        profilePicMQ: "430px",
        footerTextMQ: "321px",
      },
    },
  },
  plugins: [],
};
