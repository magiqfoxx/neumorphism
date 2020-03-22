import colors from "../../tokens/colors";

const variants = {
  primary: {
    backgroundColor: colors.primary,
    color: colors.white,
    boxShadow: "20px 20px 60px #359185, -20px -20px 60px #47c4b5"
  },
  secondary: {
    backgroundColor: colors.secondary,
    color: colors.white
  },
  error: {
    backgroundColor: colors.error,
    color: colors.white
  },
  success: {
    backgroundColor: colors.success,
    color: colors.white
  },
  disabled: {
    backgroundColor: colors.disabled,
    color: colors.black,
    cursor: "default",
    focus: "none"
  },
  light: {
    backgroundColor: colors.light,
    boxShadow:
      "2px 1px 5px 0px rgb(191,201,211), -2px -2px 3px rgb(255,255,255)",
    ":active": {
      boxShadow: "inset 3px 3px 7px #bfc9d3, inset -3px -3px 7px #f9f9f900"
    },
    ":focus": {
      outline: "none"
    }
  }
};

export default variants;

export const listOfVariants = Object.keys(variants);
