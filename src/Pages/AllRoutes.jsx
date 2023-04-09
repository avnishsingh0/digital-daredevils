import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from './LandingPage'
import Canvas from "../Components/Canvas";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/game" element={<Canvas />} />
    </Routes>
  );
};

export default AllRoutes;