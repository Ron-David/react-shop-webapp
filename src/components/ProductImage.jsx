import React, { useState } from 'react';

import ImageCarousel from './ImageCarousel';
import styled from 'styled-components';
import colors from '../config/colors';

function ProductImage({ imagesUrl }) {
    const [mainImg, setMainImg] = useState(imagesUrl[0])
    return (
        <ImagesContainer>
            <MainImage src={mainImg} />
            <ImageCarousel imagesUrl={imagesUrl} onClick={setMainImg} />
        </ImagesContainer>
    );
}
const ImagesContainer = styled.div`
height: 100%;  
margin: 1rem;
`

const MainImage = styled.img`
height: 20rem;
width: 100%;
object-fit: contain;
background-color: ${colors.white};
display: flex;
padding: 1rem 0;
justify-content: center;
border: 1px solid ${colors.lightGrey};
border-radius: 0.5rem;
box-shadow: 0 0 1rem 0.2rem ${colors.lightGrey};


@media only screen and (min-width: 1024px) {
    height: 30rem;
    width: 30rem;

    }
`
export default ProductImage;