import React from 'react';
import styled from 'styled-components';

import colors from '../config/colors';

function ImageCarousel({ imagesUrl, onClick }) {
    return (
        <Container>
            {imagesUrl.map(url =>
                <Images key={url} src={url} onClick={() => onClick(url)} />
            )}
        </Container>
    );
}

const Images = styled.img`
border-radius: 0.5rem;
border: 1px solid ${colors.lightGrey};
box-shadow: 0 0 1rem 0.2rem ${colors.lightGrey};
cursor: pointer;
height: 5rem;
margin: 1rem ;
max-width: 5rem;
min-width: 5rem;
transition: all 0.4s;

:hover{
    border-color: ${colors.secondary};
    transform: scale(1.1);
}

`

const Container = styled.div`
    display: inline-flex;
    overflow: auto;
    width: 100%;
`


export default ImageCarousel;
