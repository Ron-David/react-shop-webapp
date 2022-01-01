import React from 'react';
import styled from "styled-components";
import colors from '../config/colors';


function Button({
    backgroundColor = colors.secondary,
    Icon,
    onClick,
    size = 15,
    text,
    textColor = colors.white,
    width,
    rounded = false,

}) {
    return (
        <Container rounded={rounded} onClick={onClick} width={width} backgroundColor={backgroundColor} textColor={textColor} size={size}>
            {Icon}
            {text}
        </Container>
    );
}
const Container = styled.div`
    align-items: center;
    background-color: ${p => p.backgroundColor};
    border-radius: ${p => p.rounded ? 2 : 0.5}rem;
    border: 1px solid ${colors.primary};
    color: ${p => p.textColor};
    cursor: pointer;
    display: flex;
    font-size: ${p => p.size}px;
    font-weight: 800;
    justify-content: center;
    padding: 1em 1em;
    text-align: center;
    transition: all 0.4s;
    width: ${p => p.width || ''}rem;

    :hover{
    background-color: ${colors.white};
    color: ${p => p.backgroundColor};

    }
    @media only screen and (min-width: 1024px) {
        font-size: ${({ size }) => size ? size * 1.3 : 20}px;
    }

`
export default Button;