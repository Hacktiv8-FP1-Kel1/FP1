import { globalCss } from "./style";

export const resetStyles = globalCss({
  "*, *::before, *::after": { boxSizing: "border-box" },
  body: {
    margin: "0",
    fontFamily: "Nunito",
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
    lineHeight: 1,
  },
});
