import React from 'react';
import styled from 'styled-components';

import colors from '../config/colors';

function Icon({ children, background }) {
    return (
        <Container background={background}>
            {children}
        </Container>
    );
}

const Container = styled.div`
    align-items: center;
    background-color: ${({ background }) => background ? background : colors.secondary};
    border-radius: 30px;
    display: flex;
    height: 2.5rem;
    justify-content: center;
    margin-right: 0.5rem;
    margin: 0px 2px;
    width: 100%;

    @media (max-width: 1024px)  {    
        height: 2rem;

}

`;

export default Icon;