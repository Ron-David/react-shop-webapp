import React, { useState } from 'react';
import styled from 'styled-components';
import colors from '../config/colors';
import Button from './Button';
import { FaPlus, FaMinus } from 'react-icons/fa';

function Counter({ onIncrease, onDecrease, size = 8 }) {

    // TODO: move the changes upper in the components tree
    const [count, setCount] = useState(1)
    const handleChange = (c) => {
        if (c >= 0 && c < 99) {
            setCount(c)
        }
    }
    //
    return (
        <Container>
            <Button onClick={() => handleChange(count + 1)} Icon={
                <FaPlus size={size} />
            } />
            <Count type='number' max={999} min={1} value={count} readOnly />
            <Button onClick={() => handleChange(count - 1)} Icon={
                <FaMinus size={size} />
            } />
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    height: 2.5rem;

`
const Count = styled.input`
    width: 100%;
    max-width: 4rem;
    border: 1px solid ${colors.secondary};
    border-radius: 0.6rem;
    font-size: 1.2rem;
    text-align: center;
    outline: none;
    font-family: 'Courier New', Courier, monospace;
    font-weight: 700;
    color: ${colors.dark};

    ::-webkit-inner-spin-button{
        -webkit-appearance: none; 
        margin: 0; 
    }

`
export default Counter;