import styled, { createGlobalStyle } from "styled-components";
import devices from "./Helper/devices";

const GlobalStyle = createGlobalStyle`
  
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #0b2434; 
  }

  html{
   
  @media only screen and (${devices.mobileS}) {
    font-size: 7px;
  }
  @media only screen and (${devices.mobileM}) {
    font-size: 8px;
  }
  @media only screen and (${devices.mobileL}) {
    font-size: 10px;
  }
  @media only screen and (${devices.tablet}) {
    font-size: 15px;
  }
  @media only screen and (${devices.laptop}) {
    font-size: 15px;
  }
  @media only screen and (${devices.laptopL}) {
    font-size: 17px;
  }
  @media only screen and (${devices.desktop}) {
    font-size: 25px;
  }
  @media only screen and (${devices.bigScreen}) {
    font-size: 40px;
  }
 
  }

`;

/*----------- Main Container -----------*/
export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
/*----------- White Frame -----------*/

export const Frame = styled.main`
  width: 85vmin;
  height: 85vmin;
  background-color: #f5f5f5;
  border-radius: 5px;
  padding: 25px;
`;
/*----------- Inner Container -----------*/
export const InnerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 0px 15px 4px rgb(218, 204, 255);
`;

/*----------- Counter + Timer -----------*/
export const ConterTimerContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 5px;
  font-size: 1.25rem;
`;

/*----------- Title -----------*/

export const Title = styled.h1`
  font-size: 2rem;
`;

/*-----------Instruction -----------*/

export const Instruction = styled.p`
  text-align: center;
  font-size: 1rem;
`;
/*----------- Dice Container -----------*/
export const DiceContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template: repeat(2, 1fr) / repeat(5, 1fr);
  gap: 4%;
  justify-items: center;
  padding: 5%;
`;
/*----------- Congrats -----------*/

export const Congrats = styled.p`
  font-weight: bold;
  display: flex;
  align-items: flex-end;
  font-size: 1.25rem;
`;
/*----------- Button Container -----------*/

export const ButtonContainer = styled.div`
  display: flex;
  gap: 10%;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
`;
/*----------- Button -----------*/

export const Button = styled.button`
  width: 30%;
  height: 70%;
  border: none;
  border-radius: 4px;
  background-color: #5035ff;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  padding: 0 10px;
`;
/*----------- Stopwatch Container -----------*/

// In its container

/*----------- BestRecord -----------*/

export const BestRecordDiv = styled.div`
  display: flex;
  align-items: center;
  font-size: 1rem;
`;

export default GlobalStyle;
