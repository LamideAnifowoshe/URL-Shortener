import styled from "styled-components";
import React, { useState } from "react";
import * as Icon from "react-feather";

function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <NavDiv>
      <div style={{ display: "flex" }}>
        <Logo src="/logo.png" alt="img" />
        <NavLinkDiv>
          <NavLink href="/features">Features</NavLink>
          <NavLink href="/features">Pricing</NavLink>
          <NavLink href="/features">Resources</NavLink>
        </NavLinkDiv>
      </div>

      <NavBtnDiv>
        <LoginBtn>
          <h3>Login</h3>
        </LoginBtn>
        <SignupBtn>
          <h3>Sign Up</h3>
        </SignupBtn>
      </NavBtnDiv>

      <IconDiv>
        <Icon.X />
      </IconDiv>
    </NavDiv>
  );
}

const NavDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
`;

const Logo = styled.img`
  width: 100px;
  height: 30px;
`;

const NavLink = styled.a`
  color: hsl(0, 0%, 75%);
  font-size: 15px;
  margin-left: 1rem;
  text-decoration: none;
`;

const NavLinkDiv = styled.div`
  display: flex;

  @media (max-width: 728px) {
    display: none;
  }
`;

const NavBtnDiv = styled.div`
  display: flex;

  @media (max-width: 728px) {
    display: none;
  }
`;

const IconDiv = styled.div`
  display: none;

  @media (max-width: 728px) {
    display: flex;
  }
`;

const LoginBtn = styled.button`
  background-color: white;
  border: none;
  width: 120px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  > h3 {
    color: hsl(0, 0%, 75%);
    font-size: 15px;
  }
`;

const SignupBtn = styled.button`
  background-color: hsl(180, 66%, 49%);
  width: 120px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 30px;

  > h3 {
    color: white;
    font-size: 15px;
  }
`;

const MobileNav = styled.div`
  background-color: hsl(260, 8%, 14%);
  width: 100px;
  height: 200px;
  margin: 2rem 5rem;
  border: none;
  border-radius: 10px;
`;

const MobileNavDiv = styled.div`
  display: block;
  text-align: center;
  color: white;
`;

export default Navbar;
