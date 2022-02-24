import React from "react";
import PropTypes from "prop-types";

import Container from "../container";
import { Content } from "./styles";

const Section = ({ children }) => (
  <Content>
    <Container>{children}</Container>
  </Content>
);

Section.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Section;
