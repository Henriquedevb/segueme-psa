import { useState } from "react";
import { ThemeProvider } from "styled-components";
import Login from "./pages/login";
import { darkTheme, lightTheme, GlobalStyles } from "./styles/themes";

function App() {
  const [theme, setTheme] = useState("light");
  const isDarkTheme = theme === "dark";
  const toggleTheme = () => setTheme(isDarkTheme ? "light" : "dark");

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyles />

      <Login />
    </ThemeProvider>
  );
}

export default App;
