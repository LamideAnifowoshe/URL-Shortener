import styled from "styled-components";

function Advanced() {
  return (
    <AdvancedDiv>
      <AdvancedHeaderDiv>
        <HeaderTxt>Advanced Statistics</HeaderTxt>
        <HeaderSmallTxt>
          Track how your links are performing accross the web with <br />
          our advanced statistics dashboard.
        </HeaderSmallTxt>
      </AdvancedHeaderDiv>

      <CardDivs>
        <CardDiv>
          <Card style={{ marginTop: "2rem" }}>
            <HeaderTxt style={{ fontSize: "20px" }}>
              Brand Recognition
            </HeaderTxt>
            <HeaderSmallTxt>
              Boost your brand recognition witheach click. Generic clicks don't
              mean a thing. Branded links help instil confidence in your
              content.
            </HeaderSmallTxt>
          </Card>
          <CardImg src="/icon-brand-recognition.png" alt="img" />
        </CardDiv>

        <CardDiv>
          <Card style={{ marginTop: "3rem" }}>
            <HeaderTxt style={{ fontSize: "20px" }}>
              Brand Recognitiom
            </HeaderTxt>
            <HeaderSmallTxt>
              Boost your brand recognition witheach click. Generic clicks don't
              mean a thing. Branded links help instil confidence in your
              content.
            </HeaderSmallTxt>
          </Card>
        </CardDiv>

        <CardDiv>
          <Card style={{ marginTop: "4rem" }}>
            <HeaderTxt style={{ fontSize: "20px" }}>
              Brand Recognitiom
            </HeaderTxt>
            <HeaderSmallTxt>
              Boost your brand recognition witheach click. Generic clicks don't
              mean a thing. Branded links help instil confidence in your
              content.
            </HeaderSmallTxt>
          </Card>
        </CardDiv>
      </CardDivs>
    </AdvancedDiv>
  );
}

const AdvancedDiv = styled.div`
  margin: 3rem 0;
`;

const AdvancedHeaderDiv = styled.div`
  text-align: center;
`;

const HeaderTxt = styled.h1`
  font-size: 30px;
  color: hsl(260, 8%, 14%);
`;

const HeaderSmallTxt = styled.h4`
  color: hsl(0, 0%, 75%);
  font-size: 18px;
`;

const CardDivs = styled.div`
  display: flex;
  justify-content: space-around;
`;

const CardDiv = styled.div`
  width: 30%;
  height: 200px;
  position: relative;
  padding: 2rem;
`;

const Card = styled.div`
  padding: 2rem;
  background-color: white;
  box-shadow: 5px 1px 1px 5px rgba(0, 0, 0, 0.1),
    5px 1px 1px 5px rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
`;

const CardImg = styled.img`
  background-color: hsl(260, 8%, 14%);
  padding: 1.5rem;
  border: none;
  border-radius: 50px;
  position: absolute;
  top: 2px;
  left: 7rem;
`;

export default Advanced;
