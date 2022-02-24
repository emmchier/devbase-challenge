// main theme

export const theme = {
  color: {
    pallete: {
      primary: "#3B89FF",
      primaryDark: "#2564C5",
      primaryLight: "#7eb8ff",
      secondary: "#282828",
      secondaryDark: "#000000",
      secondaryLight: "#505050",
    },
    text: {
      primary: "#252525",
      secondary: "#B1B1B1",
    },
    background: {
      main: "#EDEDED",
      light: "#FFEFF6",
    },
    grey: {
      light: "#EDEDED",
      dark: "#C3BEBE",
    },
    white: "#FFFFFF",
    black: "#252525",
    disabled: "#E5E5E5",
    overlay: "#00000069",
  },
  font: {
    family: "'Roboto', 'sans-serif'",
    largeXXX: {
      size: "3rem", // 48px
      lineHeight: "3.625rem", // 58
    },
    largeXX: {
      size: "2.5rem", // 40px
      lineHeight: "3.125rem", // 50px
    },
    largeX: {
      size: "2rem", // 32px
      lineHeight: "2.625rem", // 42px
    },
    large: {
      size: "1.5rem", // 24px
      lineHeight: "2.125rem", // 34px
    },
    medium: {
      size: "1.125rem", // 18px
      lineHeight: "1.75rem", // 28px
    },
    small: {
      size: "1rem", // 16px
      lineHeight: "1.625rem", // 26px
    },
    smallX: {
      size: "0.875rem", // 14px
      lineHeight: "1.5rem", // 24px
    },
    smallXX: {
      size: "0.625rem", // 10px
      lineHeight: "1.25rem", // 20px
    },
    weight: {
      light: 100,
      regular: 400,
      medium: 500,
      semiBold: 600,
      bold: 700,
    },
  },
  spacing: (unity) => `${0.25 * unity}rem`,
  shadow: {
    main: "0px 2px 4px rgba(0, 0, 0, 0.5);",
  },
  transition: {
    main: "0.1s ease-in-out",
  },
  border: {
    radius: {
      main: "3px",
      full: "50%",
    },
  },
  breakpoints: {
    smallMobile: "max-width: 479px",
    mobile: "max-width: 767px",
    tablet: "max-width: 991px",
    tabletLandscape: "max-width: 1199px",
    desktop: "max-width: 1599px",
  },
};
