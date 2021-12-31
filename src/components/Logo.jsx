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
 height: ${({ size }) => size ? size : 10}rem;
 width: ${({ size }) => size ? size : 10}rem;
 background-color: ${({ colors, index }) => colors[index]};
 border-radius: ${({ radius }) => radius ? radius : 10}rem;
 transform-origin: 50%;
 position: absolute;
 opacity: ${({ index }) => index !== 0 ? 0 : 1};
 animation-name: ${({ index }) => index === 0 ? 'flipa' : 'flip'};
 animation-duration: ${({ index }) => index ? 2 : 5}s;
 animation-iteration-count: 1;
 animation-delay:  ${({ index }) => index === 2 ? index - 1 : 0}s;
  @keyframes flip {
    from {
      transform: rotateX(90deg) ;
      opacity: 0;
    }
    to {
    transform: rotateX(-90deg);
    opacity: 1;
  }
} 

@keyframes flipa {
    from {
      transform: rotateY(90deg) ;
      border-radius: ${({ size }) => size ? size : 10}rem;
      opacity: 0;
    }
    to {
    transform: rotateX(0deg);
    opacity: 1;
    border-radius: 2rem; 
  }
} 

 `;

export default Logo;