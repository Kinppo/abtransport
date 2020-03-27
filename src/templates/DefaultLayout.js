import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/app.scss";

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="site-main">{children}</main>
      <Footer className="footer" />
    </div>
  );
};

export default DefaultLayout;
