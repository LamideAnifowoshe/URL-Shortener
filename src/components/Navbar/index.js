import React from "react";
import styled from "styled-components";

function Navbar() {
  return (
    <NavDiv>
      <div style={{ display: "flex" }}>
        <Logo src="/logo.png" alt="img" />
        <div>
          <NavLink href="/features">Features</NavLink>
          <NavLink href="/features">Pricing</NavLink>
          <NavLink href="/features">Resources</NavLink>
        </div>
      </div>

      <div style={{ display: "flex" }}>
        <LoginBtn>
          <h3>Login</h3>
        </LoginBtn>
        <SignupBtn>
          <h3>Sign Up</h3>
        </SignupBtn>
      </div>
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

export default Navbar;
