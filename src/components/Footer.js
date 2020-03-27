import React from "react";
import styled from "styled-components";
const Container = styled.div`
  padding: 40px 0px;
  margin: 5em 10vw 0em 10vw;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #e5e5e5;
  flex-wrap: wrap;
  .footer-flex {
    display: flex;
    flex-wrap: wrap;
    p {
      cursor: pointer;
    }
  }
  p {
    margin: 10px 25px;
    font-size: 15px;
    font-weight: 500;
  }
`;
const Footer = () => {
  return (
    <Container>
      <p>&copy; 2020 Linkroof. All Right Reserved</p>
      <div className="footer-flex">
        <p>Privacy Policy</p>
        <p>Terms & Conditions</p>
        <p>(212) 649536827</p>
      </div>
    </Container>
  );
};

export default Footer;
