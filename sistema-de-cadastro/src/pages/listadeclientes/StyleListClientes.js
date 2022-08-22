import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
   align-items: center;
    

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
        nav{
           
            display: flex;
            justify-content: center;
            align-items: center;
            width: 15%;
            height: 100%;
            
            button{
                padding: 1em 2em ;
                margin-left: 5%;
                cursor: pointer;
                background-color: #2b2a4a;
                color: white;
                font-size: 17px;
                border-radius: 5px;
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
            justify-content: center;
            align-items: center;
        }
        h1{
            color: #2b2a4a;
            font-size: 1.5em;
            border-bottom: solid 3px #2b2a4a;
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
    width: 22%;
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
        };
      
        p{
            display: flex;
            justify-content: left;
            height: auto;
            width: 95%;
            color: #2b2a4a;
            font-weight: 700;
        };

      
    }

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

                
                :hover{
                    background-color: white;
                    color:#2b2a4a;
                    font-weight: 700;
                    
                }
            }

            
        }

`;