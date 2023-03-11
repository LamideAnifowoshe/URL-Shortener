import styled from "styled-components";

function Advanced() {
  return (
    <AdvancedDiv>
      <HeaderTxt>Advanced Statistics</HeaderTxt>
      <HeaderSmallTxt>
        Track how your links are performing accross the web with <br />
        our advanced statistics dashboard.
      </HeaderSmallTxt>
    </AdvancedDiv>
  );
}

const AdvancedDiv = styled.div`
  margin: 3rem 0;
`;

const HeaderTxt = styled.h1`
  font-size: 30px;
  color: hsl(260, 8%, 14%);
  text-align: center;
`;

const HeaderSmallTxt = styled.h4`
  color: hsl(0, 0%, 75%);
  font-size: 15px;
  text-align: center;
`;

export default Advanced;
