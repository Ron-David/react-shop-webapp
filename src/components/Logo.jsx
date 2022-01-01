import React from 'react';
import styled from "styled-components";

import colors from '../config/colors';

const logoColors = [
  colors.red,
  colors.grey,
  colors.primary,
]

function Logo({ colorsList = logoColors }) {
  return (
    <Container>
      <LogoItem colors={colorsList} index={0} radius={2} />
      <LogoItem colors={colorsList} index={1} />
      <LogoItem colors={colorsList} index={2} />
    </Container>
  );
}

const Container = styled.div`
    position: relative;
`

const LogoItem = styled.div`
 animation-delay:  ${({ index }) => index === 2 ? index - 1 : 0}s;
 animation-duration: ${({ index }) => index ? 2 : 5}s;
 animation-iteration-count: 1;
 animation-name: ${({ index }) => index === 0 ? 'flipa' : 'flip'};
 background-color: ${({ colors, index }) => colors[index]};
 border-radius: ${({ radius }) => radius ? radius : 10}rem;
 height: ${({ size }) => size ? size : 10}rem;
 opacity: ${({ index }) => index !== 0 ? 0 : 1};
 position: absolute;
 transform-origin: 50%;
 width: ${({ size }) => size ? size : 10}rem;
  @keyframes flip {
    from {
      opacity: 0;
      transform: rotateX(90deg) ;
    }
    to {
      opacity: 1;
      transform: rotateX(-90deg);
  }
} 

@keyframes flipa {
    from {
      border-radius: ${({ size }) => size ? size : 10}rem;
      opacity: 0;
      transform: rotateY(90deg) ;
    }
    to {
      border-radius: 2rem; 
      opacity: 1;
      transform: rotateX(0deg);
  }
} 

 `;

export default Logo;