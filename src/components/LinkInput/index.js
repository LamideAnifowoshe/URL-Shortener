import styled from "styled-components";

function LinkInput() {
  return (
    <LinkDiv>
      <FormDiv method="POST">
        <InputDiv placeholder="Shorten a link here..." />
        <LinkSubmitBtn>
          <h3>Shorten it!</h3>
        </LinkSubmitBtn>
      </FormDiv>
    </LinkDiv>
  );
}

const LinkDiv = styled.div`
  margin: 2.5rem 0;
  width: 100%;
  background-color: hsl(260, 8%, 14%);
  border: none;
  border-radius: 10px;

  @media (max-width: 728px) {
    position: absolute;
    top: 48rem;
    width: 80%;
    margin: auto;
  }
`;

const FormDiv = styled.form`
  display: flex;
  width: 90%;
  margin: auto;

  @media (max-width: 728px) {
    flex-direction: column;
  }
`;

const InputDiv = styled.input`
  margin: 2.5rem 1rem;
  padding: 1rem 2rem;
  width: 75%;
  font-size: 15px;
  border: none;
  border-radius: 10px;

  @media (max-width: 728px) {
    width: 70%;
    margin: 1rem auto 0.5rem auto;
  }
`;

const LinkSubmitBtn = styled.button`
  background-color: hsl(180, 66%, 49%);
  margin: 2.5rem 0;
  width: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 10px;
  cursor: pointer;

  > h3 {
    color: white;
    font-size: 15px;
  }

  @media (max-width: 728px) {
    width: 90%;
    margin: 0.5rem auto 1rem auto;
  }
`;

export default LinkInput;
