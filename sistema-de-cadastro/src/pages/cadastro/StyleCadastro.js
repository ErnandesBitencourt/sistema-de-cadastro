import styled from "styled-components";


export const Container = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: #ededf2;
    @media screen and (min-device-width : 300px) and (max-device-width : 480px) {
/* celulares */
        width: 100%;
        height: 100%;
        
        }
    @media screen and (min-device-width : 481px) and (max-device-width : 800px) {
    /* tablets */
    }

`;

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding: 3em;
    width: 40%;
    height: auto;
    gap: 2em;
    @media screen and (min-device-width : 300px) and (max-device-width : 480px) {
/* celulares */
    
        width: 100%;
        gap:0;
        
        }
    @media screen and (min-device-width : 481px) and (max-device-width : 800px) {
    /* tablets */
    }


    span{
        display: flex;
        flex-direction: column;
        gap:2%;
        width: 70%;
        height: 90%;

        @media screen and (min-device-width : 300px) and (max-device-width : 480px) {
        /* celulares */
        width: 100%;
        height: 70%;
        gap :1px;
        
        }
        @media screen and (min-device-width : 481px) and (max-device-width : 800px) {
         /* tablets */

         }
    };


    header{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 15%;
        @media screen and (min-device-width : 300px) and (max-device-width : 480px) {
        /* celulares */
        width: 100%;
        height: 9%;
        
       
        }
        @media screen and (min-device-width : 481px) and (max-device-width : 800px) {
         /* tablets */
         }

       h1{
        font-size: 20px;
        border-bottom: 2px solid #2b2a4a;
        color: #2b2a4a;
        @media screen and (min-device-width : 300px) and (max-device-width : 480px) {
        /* celulares */
             font-size: 15px;
        }
        @media screen and (min-device-width : 481px) and (max-device-width : 800px) {
         /* tablets */
         font-size: 17px;
         }
       
       }
    }

    form { 
        
        display: flex;
        flex-direction: column;
        justify-content:center;
        align-items: center;
        width: 100%;
        height: 90%;
        gap: 10px;
        @media screen and (min-device-width : 300px) and (max-device-width : 480px) {
        /* celulares */
             font-size: 15px;
             width: 100%;
             height: 5%;
            
        }
        @media screen and (min-device-width : 481px) and (max-device-width : 800px) {
         /* tablets */
         }
       
       

    };
 
    div{
        display: flex;
        flex-direction: column;
        justify-content:center;
        align-items: left;
        width: 100%;
        height: 30%;
        @media screen and (min-device-width : 300px) and (max-device-width : 480px) {
        /* celulares */
             font-size: 15px;
             width: 100%;
             height: 5%;
             
        };
        

        button{
            background-color: #2b2a4a;
            padding: 0.9em 2em ;
            font-size: 17px;
            border-radius: 5px;
            color: white;
            cursor: pointer;
            @media screen and (min-device-width : 300px) and (max-device-width : 480px) {
        /* celulares */
             font-size: 15px;
             padding: 0.7em 1.5em ;
        }

            :hover{
                background-color: white;
                color:#2b2a4a;
                font-weight: 700;
            }
        }

    };
    input{
        
    width: 92%;
    padding: 1em;
     caret-color:blue ;
     background-color:  #ededf2;
    :focus{
        outline: 0;   
        background-color:  #ededf2;
    };
    };

    label{
        position:  relative;
        left:15px;
        /* bottom: 30px; */
        top: 9px;
        width: 4em;
        display: flex;
        justify-content: center;
        align-items: center;
        background:  #ededf2;
    };

    footer{
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        width: 100%;
        height: 2.5em;
       
        margin-top:2em ;
        @media screen and (min-device-width : 300px) and (max-device-width : 480px) {
        /* celulares */
            margin-top:2em ;
             font-size: 15px;
             width: 100%;
             height: 5%;
            
        };


        button{
            background-color: #2b2a4a;
            padding: 2% 7% ;
            font-size: 15px;
            border-radius: 5px;
            color: white;
            cursor: pointer;
            :hover{
                background-color: white;
                color:#2b2a4a;
                font-weight: 700;
            }
        }
    }


`