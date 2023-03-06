import { createGlobalStyle } from "styled-components";

export interface DefaultTheme {
  body: string;
  text: string;
}

export const GlobalStyles = createGlobalStyle<{ theme: DefaultTheme }>`
body {
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  transition: 0.2s ease-in, color 0.2s ease-in;
}
`;

export const lightTheme = {
  body: "#FFF",
  text: "#363537",
  toggleBorder: "#FFF",
  background: "#363537",
};
export const darkTheme = {
  body: "#363537",
  text: "#FAFAFA",
  toggleBorder: "#6B8096",
  background: "#999",
};
