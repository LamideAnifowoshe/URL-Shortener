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
        <h1 style={{ margin: 0 }}>Shortly</h1>
        <FooterLinkDiv>
          <FooterLinkHeader>Features</FooterLinkHeader>
          <FooterLink href="/">Link Shortening</FooterLink>
          <FooterLink href="/">Branded Links</FooterLink>
          <FooterLink href="/">Analytics</FooterLink>
        </FooterLinkDiv>

        <FooterLinkDiv>
          <FooterLinkHeader>Resources</FooterLinkHeader>
          <FooterLink href="/">Blog</FooterLink>
          <FooterLink href="/">Developes</FooterLink>
          <FooterLink href="/">Support</FooterLink>
        </FooterLinkDiv>

        <FooterLinkDiv>
          <FooterLinkHeader>Company</FooterLinkHeader>
          <FooterLink href="/">About</FooterLink>
          <FooterLink href="/">Our Team</FooterLink>
          <FooterLink href="/">Careers</FooterLink>
          <FooterLink href="/">Contacts</FooterLink>
        </FooterLinkDiv>

        <FooterIconDiv>
          <FooterIcon src="/images/icon-facebook.png" />
          <FooterIcon src="/images/icon-twitter.png" />
          <FooterIcon src="/images/icon-pinterest.png" />
          <FooterIcon src="/images/icon-instagram.png" />
        </FooterIconDiv>
      </FooterDiv2>
    </FooterDiv>
  );
}

const FooterDiv = styled.div`
  margin: 12rem 0 0 0;
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
  background-color: #171717;
  display: flex;
  padding: 4rem;
  justify-content: space-around;
  height: 200px;
`;

const FooterLinkDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
`;

const FooterLinkHeader = styled.h4`
  font-size: 20px;
  margin: 0;
`;

const FooterLink = styled.a`
  text-decoration: none;
  font-size: 15px;
  color: white;
  padding-top: 1rem;
`;

const FooterIconDiv = styled.div`
  display: flex;
`;

const FooterIcon = styled.img`
  width: 25px;
  height: 25px;
  padding-left: 2rem;
`;

export default Footer;
