import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
body {
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  transition: all 0.25s linear;
}
.navbar-background {
  background: ${({ theme }) => theme.navBackground};
  color: ${({ theme }) => theme.text};
  transition: all 0.25s linear;
}
.navbar-brand, .nav-link {
  color: ${({ theme }) => theme.text};
  transition: all 0.25s linear;
}
.navbar-brand:hover, .nav-link:hover {
  color: ${({ theme }) => theme.textHover};
}
.login-container {
  background: ${({ theme }) => theme.navBackground};
  transition: all 0.25s linear;
}
.form-control, .form-select {
  background-color: ${({ theme }) => theme.inputBackground};
  color: ${({ theme }) => theme.text};
  border-color: ${({ theme }) => theme.toggleBorder};
  transition: all 0.25s linear;
}
`