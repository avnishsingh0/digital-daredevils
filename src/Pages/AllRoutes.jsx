import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from './LandingPage'
import Canvas from "../Components/Canvas";
import Auth from "../Components/Auth";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />

      <Route path="/Auth" element={<Auth />} />
    </Routes>
  );
};

export default AllRoutes;