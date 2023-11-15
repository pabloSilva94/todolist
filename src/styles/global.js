import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
  list-style: none;
  scroll-behavior: smooth;
}
input::placeholder, textarea::placeholder {
  color: #6C68BB;
}
button{ background: transparent;}
body {
  /* color: #343f52; */
  color: #6C68BB;
  background: #F5F5F5;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1,h2,h3,h4,h5,h6,p,a,button,span, textarea{
  font-family: "Roboto", sans-serif;
  
} 
`;
