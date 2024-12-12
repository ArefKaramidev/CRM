import { keepTheme } from "keep-react/keepTheme";

const config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: ["#6b7280"],
        secondary: ["#1b4dff"],
      },
    },
  },
};



export default keepTheme(config);
