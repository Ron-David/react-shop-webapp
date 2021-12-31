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
    display: flex;
    height: 2.5rem;
    width: 100%;
    border-radius: 30px;
    background-color: ${({ background }) => background ? background : colors.secondary};
    margin: 0px 2px;
    margin-right: 0.5rem;
    justify-content: center;
    align-items: center;
    @media (max-width: 1024px)  {    
        height: 2rem;

}

`;

export default Icon;