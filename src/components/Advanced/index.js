import styled from "styled-components";

function Advanced() {
  return (
    <AdvancedDiv>
      <HeaderTxt>Advanced Statistics</HeaderTxt>
      <HeaderSmallTxt>
        Track how your links are performing accross the web with <br />
        our advanced statistics dashboard.
      </HeaderSmallTxt>
      <CardDiv>
        <Card>
          <HeaderTxt style={{ fontSize: "20px" }}>Brand Recognition</HeaderTxt>
          <HeaderSmallTxt>
            Boost your brand recognition witheach click. Generic clicks don't
            mean a thing. Branded links help instil confidence in your content.
          </HeaderSmallTxt>
        </Card>

        <Card style={{ marginTop: "1rem" }}>
          <HeaderTxt style={{ fontSize: "20px" }}>Brand Recognitiom</HeaderTxt>
          <HeaderSmallTxt>
            Boost your brand recognition witheach click. Generic clicks don't
            mean a thing. Branded links help instil confidence in your content.
          </HeaderSmallTxt>
        </Card>

        <Card style={{ marginTop: "2rem" }}>
          <HeaderTxt style={{ fontSize: "20px" }}>Brand Recognitiom</HeaderTxt>
          <HeaderSmallTxt>
            Boost your brand recognition witheach click. Generic clicks don't
            mean a thing. Branded links help instil confidence in your content.
          </HeaderSmallTxt>
        </Card>
      </CardDiv>
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

const CardDiv = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Card = styled.div`
  width: 20%;
  height: 200px;
  position: relative;
  padding: 1rem 2rem;
  background-color: white;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.1),
    1px 1px 1px 1px rgba(0, 0, 0, 0.1);
  text-align: center;
  border-radius: 0.5rem;
`;

const CardImg = styled.img`
  background-color: hsl(260, 8%, 14%);
  border: none;
  border-radius: 5rem;
  position: absolute;
`;

export default Advanced;
