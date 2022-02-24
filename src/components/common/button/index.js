import React from "react";
import PropTypes from "prop-types";

import ButtonContainer from "./styles";

const Button = ({ children, ariaLabel, variant, color, ...rest }) => {
  return (
    <ButtonContainer
      aria-label={ariaLabel}
      variant={variant}
      color={color}
      {...rest}
    >
      {children}
    </ButtonContainer>
  );
};

Button.propTypes = {
  color: PropTypes.string,
  variant: PropTypes.string,
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  ariaLabel: PropTypes.string,
};

Button.defaultProps = {
  color: "primary",
  variant: "contained",
  fullWidth: false,
  disabled: false,
  ariaLabel: "",
};

export default Button;
