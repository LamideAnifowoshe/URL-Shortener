import styled from "styled-components";
import Navbar from "./components/Navbar";

function App() {
  return (
    <AppDiv>
      <Navbar />
    </AppDiv>
  );
}

const AppDiv = styled.div`
  font-family: "Poppins", sans-serif;
  width: 90%;
  margin: auto;
`;

export default App;
