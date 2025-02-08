const { grey } = require("@mui/material/colors");




const getDesignTokens = (mode) => ({
  palette: {
    // @ts-ignore
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          ali: {
            main: "#64748B",
          },

          favColor: {
            main: grey[300],
          },
        }
      : {
          // palette values for dark mode
          ali: {
            main: "#008080",
          },

          favColor: {
            main: grey[800],
          },
        }),
  },
});


export default getDesignTokens;
