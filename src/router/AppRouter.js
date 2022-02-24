import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "../components/navbar";
import UserDetailContainer from "../components/detail/user-detail-container";
import HomePage from "../pages/home";

import { Body } from "./styles";

export const AppRouter = () => (
  <Router>
    <Navbar />
    <Body>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/:userName" element={<UserDetailContainer />} />
      </Routes>
    </Body>
  </Router>
);
