import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`

@font-face {
    font-family: 'Pretendard';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
}

@font-face {
    font-family: 'PyeongChangPeace-Bold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2206-02@1.0/PyeongChangPeace-Bold.woff2')
      format('woff2');
    font-weight: 700;
    font-style: normal;
  }

${reset}

*{
    box-sizing: border-box;
}

a {
    color: inherit;
    text-decoration: none;
}

input, button, label {
    background-color: transparent;
    border: none;
    outline: none;
    font-family: var(--font);
    font-size: 14px;
    padding: 0;
    margin: 0;
    cursor: pointer;
}

textarea {
  font-family: var(--font);
  padding: 0;
  margin: 0;
  border: none;
  outline: none;
  resize: none;
  background-color: transparent;
}

::placeholder {
  font-family: var(--font);
  color: var(--deep-gray)
}

ol, ul, li {
    list-style: none;
}

img{
    display: block;
}

:root {
    --font: 'Pretendard';
    --black: #1C1C1C;
    --red: #FF1818;
    --green: #50c927;
    --light-gray: #E8E8E8;
    --gray: #CDCDCD;
    --deep-gray: #B4B4B4;
    --super-gray: #767676;
    --yellow: #f2f0b3;
    --deep-yellow: #f4bc58;
    --super-yellow: #d69f40;
    --skyblue: #87c0cc;
    --blue: #183ca7;
    --deep-blue:#0f2f67;
}

html {
    background-color: var(--black);
    margin: 0 auto;
    height: 100vh;
}

body {
    margin: 0;
    overflow-y: hidden;
}

.ir {
    position: absolute;
    clip-path: inset(50%);
    width: 1px;
    height: 1px;
    overflow: hidden;
}
`

export default GlobalStyle
