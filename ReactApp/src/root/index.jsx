import React from "react";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "../utils/PrivateRoute";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";

const Root = () => {
  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route path="/" element={<HomePage/>}></Route>
      </Route>
      <Route path="/login" element={<LoginPage/>}></Route>
    </Routes>
  );
};

export default Root;
