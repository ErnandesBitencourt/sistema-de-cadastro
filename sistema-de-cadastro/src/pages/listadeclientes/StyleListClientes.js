import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
   align-items: center;
    
    @media screen and (min-device-width : 300px) and (max-device-width : 480px) {
        /* celulares */

        width: 100%;
        height: auto; 
            
     }
    @media screen and (min-device-width : 481px) and (max-device-width : 800px) {
         /* tablets */
         width: 100%;
        height: auto;

     }

`;

export const Main = styled.main`
    
    width: 80%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 5em;
    
    header{ 
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1em 0 ;
        width: 100%;
        height: 4em;

        @media screen and (min-device-width : 300px) and (max-device-width : 480px) {
        /* celulares */

             width: 100%;
             height: 3em;
             border : solid;
            
        }
        @media screen and (min-device-width : 481px) and (max-device-width : 800px) {
         /* tablets */
            width: 100%;
             height: 3em;
             border : solid;

         }

        nav{
           
            display: flex;
            justify-content: center;
            align-items: center;
            width: 15%;
            height: 100%;

        @media screen and (min-device-width : 300px) and (max-device-width : 480px) {
        /* celulares */

           
            
        }
        @media screen and (min-device-width : 481px) and (max-device-width : 800px) {
         /* tablets */
            

        }


            
            button{
                padding: 7% 10% ;
                margin-left: 4%;
                cursor: pointer;
                background-color: #2b2a4a;
                color: white;
                font-size: 17px;
                border-radius: 5px;
                @media screen and (min-device-width : 300px) and (max-device-width : 480px) {
        /* celulares */

        font-size: 12px;
        padding: 20% 35% 
        }
        @media screen and (min-device-width : 481px) and (max-device-width : 800px) {
         /* tablets */
         font-size: 14px;
         padding: 15% 20% 

        }

                :hover{
                    background-color: white;
                    color:#2b2a4a;
                    font-weight: 700;
                }
            }
        }
        span{
            width: 60%;
            height: 100%;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
        }
        h1{

            color: #2b2a4a;
            font-size: 1.5em;
            border-bottom: solid 3px #2b2a4a;

         @media screen and (min-device-width : 300px) and (max-device-width : 480px) {
        /* celulares */

            font-size: 0.6em;
            
        }
        @media screen and (min-device-width : 481px) and (max-device-width : 800px) {
         /* tablets */
         font-size: 1em;

         }

        }


    }

    div{
        width: 100%;
        height:auto;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap:2em;
    }
    
   
`;

export const Aside = styled.aside`
    border:solid 3px #2b2a4a;
    border-radius: 10px;
    padding: 10px;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 25%;
    @media screen and (min-device-width : 300px) and (max-device-width : 480px) {
        /* celulares */
         width: 90%;
         height: auto;
            
            
     };
    @media screen and (min-device-width : 481px) and (max-device-width : 800px) {
         /* tablets */
         width: 70%;
         height: auto;

     };



    span{
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        border-bottom: solid 2px #2b2a4a;
        border-radius: 5px;
        
        width: 100%;
        height: auto;
        div{
            background-color: #2b2a4a;
            border: none;
            color: white;
            font-weight: 700;
            border-radius: 5px;
            h3{
                @media screen and (min-device-width : 300px) and (max-device-width : 480px) {
            /* celulares */
                    font-size: 15px;
            
            
            };
            @media screen and (min-device-width : 481px) and (max-device-width : 800px) {
                    /* tablets */
                    font-size: 17px;

             };
            };
        };
      
        p{
            display: flex;
            justify-content: left;
            height: auto;
            width: 95%;
            color: #2b2a4a;
            font-weight: 700;

            @media screen and (min-device-width : 300px) and (max-device-width : 480px) {
            /* celulares */
                    font-size: 12px;
            
            
            };
            @media screen and (min-device-width : 481px) and (max-device-width : 800px) {
                    /* tablets */
                    font-size: 15px;

             };

        };

      
    };

    footer{
            
            width: 100%;
            height: auto;
            padding: 1em 0.5em ;
            display: flex;
            align-items: center;
            justify-content:space-around ;
            
            button{
                padding: 4% 8%;
                border-radius: 5px;
                cursor: pointer;
                background-color: #2b2a4a;
                color: white;
                font-size: 17px;
                @media screen and (min-device-width : 300px) and (max-device-width : 480px) {
            /* celulares */
                    font-size: 12px;
            
            
            }
            @media screen and (min-device-width : 481px) and (max-device-width : 800px) {
                    /* tablets */
                    font-size: 15px;

             }

                
                :hover{
                    background-color: white;
                    color:#2b2a4a;
                    font-weight: 700;
                    
                }
            };

            
        };

`;