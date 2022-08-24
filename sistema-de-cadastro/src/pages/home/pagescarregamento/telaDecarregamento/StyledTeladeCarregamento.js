import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

  
    background-color:  #2b2a4a;

    
	-webkit-animation: fade-out 2s ease-out 1s both;
	        animation: fade-out 2s ease-out 1s both;


@-webkit-keyframes fade-out {
  0% {
    opacity: 5;
  }
  100% {
    opacity: 0;
  }
}
@keyframes fade-out {
  0% {
    opacity: 5;
  }
  100% {
    opacity: 0;
  }
}

`

export const LogoPretoImg = styled.img`

    width: 20%;
    height: 25%;

    @media screen and (min-device-width : 100px) and (max-device-width : 480px) {
    /* celulares */
      width: 30vw;
      height: 20vh;
    };
    @media screen and (min-device-width : 481px) and (max-device-width : 999px) {
        /* tablets */
       
        width: 18vw;
        height: 23vh;
    };

`
