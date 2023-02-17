import styled from "styled-components";

function Header() {
  return (
    <HeaderDiv>
      <HeaderLeftDiv>
        <HeaderBigTxt>More than just shorter links</HeaderBigTxt>
        <HeaderSmallTxt>
          Build your brands recognition and get detailed insights on how your
          links are performing.
        </HeaderSmallTxt>
        <SignupBtn>
          <h3>Get Started</h3>
        </SignupBtn>
      </HeaderLeftDiv>
      <HeaderRightDiv>
        <HeaderImg src="/illustration-working.png" alt="img" />
      </HeaderRightDiv>
    </HeaderDiv>
  );
}

const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

const HeaderLeftDiv = styled.div`
  width: 50%;
  margin: 2rem 0;
`;
const HeaderRightDiv = styled.div`
  position: relative;
  width: 50%;
`;

const HeaderImg = styled.img`
  margin: auto;
`;

const HeaderBigTxt = styled.h1`
  font-size: 70px;
  color: hsl(260, 8%, 14%);
  line-height: 5rem;
  margin-bottom: 0;
`;

const HeaderSmallTxt = styled.h4`
  color: hsl(0, 0%, 75%);
  font-size: 25px;
`;

const SignupBtn = styled.button`
  background-color: hsl(180, 66%, 49%);
  padding: 0.2px 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 50px;

  > h3 {
    color: white;
    font-size: 20px;
  }
`;

export default Header;
