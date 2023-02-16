import styled from "styled-components";
import React, { useState } from "react";
import * as Icon from "react-feather";

function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const toggleMenu = () => {
    setNavbarOpen(!navbarOpen);
  };

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
        <Icon.Menu onClick={() => toggleMenu()} style={{ cursor: "pointer" }} />
        {navbarOpen ? (
          <MenuDiv>
            <MenuNavDiv>
              <a href="/features">Features</a>
            </MenuNavDiv>
            <MenuNavDiv>
              <a href="/features">Pricing</a>
            </MenuNavDiv>
            <MenuNavDiv>
              <a href="/features">Resources</a>
            </MenuNavDiv>{" "}
            <hr />
            <MenuNavDiv>
              <a href="/features">Login</a>
            </MenuNavDiv>
            <MenuBtn>Sign Up</MenuBtn>
          </MenuDiv>
        ) : null}
      </IconDiv>
    </NavDiv>
  );
}

const NavDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
  position: relative;
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

const MenuDiv = styled.div`
  background-color: hsl(260, 8%, 14%);
  margin: auto;
  padding: 0 0 2rem 0;
  border: none;
  border-radius: 10px;
  position: absolute;
  right: 0;
  top: 3rem;
  width: 100%;
`;

const MenuNavDiv = styled.div`
  display: block;
  text-align: center;
  margin: 2rem;

  > a {
    color: white;
    font-size: 20px;
    text-decoration: none;
  }
`;

const MenuBtn = styled.button`
  display: block;
  background-color: hsl(180, 66%, 49%);
  width: 90%;
  text-align: center;
  margin: auto;
  padding: 1rem;
  color: white;
  font-size: 20px;
  border: none;
  border-radius: 30px;
`;

export default Navbar;
