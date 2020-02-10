import React from 'react';
import styled, { keyframes } from 'styled-components'

const Loader = () => (
    <Box>
        <Loading>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </Loading>
    </Box>
);

export default Loader;

const circle1 = keyframes`
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
`;

const circle2 = keyframes`
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
`;

const circle3 = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
`;

const Box = styled.div`
height: 100%;
width: 100%;
display: flex;
justify-content: center;
align-items: center;

`;

const Loading = styled.div`
  display: inline-block;
  position: relative;
  width: 100px;
  height: 100px;

  & div{
    position: absolute;
    top: 33px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #fff;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
    background-color: #AC3B61;

    &:nth-child(1){
        left: 8px;
        animation: ${circle1} 0.6s infinite;
    }
    &:nth-child(2){
        left: 8px;
        animation: ${circle2} 0.6s infinite;
    }
    &:nth-child(3){
        left: 32px;
        animation: ${circle2} 0.6s infinite;
    }
    &:nth-child(4){
        left: 32px;
        animation: ${circle3} 0.6s infinite;
    }
  }

  
`;

