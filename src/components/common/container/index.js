import React from "react";
import PropTypes from "prop-types";

import { Content } from "./styles";

const Container = ({ children }) => <Content>{children}</Content>;

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Container;
