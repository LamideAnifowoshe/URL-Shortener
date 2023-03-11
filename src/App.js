import styled from "styled-components";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import LinkInput from "./components/LinkInput";
import Advanced from "./components/Advanced";

function App() {
  return (
    <AppDiv>
      <Navbar />
      <Header />
      <LinkInput />
      <Advanced />
    </AppDiv>
  );
}

const AppDiv = styled.div`
  font-family: "Poppins", sans-serif;
  width: 90vw;
  margin: auto;

  @media (max-width: 728px) {
    width: 80vw;
    margin: auto;
  }
`;

export default App;
