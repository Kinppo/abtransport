import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Hamburger from "./Hamburger";
import SideBar from "./SideBar";
import { Link } from "gatsby";
const Container = styled.div`
  .header-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 40px;
    position: fixed;
    z-index: 2;
    width: 100%;
    transition: all 0.5s;
  }
  .nav-item {
    display: flex;
  }
  .logo {
    font-family: "Kalam", sans-serif;
    margin-right: 60px;
    font-size: 16px;
    font-weight: 900;
    position: relative;
    transform: translateY(-1px);
    color: #ff7533;
    &:hover {
      &:after {
        transform: scaleX(0) !important;
      }
    }
  }
  h5 {
    font-size: 14px;
    margin: 0px 20px;
    font-weight: 600;
    cursor: pointer;
    padding: 35px 0px;
    position: relative;
    &:after {
      position: absolute;
      width: 100%;
      top: 92px;
      display: block;
      content: "";
      transform: scaleX(0);
      border-bottom: 3px solid #ff7533;
      -webkit-transition: -webkit-transform 250ms ease-in-out;
      transition: -webkit-transform 250ms ease-in-out;
      transition: transform 250ms ease-in-out;
      transition: transform 250ms ease-in-out;
    }
    &:hover {
      &:after {
        transform: scaleX(1);
      }
    }
  }
  button {
    background: transparent;
    padding: 7px 15px;
    border-radius: 100px;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
    background: #ff7533 !important;
    color: #f6f8fc;
    margin-left: 10px;
    transition: all 0.5s;
    &:hover {
      filter: brightness(110%);
    }
  }
  .login {
    padding: 7px 15px;
    transition: all 0.4s;
    &:hover {
      color: #ff7533;
      &:after {
        transform: scaleX(0) !important;
      }
    }
  }
  .active-link {
    border-bottom: 3px solid #ff7533;
  }
  .sticky-header {
    background: #f6f8fc;
    animation: animate 0.8s ease;
  }
  @keyframes animate {
    from {
      transform: translateY(-100%);
    }
    to {
      transform: translateY(0%);
    }
  }
  .hamburger {
    display: none;
    margin-right: 2em;
    margin-top: 2px;
    &:hover {
      color: #ff7533;
      &:after {
        transform: scaleX(0) !important;
      }
    }
  }
  @media only screen and (max-width: 825px) {
    .nav-link {
      display: none;
    }
    .hamburger {
      display: block;
    }
    .header-wrapper {
      padding: 0px 10px;
    }
    .logo {
      margin-right: 20px;
    }
  }
  @media only screen and (max-width: 460px) {
    .login {
      display: none;
    }
  }
`;
const Header = () => {
  useEffect(() => {
    window.onscroll = function() {
      myFunction();
    };
    var header = document.querySelector(".header-wrapper");
    function myFunction() {
      if (window.pageYOffset > 20) {
        header.classList.add("sticky-header");
      } else {
        header.classList.remove("sticky-header");
      }
    }
  });
  const [SideBarIsActive, toggleSideBar] = useState(false);
  return (
    <Container>
      <div className="header-wrapper">
        <div className="nav-item">
          <h5
            className="hamburger"
            onClick={() => toggleSideBar(!SideBarIsActive)}
          >
            <Hamburger />
          </h5>
          <Link to="/">
            <h5 className="logo">Linkroof</h5>
          </Link>
          <Link to="/">
            <h5 className="active-link nav-link">Accueil</h5>
          </Link>
          <Link to="/Louer">
            <h5 className="nav-link">Louer</h5>
          </Link>
          <Link to="/">
            <h5 className="nav-link">Contact</h5>
          </Link>
          <Link to="/">
            <h5 className="nav-link">Linkroof</h5>
          </Link>
        </div>
        <div className="nav-item">
          <h5 className="login">Login</h5>
          <button>+ Annoncer</button>
        </div>
      </div>

      <SideBar SideBarIsActive={SideBarIsActive} />
    </Container>
  );
};

export default Header;
