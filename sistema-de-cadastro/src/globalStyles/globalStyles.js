import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body{
    margin: 0;
    padding: 0;
    background-color: #2b2a4a;

    ::-webkit-scrollbar{
     width: 10px;
     background-color:#ededf2;
    
}
    ::-webkit-scrollbar-track{
     background: transparent;
  
}
    ::-webkit-scrollbar-thumb{
    background:  #2b2a4a;
}

   
}
`
export default GlobalStyle;