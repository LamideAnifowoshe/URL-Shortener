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
        <CardDiv style={{ marginTop: "2rem" }}>
          <Card>
            <HeaderTxt style={{ fontSize: "20px" }}>
              Brand Recognition
            </HeaderTxt>
            <HeaderSmallTxt>
              Boost your brand recognition with each click. Generic clicks don't
              mean a thing. Branded links help instil confidence in your
              content.
            </HeaderSmallTxt>
          </Card>
          <CardImg src="/icon-brand-recognition.png" alt="img" />
        </CardDiv>
        <CardImg src="/icon-detailed-records.png" alt="img" />

        <CardDiv style={{ marginTop: "4rem" }}>
          <Card>
            <HeaderTxt style={{ fontSize: "20px" }}>Detailed Records</HeaderTxt>
            <HeaderSmallTxt>
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </HeaderSmallTxt>
          </Card>
          <CardImg src="/icon-detailed-records.png" alt="img" />
        </CardDiv>

        <CardDiv style={{ marginTop: "6rem" }}>
          <Card>
            <HeaderTxt style={{ fontSize: "20px" }}>
              Fully Customizable
            </HeaderTxt>
            <HeaderSmallTxt>
              Improve brand awareness and content discoverability through
              customizable links supercharging audience engagement.
            </HeaderSmallTxt>
          </Card>
          <CardImg src="/icon-fully-customizable.png" alt="img" />
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
  font-size: 17px;
`;

const CardDivs = styled.div`
  display: flex;
  justify-content: space-around;
`;

const CardDiv = styled.div`
  width: 30%;
  height: 200px;
  position: relative;
  padding: 2.5rem;
`;

const Card = styled.div`
  padding: 5rem 1rem 1rem 1rem;
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
  top: 0;
  left: 3.5rem;
`;

export default Advanced;
