import styled from "styled-components";


export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 17em;
  max-width: 17em;
  height: 50vh;
  padding: 20px;
  gap: 10px;


  text-align: center;
  font-weight: 700;

  border-radius: 15px;

  a{
    text-decoration: none;
  }
  
  a:hover{
    text-decoration: none;
  }

  animation: entradaSuave 1s alternate forwards;

`;

export const LoginContainer = styled.main`

/* position: fixed; */
width: auto;
display: grid;
grid-template-columns: auto;
justify-items: center;
align-items: flex-end;
height: 100vh;
background-color: #dcfc34;

@media only screen and (max-width: 768px)  {
  
}
`;



export const FormContainer = styled.form`


display: grid;
grid-template-columns: auto;
justify-items: center;
background-color: #dcfc34;
`;
export const RegisterContainer = styled.div`
height: 70px;

gap: 10px;
display: flex;
flex-direction: column;
`;

export const ContainerMain = styled.main`
  height: 100vh;
  width: 100vw;

  
  /* z-index: 1; */
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  background-color: #323240;
  
  position: fixed;
  top: 0;
  z-index: 0;
  align-items: center;

`;

export const Input = styled.input`
  border: none;
  padding: 4px;

  background-color: transparent;
  border-bottom: 1px solid var(--dark);


  :focus{
    
    animation-name: toRight;
    animation-duration: 1s;
    animation-iteration-count: 1;
    animation-timing-function: ease;
    animation-direction: alternate;
    animation-fill-mode: both;
  }

  @keyframes toRight {
  0%   {
    transform: translateX(0vw);
  }
  
  100% {
    transform: translateX(1vw);
  }
}

`;
