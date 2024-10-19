import React from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "styled-theming";
import { Provider as ReduxProvider } from "react-redux";
import DarkThemeProvider from "./DarkThemeProvider";
import DarkThemeToggle from "./DarkThemeToggle";
import store from "./redux/store";
import './App.css';

export const theme1 = theme("theme", {
  light: "#ffffff",
  dark: "#2d2d2d",
});


export const theme2 = theme("theme", {
  light: "#000000",
  dark: "#ffffff",
});

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  font-family: sans-serif;
  background-color: ${theme1};
  `;

const SwitchTheme = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding:0 50px;
  height: 75px;
  `;

const App = () => {
  return (
    <React.Fragment>
      <ReduxProvider store={store}>
        <DarkThemeProvider>
            <SwitchTheme>
              <h1>Theme App</h1>
              <p>
                <DarkThemeToggle />
              </p>
            </SwitchTheme>
            <Container>
              <h2>Welcome!</h2>
              <h3>Full Stack Web Development</h3>
            </Container>
          </DarkThemeProvider>
        </ReduxProvider>
    </React.Fragment>
  )
};

export default App;