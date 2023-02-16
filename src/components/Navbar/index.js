import React from "react";
import styled from "styled-components";

function Navbar() {
  return (
    <NavDiv>
      <LogoText>
        Shortly
        <a href="/features">Features</a>
        <a href="/features">Pricing</a>
        <a href="/features">Resources</a>
      </LogoText>

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
`;

const LogoText = styled.h3`
  font-size: 30px;
  color: hsl(255, 11%, 22%);

  > a {
    color: hsl(0, 0%, 75%);
    font-size: 15px;
    margin-left: 1rem;
    text-decoration: none;
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

export default Navbar;
