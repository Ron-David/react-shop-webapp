import React, { useState } from 'react';
import styled from 'styled-components';
import { FaPlus, FaMinus } from 'react-icons/fa';

import colors from '../config/colors';
import Button from './Button';

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
            <Button rounded onClick={() => handleChange(count + 1)} Icon={
                <FaPlus size={size} />
            } />
            <Count type='number' max={999} min={1} value={count} readOnly />
            <Button rounded onClick={() => handleChange(count - 1)} Icon={
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
    border-radius: 0.6rem;
    border: 1px solid ${colors.secondary};
    color: ${colors.dark};
    font-family: 'Courier New', Courier, monospace;
    font-size: 1.2rem;
    font-weight: 700;
    max-width: 4rem;
    outline: none;
    text-align: center;
    width: 100%;

    ::-webkit-inner-spin-button{
        -webkit-appearance: none; 
        margin: 0; 
    }

`
export default Counter;