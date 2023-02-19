import styled from "styled-components";

function LinkInput() {
  return (
    <LinkDiv>
      <FormDiv type="POST">
        <InputDiv placeholder="shorten a link here..." />
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
`;

const FormDiv = styled.form`
  display: flex;
  width: 90%;
  margin: auto;
`;

const InputDiv = styled.input`
  margin: 2rem 1rem;
  padding: 1rem;
  width: 75%;
  font-size: 15px;
  border: none;
  border-radius: 10px;
`;

const LinkSubmitBtn = styled.button`
  background-color: hsl(180, 66%, 49%);
  margin: 2rem 0;
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
`;

export default LinkInput;
