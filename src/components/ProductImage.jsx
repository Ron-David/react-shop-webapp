import React, { useState } from 'react';
import styled from 'styled-components';

import ImageCarousel from './ImageCarousel';
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
background-color: ${colors.white};
border-radius: 0.5rem;
border: 1px solid ${colors.lightGrey};
box-shadow: 0 0 1rem 0.2rem ${colors.lightGrey};
display: flex;
height: 20rem;
justify-content: center;
object-fit: contain;
padding: 1rem 0;
width: 100%;


@media only screen and (min-width: 1024px) {
    height: 30rem;
    width: 30rem;

    }
`
export default ProductImage;