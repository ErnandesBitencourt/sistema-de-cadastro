import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #2b2a4a;
    @media screen and (min-device-width : 300px) and (max-device-width : 480px) {
        /* celulares */
        width: 100%;
       
       
        }
    @media screen and (min-device-width : 481px) and (max-device-width : 800px) {
    /* tablets */
    }
`;

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 3%;
    gap:2%;
    border-radius: 10px;
    box-shadow:
    0.6px 0px 6.3px rgba(0, 0, 0, 0.042),
    1.4px 0px 15.1px rgba(0, 0, 0, 0.054),
    2.7px 0px 28.4px rgba(0, 0, 0, 0.06),
    4.7px 0px 50.7px rgba(0, 0, 0, 0.064),
    8px 0px 94.8px rgba(0, 0, 0, 0.068),
    20px 0px 227px rgba(0, 0, 0, 0.07)
    ;
    @media screen and (min-device-width : 300px) and (max-device-width : 480px) {
        /* celulares */
        width: 100%;
        height: 90vh;
        box-shadow:none;
        
        }
    @media screen and (min-device-width : 481px) and (max-device-width : 800px) {
    /* tablets */
    }





    div{
        display: flex;
         flex-direction: column;
         align-items: center;
        width: 100%;
        height: auto;
        padding: 2%;

        img{
            width: 85%;
            height: 100%;

            @media screen and (min-device-width : 300px) and (max-device-width : 480px) {
            /* celulares */
                width: 90%;
                height: 100%;
            
            }
             @media screen and (min-device-width : 481px) and (max-device-width : 800px) {
                 /* tablets */
             }

            }

     };


    `;

export const Div = styled.span`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 94%;
    padding: 5%;
   

    span{
        box-shadow:
        0px 3.3px 2.2px rgba(0, 0, 0, 0.042),
        0.1px 7.9px 5.3px rgba(0, 0, 0, 0.054),
        0.1px 14.9px 10px rgba(0, 0, 0, 0.06),
        0.2px 26.6px 17.9px rgba(0, 0, 0, 0.064),
        0.4px 49.7px 33.4px rgba(0, 0, 0, 0.068),
        1px 119px 80px rgba(0, 0, 0, 0.07)
        ;
        width: 40%;
        height: 50%;
        padding: 2.5% 2%;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 10px;

        button{
            width: 100%; 
            height: auto;
            padding: 8% 2%;
            border-radius: 10px;
            border: none;
            background: none;
            color: white;
            font-weight: 700;
            font-size: 17px;
            cursor: pointer;

             @media screen and (min-device-width : 300px) and (max-device-width : 480px) {
            /* celulares */
            font-size: 15px;
        
            }
            @media screen and (min-device-width : 481px) and (max-device-width : 800px) {
            /* tablets */
            }



            :hover{
                zoom: 1.1;
            }
        }
    }

`