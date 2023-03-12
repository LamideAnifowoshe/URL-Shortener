import styled from "styled-components";
import { SignupBtn } from "../Header";

function Footer() {
  return (
    <FooterDiv>
      <FooterImg>
        <FooterDiv1>
          <h1 style={{ fontSize: "40px" }}>Boost your links today</h1>
          <SignupBtn>
            <h3>Get Started</h3>
          </SignupBtn>
        </FooterDiv1>
      </FooterImg>

      <FooterDiv2>
        <h1>Hi</h1>
      </FooterDiv2>
    </FooterDiv>
  );
}

const FooterDiv = styled.div`
  margin: 12rem 0;
  color: white;
  width: 100vw;
  font-family: "Poppins", sans-serif;
`;

const FooterImg = styled.div`
  background-image: url("/images/bg-boost-desktop.png");
  background-color: hsl(260, 8%, 14%);
  height: 250px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FooterDiv1 = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FooterDiv2 = styled.div`
  background-color: black;
`;

export default Footer;
