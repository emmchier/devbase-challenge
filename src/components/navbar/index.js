import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import BackButton from "../back-button";

import Container from "../common/container";

import { Content, Header } from "./styles";

const Navbar = () => {
  const location = useLocation();

  return (
    <Header role="banner">
      <Container>
        {location.pathname !== "/" && <BackButton>Back</BackButton>}
        <Content>
          <NavLink to="/">Home</NavLink>
        </Content>
      </Container>
    </Header>
  );
};

export default Navbar;
