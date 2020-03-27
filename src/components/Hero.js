import React from "react";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";
import scrollTo from "gatsby-plugin-smoothscroll";
import styled from "styled-components";
const Conatiner = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  color: #fff;
  .hero-bg {
    position: relative;
    height: 100%;
    z-index: -1;
    width: 100%;
    max-height: 960px;
    min-height: 500px;
  }
  .hero-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-80%, -40%);
    max-width: 600px;
  }
  h1 {
    font-size: 60px;
    margin-bottom: 15px;
  }
  p {
    font-size: 18px;
    line-height: 1.5em;
    margin-bottom: 30px;
  }
  button {
    font-size: 16px;
    font-weight: 600;
    background: #ff9677;
    color: #fff;
    border-radius: 100px;
    padding: 12px 30px;
    border: 2px solid #ff9677;
    transition: all 0.4s;
    &:hover {
      background: transparent;
    }
  }
  @media only screen and (max-width: 1150px) {
    h1 {
      font-size: 36px;
    }
    p {
      font-size: 16px;
    }
  }
  @media only screen and (max-width: 900px) {
    h1 {
      font-size: 30px;
    }
    p {
      font-size: 16px;
    }
    .hero-content {
      width: 100%;
      max-width: 90vw !important;
      transform: translate(-50%, -50%);
    }
    button {
      font-size: 14px;
      padding: 10px 27px;
    }
  }
`;

const Hero = ({ setActiveLink }) => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "home-bg.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920, maxHeight: 1080) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Conatiner>
      <Img
        fluid={data.file.childImageSharp.fluid}
        alt="bg"
        className="hero-bg"
      />
      <div className="hero-content">
        <h1>WE MAKE SHIPPING VERY EASY </h1>
        <p>
          Join the millions getting bargain deals on shipping cars, furniture,
          freight, and more…
        </p>
        <button
          className="hero-btn"
          onClick={() => {
            scrollTo("#contact");
            setActiveLink(2);
          }}
        >
          Contact Us
        </button>
      </div>
    </Conatiner>
  );
};

export default Hero;
