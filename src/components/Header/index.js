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
        <HeaderImg src="/illustration-working.svg" alt="img" />
      </HeaderRightDiv>
    </HeaderDiv>
  );
}

const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;

  @media (max-width: 728px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const HeaderLeftDiv = styled.div`
  width: 50%;
  margin: 2rem 0;

  @media (max-width: 728px) {
    width: 100%;
    position: absolute;
    top: 17rem;
  }
`;

const HeaderRightDiv = styled.div`
  position: relative;
  width: 50%;
  box-sizing: border-box;

  @media (max-width: 728px) {
    width: 100%;
    position: absolute;
    top: 0;
  }
`;

const HeaderImg = styled.img`
  margin: auto;
  width: 100%;

  @media (max-width: 728px) {
    height: 300px;
  }
`;

const HeaderBigTxt = styled.h1`
  font-size: 70px;
  color: hsl(260, 8%, 14%);
  line-height: 5rem;
  margin-bottom: 0;

  @media (max-width: 728px) {
    font-size: 40px;
    line-height: 3rem;
    text-align: center;
  }
`;

const HeaderSmallTxt = styled.h4`
  color: hsl(0, 0%, 75%);
  font-size: 25px;

  @media (max-width: 728px) {
    font-size: 18px;
    text-align: center;
  }
`;

const SignupBtn = styled.button`
  background-color: hsl(180, 66%, 49%);
  padding: 0.2px 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 50px;
  cursor: pointer;

  > h3 {
    color: white;
    font-size: 20px;
  }

  @media (max-width: 728px) {
    margin: auto;
  }
`;

export default Header;
