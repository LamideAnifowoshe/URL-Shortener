import styled from "styled-components";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

function App() {
  return (
    <AppDiv>
      <Navbar />
      <Header />
    </AppDiv>
  );
}

const AppDiv = styled.div`
  font-family: "Poppins", sans-serif;
  width: 90vw;
  margin: auto;
`;

export default App;
