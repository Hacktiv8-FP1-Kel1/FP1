import { createStitches } from "@stitches/react";

const stitches = createStitches({
  theme: {
    colors: {
      primary0: "#000000",
      primary1: "#150050",
      primary2: "#3F0071",
      primary3: "#FB2576",

      white: "#FFFFFF",
    },
    fontWeights: {
      regular: 400,
      semiBold: 600,
      bold: 700,
    },
    fontSizes: {
      body1: 24,
      body2: 22,
      body3: 20,
      body4: 18,
      body5: 16,
    },
  },
});

export const { css, theme, globalCss } = stitches;
