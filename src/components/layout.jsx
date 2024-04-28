import React from "react";
import Header from "./header.jsx";
import Footer from "./footer.jsx";
import "../style/footer.css";
import "../style/header.css";

const Layout = (props) => {
  return (
    <>
      <Header />
      {props.children}
    </>
  );
};

export default Layout;
