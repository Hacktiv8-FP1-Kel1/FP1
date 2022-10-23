import { globalCss } from "./style";

export const resetStyles = globalCss({
  "*, *::before, *::after": { boxSizing: "border-box" },
  body: {
    margin: "0",
    fontFamily:
      "Nunito, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
    lineHeight: 1,
  },
});
