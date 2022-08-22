import styled from "styled-components";


export const Container = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;

`;

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding: 3em;
    width: 40%;
    height: 65%;
    gap: 2em;
    span{
        display: flex;
        flex-direction: column;
        gap:2%;
        width: 70%;
        height: 90%;
        
    };

    header{
        display: flex;
        justify-content: center;
          align-items: center;
        width: 100%;
        height: 15%;
       h1{
        font-size: 20px;
        border-bottom: 2px solid #2b2a4a;
        color: #2b2a4a;
       
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
    };
 
    div{
        display: flex;
        flex-direction: column;
        justify-content:center;
        align-items: left;
        width: 100%;
        height: 30%;
        

        button{
            background-color: #2b2a4a;
            padding: 0.9em 2em ;
            font-size: 17px;
            border-radius: 5px;
            color: white;
            cursor: pointer;
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
    :focus{
        outline: 0;   
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
        background: white;
    };

    footer{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 2.5em;
        button{
            background-color: #2b2a4a;
            padding: 1em 3em ;
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