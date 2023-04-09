import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from './LandingPage'
import Canvas from "../Components/Canvas";

import Auth from "../Components/Auth";

import { Leaderboard } from "../Components/Leaderboard";


const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />


      <Route path="/Auth" element={<Auth />} />

      <Route path="/game" element={<Canvas />} />
      <Route path="/leaderboard" element={<Leaderboard/>} />

    </Routes>
  );
};

export default AllRoutes;