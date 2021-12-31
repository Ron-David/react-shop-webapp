import React from 'react';
import styled from 'styled-components';
import colors from '../config/colors';

function SkewedContainer({ children, background, flip = false }) {
    return (
        <Container flip={flip} background={background}>
            {children}
        </Container>
    );
}

const Container = styled.div`
background-color: ${p => p.background || colors.lightGrey};
clip-path: polygon(0 0, 100% ${p => p.flip ? 20 : 0}%, 100% 100%, 0% ${p => p.flip ? 100 : 90}%);

padding: 1rem 0rem 3rem 0;

@media only screen and (min-width: 1024px) {
        align-items: center;
        justify-content: space-between;
        margin-top: 5rem;
    }
`;

export default SkewedContainer;