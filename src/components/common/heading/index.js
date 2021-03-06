import React from "react";
import PropTypes from "prop-types";

import { Title1, Title2, Title3, Title4, Title5, Title6, Span } from "./styles";

const Heading = ({ children, variant, weight, cap }) => {
  const setHeading = () => {
    switch (variant) {
      case "h1":
        return <Title1>{children}</Title1>;
      case "h2":
        return <Title2>{children}</Title2>;
      case "h3":
        return <Title3>{children}</Title3>;
      case "h4":
        return <Title4>{children}</Title4>;
      case "h5":
        return <Title5>{children}</Title5>;
      case "h6":
        return <Title6>{children}</Title6>;
      default:
        return <Title1>{children}</Title1>;
    }
  };
  return (
    <Span weight={weight} cap={cap}>
      {setHeading()}
    </Span>
  );
};

Heading.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  variant: PropTypes.string,
  weight: PropTypes.string,
  cap: PropTypes.string,
};

Heading.defaultProps = {
  variant: "h3",
  weight: "bold",
  cap: "default",
};

export default Heading;
