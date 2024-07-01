/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#171923", // Darkest
          100: "#1A202C", // Very Dark
          200: "#2D3748", // Darker
          300: "#4A5568", // Dark
          400: "#718096", // Darker Gray
          500: "#A0AEC0", // Medium Gray
          600: "#CBD5E0", // Light Gray
          700: "#E2E8F0", // Lighter Gray
          800: "#EDF2F7", // Light Gray
          900: "#F7FAFC", // Very Light Gray
          950: "#FFFFFF", // Lightest
        },
        accent: {
          50: "#26000F", // Darkest Pink
          100: "#4D001F", // Very Dark Pink
          200: "#800033", // Darker Pink
          300: "#B30046", // Dark Pink
          400: "#E6005C", // Darker Pink
          500: "#FF0066", // Bright Pink
          600: "#FF3380", // Bright Pink
          700: "#FF66B3", // Pink
          800: "#FF99CC", // Light Pink
          900: "#FFCCE5", // Lighter Pink
          950: "#FFE6F0", // Lightest Pink
        },
      },
    },
  },
  plugins: [],
};
