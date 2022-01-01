import React from 'react';
import styled from 'styled-components';

import Button from './Button';
import Counter from './Counter';
import Price from './Price';
import ProductImage from './ProductImage';
import SelectOption from './SelectOption';

function Product({ imagesUrl, title, price, oldPrice, description }) {
    return (
        <Container>
            <ProductImage imagesUrl={imagesUrl} />
            <DetailsContainer>
                <Price price={price} title={title} oldPrice={oldPrice} />

                <BtnConteiner>
                    <Button text='הוסף לסל' width={20} />
                </BtnConteiner>
                <VarintContainer>
                    <Counter />
                    <SelectOption />
                </VarintContainer>
            </DetailsContainer>
        </Container>
    );
}

const Container = styled.div`
    @media only screen and (min-width: 1024px) {
    display: flex;
    justify-content: space-evenly;

    }

`
const VarintContainer = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    margin: 1rem 0;

`
const DetailsContainer = styled.div`
    @media only screen and (min-width: 1024px) {
        width: 30%;
    }
`

const BtnConteiner = styled.div`
display: flex;
justify-content: space-evenly;
width: 100%;
@media only screen and (min-width: 1024px) {
    margin: 0rem;
    }
`

export default Product;