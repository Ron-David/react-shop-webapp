import React from 'react';
import styled from "styled-components";

import colors from '../config/colors';

const logoColors = [
  colors.white,
  colors.soft,
  colors.green,
  colors.red,
  colors.orange,
  colors.primary,
]

function LogoB({ colorsList = logoColors }) {
  return (
    <Container>
      <LogoItem colors={colorsList} />
      <Circle colors={colorsList} />
    </Container>
  );
}
const Container = styled.div`
align-items: center;
display: flex;
height: 10rem;
position: relative;
width: 10rem;
`
const Circle = styled.div`
 
 animation-delay:  1s;
 animation-duration: 3s;
 animation-iteration-count: 1;
 animation-name: flip;
 background-color: ${({ colors }) => colors[0]};
 border-radius: 1em 5rem 5rem 5rem;
 height: ${({ size }) => size ? size : 9}rem;
 margin: 0.5rem;
 position: absolute;
 width: ${({ size }) => size ? size : 9}rem;

@keyframes flip {
    0%{
    border-radius: 5rem;
    transform: rotate(60deg);

  }
  20%{
    border-radius: 2rem 5rem 5rem 5rem;
  }
  40%{
    border-radius: 2rem 2rem 5rem 5rem;
  }
  60%{
    border-radius: 2rem 2rem 2rem 5rem;
  }
  80%{
    border-radius: 2rem 2rem 2rem 2rem;
  }
  100%{
    border-radius: 1em 5rem 5rem 5rem;

  }
} 
 

`;

const LogoItem = styled.div`
 height: ${({ size }) => size ? size : 10}rem;
 width: ${({ size }) => size ? size : 10}rem;
 border-radius: 1rem 5rem 5rem 5rem;
 background: ${({ colors }) => colors[1]};
 /* background: linear-gradient(40deg, ${({ colors }) => colors[2]},${({ colors }) => colors[1]}); */
 transform-origin: 50%;
 position: absolute;
 animation-name: flipa;
 animation-duration: 3s;
 animation-iteration-count: 1;
 animation-delay:  1s;
 

@keyframes flipa {
  0%{
    border-radius: 5rem;
    background: ${({ colors }) => colors[1]};
    transform: scale(1.2);
    
  }
  20%{
    border-radius: 2rem 5rem 5rem 5rem;
    background: ${({ colors }) => colors[2]};

  }
  40%{
    border-radius: 2rem 2rem 5rem 5rem;
    background: ${({ colors }) => colors[3]};

  }
  60%{
    border-radius: 2rem 2rem 2rem 5rem;
    background: ${({ colors }) => colors[4]};

  }
  80%{
    border-radius: 2rem 2rem 2rem 2rem;
    background: ${({ colors }) => colors[1]};

  }
  100%{
    border-radius: 1em 5rem 5rem 5rem;
  }
} 

 `;

export default LogoB;