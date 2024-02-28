/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./node_modules/flowbite/**/*.js",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          primary: "#590EB0",
          secondary: "#FFFFFF",
        },
        gray: {
          light: "#ecf0f1",
          dark: "#2c3e50",
        },
        text: "#333333",
        negative: "#e74c3c",
      },
      screens: {
        xs: "400px",
      },
      maxWidth: {
        "10xl": "1680px",
      },
    },
  },
  plugins: ["flowbite/plugin"],
  darkMode: "class",
};
