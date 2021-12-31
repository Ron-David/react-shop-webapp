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
position: relative;
height: 10rem;
width: 10rem;
display: flex;
align-items: center;
`
const Circle = styled.div`
 height: ${({ size }) => size ? size : 9}rem;
 width: ${({ size }) => size ? size : 9}rem;
 background-color: ${({ colors }) => colors[0]};
 margin: 0.5rem;
 border-radius: 1em 5rem 5rem 5rem;
 position: absolute;
 animation-name: flip;
 animation-duration: 3s;
 animation-iteration-count: 1;
 animation-delay:  1s;
 

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