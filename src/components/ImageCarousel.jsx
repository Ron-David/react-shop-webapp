import React from 'react';
import colors from '../config/colors';
import styled from 'styled-components';

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
height: 5rem;
min-width: 5rem;
max-width: 5rem;
margin: 1rem ;
border: 1px solid ${colors.lightGrey};
border-radius: 0.5rem;
box-shadow: 0 0 1rem 0.2rem ${colors.lightGrey};
cursor: pointer;
transition: all 0.4s;

:hover{
    border-color: ${colors.secondary};
    transform: scale(1.1);
}

`

const Container = styled.div`
    display: inline-flex;
    width: 100%;
    overflow: auto;
`


export default ImageCarousel;
