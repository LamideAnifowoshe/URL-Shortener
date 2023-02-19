import styled from "styled-components";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import LinkInput from "./components/LinkInput";

function App() {
  return (
    <AppDiv>
      <Navbar />
      <Header />
      <LinkInput />
    </AppDiv>
  );
}

const AppDiv = styled.div`
  font-family: "Poppins", sans-serif;
  width: 90vw;
  margin: auto;
`;

export default App;
