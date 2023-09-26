import { Outlet } from "react-router-dom";
import React from "react";
import Header from "./Header/Header";
// import Footer from "./Footer";
// import { styled } from "styled-components";

export default function PageLayout() {
  return (
    <>
      <Header />
      <Outlet />
      {/* <Footer /> */}
    </>
  );
}


