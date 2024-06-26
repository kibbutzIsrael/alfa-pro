/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {},
   },
   plugins: [require("@tailwindcss/typography"), require("daisyui")],
   daisyui: {
      themes: [
         {
            light: {
               ...require("daisyui/src/theming/themes")["light"],
               primary: "2650BC",
               secondary: "#5C9EF6",
            },
         },
      ],
   },
};
