import React from 'react';
import styled from "styled-components";
import colors from '../config/colors';


function Button({
    text,
    onClick,
    backgroundColor = colors.secondary,
    textColor = colors.white,
    size = 15,
    width,
    Icon

}) {
    return (
        <Container onClick={onClick} width={width} backgroundColor={backgroundColor} textColor={textColor} size={size}>
            {Icon}
            {text}
        </Container>
    );
}
const Container = styled.div`
    background-color: ${p => p.backgroundColor};
    width: ${p => p.width || ''}rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.6rem;
    cursor: pointer;
    text-align: center;
    font-weight: 800;
    border: 1px solid ${colors.primary};
    color: ${p => p.textColor};
    padding: 1em 1em;
    font-size: ${p => p.size}px;
    transition: all 0.4s;

    :hover{
    background-color: ${colors.white};
    color: ${p => p.backgroundColor};

    }

    @media only screen and (min-width: 1024px) {
        font-size: ${({ size }) => size ? size * 1.3 : 20}px;
    }

`
export default Button;