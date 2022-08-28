import styled from "styled-components";

export const Container = styled.section`

    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content:center ;
    align-items: center;
    row-gap: 3em;
    background-color: #ededf2;
    
    @media screen and (min-device-width : 300px) and (max-device-width : 480px) {
        /* celulares */

        width: 100%;
        height: auto; 
            
     };
    @media screen and (min-device-width : 481px) and (max-device-width : 800px) {
         /* tablets */
         width: 100%;
        height: auto;

     };
`;

export const Header = styled.header`
 
        display: flex;
        flex-direction: column;
        position:fixed;
        top: 0;
        z-index: 10;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 8em;
        background-color: #2b2a4a;
       
        @media screen and (min-device-width : 300px) and (max-device-width : 480px) {
        /* celulares */
        justify-content: left; 
     };     
`;
export const Nav =styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    width: 100%;
    max-width: 88%;
    h1{ 
        font-size: 17px;
        color: white;
        font-weight: 700;
        @media screen and (min-device-width : 300px) and (max-device-width : 480px) {
        /* celulares */
            font-size: 13px;      
        }
        @media screen and (min-device-width : 481px) and (max-device-width : 800px) {
            /* tablets */
            font-size: 15px;
        }
    };
`;

export const Hamburge = styled.div`
     width: 25px;
     height: 40px;
     background-color: black;
     display: none;
     padding: 5px;

     @media screen and (min-device-width : 481px) and (max-device-width : 999px) {
            position:fixed;
            top: 4%;
            right: 4rem;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            width: 2rem;
            height: 2rem;
            background: transparent;
            border: none;
            cursor: pointer;
            padding: 0;
            z-index: 10;

            span{
            
                width: 2rem;
                height: 0.2rem;
                background: ${({ hanburge }) =>
                hanburge ? '#e5e5e5' : '#e5e5e5'};
                border-radius: 10px;
                transition: all 0.3s linear;
                position: relative;
                transform-origin: 1px;

                :first-child {
                transform: ${({ hanburge }) => ( hanburge ? "rotate(45deg)" : "rotate(0)")};
                }

                :nth-child(2) {
                opacity: ${({  hanburge }) => ( hanburge ? "0" : "1")};
                transform: ${({  hanburge }) => ( hanburge ? "translateX(20px)" : "translateX(0)")};
                }

                :nth-child(3) {
                transform: ${({ hanburge}) => ( hanburge ? "rotate(-45deg)" : "rotate(0)")};
                }

            }
        
            }


            @media screen and (min-device-width : 100px) and (max-device-width : 480px) {
                /* celulares */

                position:fixed;
                top: 4%;
                right: 2rem;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                width: 2rem;
                height: 2rem;
                background: transparent;
                border: none;
                cursor: pointer;
                padding: 0;
                z-index: 10;

            span{
                
                width: 2rem;
                height: 0.2rem;
                background: ${({hanburge}) =>
                hanburge ? '#e5e5e5' : '#e5e5e5'};
                border-radius: 10px;
                transition: all 0.3s linear;
                position: relative;
                transform-origin: 1px;

                :first-child {
                transform: ${({hanburge }) => ( hanburge? "rotate(45deg)" : "rotate(0)")};
                }

                :nth-child(2) {
                opacity: ${({ hanburge }) => ( hanburge ? "0" : "1")};
                transform: ${({ hanburge }) => ( hanburge ? "translateX(20px)" : "translateX(0)")};
                }

                :nth-child(3) {
                transform: ${({ hanburge}) => (hanburge ? "rotate(-45deg)" : "rotate(0)")};
                }

                }
        
            }
`;

export const ButtonNav = styled.nav` 
    width: 10em;
    height: 3em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    @media screen and (min-device-width : 481px) and (max-device-width : 999px) { 

    display: ${({hanburge})=> hanburge ? 'flex' :'none'};
    flex-direction: column;
    justify-content: space-around;
    background:  #2b2a4a;
    transform: ${({hanburge }) => (hanburge ? "translateX(0)" : "translateX(-100%)")};
    height: 60vh;
    width: 30%;
    text-align: center;
    padding: 1.5rem;
    position: absolute;
    top: 0;
    right: 0;
    transition: transform 0.3s ease-in-out;
    border-radius: 10px;

}

@media screen and (min-device-width : 100px) and (max-device-width : 480px) {
        /* celulares */

    display: ${({hanburge})=> hanburge ? 'flex' :'none'};
    gap: 30px;
    flex-direction: column;
    justify-content:  center;
    align-items:center;
    background: #2b2a4a;
    height: 100vh;
    width: 100%;
    text-align: center;
    position: absolute;
    top: 0;
    right: 0;
    

    
};

    button{
        width: 100%;
        height: 100%;
        border-radius:10px;
        cursor: pointer;
        background: none;
        border: none;
        font-size: 17px;
        font-weight: 700;
        border-bottom: solid 3px black;
        color: white;
        :hover{
            border-bottom: solid 3px white;
        }

     @media screen and (min-device-width : 300px) and (max-device-width : 480px) {
        /* celulares */
            width: 100%;
            height : 20% ;
            border: none;
          }
    @media screen and (min-device-width : 481px) and (max-device-width : 800px) {
         /* tablets */
          width: 100%;
            height :20% ;
            border: none;
     }

    }


`;

export const Button2 = styled.button`
    display: none;
    @media screen and (min-device-width : 481px) and (max-device-width : 999px) {
        display: block;
        width: 100%;
        height : 20% ;
    }
    @media screen and (min-device-width : 100px) and (max-device-width : 480px) {
        display: block;
        width: 100%;
        height : 20% ;
    }
`

export const Main = styled.main`
    
    width: 80%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 5em;
    padding-top:170px;
    
    @media screen and (min-device-width : 300px) and (max-device-width : 480px) {
        /* celulares */
        padding-top:140px;       
     };
   
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
    width: 100%;
    height: 100%;
    max-height:400px ;
    max-width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
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
        height: 55px;
     
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
            font-size: 14px;

            @media screen and (min-device-width : 300px) and (max-device-width : 480px) {
            /* celulares */
                    font-size: 13px;
            
            
            };
            @media screen and (min-device-width : 481px) and (max-device-width : 800px) {
                    /* tablets */
                    font-size: 14px;

             };

        };

      
    };

    footer{
            margin-top: 15px;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content:space-around ;
            
            button{
                width: 100px;
                height: 30px;
                
                border: solid 1px;
                border-radius: 5px;
                cursor: pointer;
                background-color: #2b2a4a;
                color: white;
                font-size: 17px;
                @media screen and (min-device-width : 300px) and (max-device-width : 480px) {
            /* celulares */
                    font-size: 12px;
            
            
            };
            @media screen and (min-device-width : 481px) and (max-device-width : 800px) {
                    /* tablets */
                    font-size: 15px;

             };

                
                :hover{
                    background-color: white;
                    color:#2b2a4a;
                    font-weight: 700;
                    
                }
            };

            
        };

`;

export const ContainerBuscarOrder = styled.div`

        width: 100%;
        max-width: 88%;
        height: 5em;
        display: flex;
        align-items: center;
        justify-content: space-around;
       
        div{
            width: 200px;
            height: 90%;
            display: flex;
             align-items: center;
             justify-content: center;

             @media screen and (min-device-width : 300px) and (max-device-width : 480px) {
            width: 150px;
            height: 70%; 
            font-size: 13px;
                    
            }
            @media screen and (min-device-width : 481px) and (max-device-width : 800px) {
                width: 150px;
                 height: 70%; 
                font-size: 14px;
            }

        };
        input{
            width: 100%;
            height: 60%;
            border:none;
            font-size: 15px;
            border-radius: 10px;
            :focus{
                border: none;
                outline: 0;
            }

            @media screen and (min-device-width : 300px) and (max-device-width : 480px) {
        /* celulares */

            width: 90%;
            height: 70%; 
            font-size: 13px;
                    
            }
            @media screen and (min-device-width : 481px) and (max-device-width : 800px) {
                /* tablets */
            
                width: 85%;
                height: 65%; 
                font-size: 14px;
            }
        };

        button{
            width: 90%;
            height: 95%;
            border-radius: 10px;
            font-size: 15px;
            cursor: pointer;
            background-color: #2b2a4a;
            color: white;
            font-weight: 700;
            border :none;
            border-bottom: solid 2px black;
            :hover{
                border-bottom: solid 2px white ;
                font-weight: 700;
            }

            @media screen and (min-device-width : 300px) and (max-device-width : 480px) {
        /* celulares */

            width: 90%;
            height: 70%; 
            font-size: 12px;
                    
            }
            @media screen and (min-device-width : 481px) and (max-device-width : 800px) {
                /* tablets */
            }
        };
`; 

export const Footer = styled.footer`
    padding-top: 1em;;
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2em;
    background-color: #2b2a4a;;
    @media screen and (min-device-width : 300px) and (max-device-width : 480px) {
        /* celulares */
        
        margin-top: 1em; 
            
     };
     span{
        width: 80%;
        height: 10vh;
        padding: 0.2em;
        display: flex;
        align-items: center;
        justify-content: space-around;
        gap:3em;
     }   
    p{
        font-size: 17px;
        color: white;
        @media screen and (min-device-width : 300px) and (max-device-width : 480px) {
            /* celulares */
                    font-size: 12px;
            
            
            };
            @media screen and (min-device-width : 481px) and (max-device-width : 800px) {
                    /* tablets */
                    font-size: 15px;

             };
    }
    img{
        width: 12%;
        height:100%;
    }

`;