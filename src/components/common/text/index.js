import React from "react";
import PropTypes from "prop-types";

import { Paragraph } from "./styles";

const Text = ({ children, weight, cap }) => (
  <Paragraph weight={weight} cap={cap}>
    {children}
  </Paragraph>
);

Text.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  weight: PropTypes.string,
  cap: PropTypes.string,
};

Text.defaultProps = {
  weight: "regular",
  cap: "default",
};

export default Text;
