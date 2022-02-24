import React from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";
import Button from "../common/button";
import { ArrowLeft } from "../icons";

const BackButton = ({ children }) => (
  <Link to="/">
    <Button variant="text" ariaLabel="back to home">
      <ArrowLeft />
      {children}
    </Button>
  </Link>
);

BackButton.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default BackButton;
