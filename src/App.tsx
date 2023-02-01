import styled from "@emotion/styled"
import { css, Global } from "@emotion/react";
import { Counter } from "./mini_projects/real_time_counter/Counter";

const MainContainer = styled.div`
  background-color: #20262E;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

function App() {
  return (
    <>
      <Global
        styles={css`
      a,
      button {
        all: unset;
        cursor: pointer;
      }
        *, *::before, *::after{
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        body,
        html {
          color: #fff;
          font-size: 20px;
        }
      `}
      />
      <MainContainer>
        <Counter />
      </MainContainer>
    </>


  )
}

export default App
