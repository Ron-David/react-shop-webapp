import React, { useEffect } from 'react';
import styled from "styled-components";
import { ReactComponent as TopImg } from '../assets/houses.svg';
import Media from '../components/Media';
import * as S from '../config/styles'
import { FaShippingFast } from 'react-icons/fa';
import { IoMdPricetags } from 'react-icons/io';
import { HiShieldCheck } from 'react-icons/hi';
import AOS from 'aos';
import 'aos/dist/aos.css';

import SkewedContainer from '../components/SkewedContainer';
import Product from '../components/Product';
import InputForm from '../components/InputForm';
import Clouds from '../components/animations/Clouds';

const title = 'להיפטר מהיונים-ללא דוקרנים!'
const subText = 'הגיע הזמן לפתרון יעיל ואסתטי לבעיית היונים'

const images = [
    'https://cdn.shopify.com/s/files/1/0011/5136/9281/products/U2A9742s_1024x1024@2x.jpg?v=1626349842',
    'https://cdn.shopify.com/s/files/1/0011/5136/9281/products/U2A9730s_110x110@2x.jpg?v=1626349842',
    'https://cdn.shopify.com/s/files/1/0011/5136/9281/products/U2A9719s_110x110@2x.jpg?v=1626349842'
]


function HomePage() {
    useEffect(() => {
        AOS.init()
    }, []);
    return (
        <div>
            <Clouds numOfClouds={5} />
            <ContainerA>
                <TopContainer data-aos="fade-right"
                    data-aos-duration="1000"
                >
                    <TopImg height='90%' />
                </TopContainer>
                <Container data-aos="fade-left"
                    data-aos-duration="1000"
                >
                    <Text>
                        <S.H1>{title}</S.H1>
                        <S.P>{subText}</S.P>
                    </Text>
                </Container>
            </ContainerA>

            <ProductContainer
                data-aos="fade-up"
                data-aos-duration="1000"
            >
                <Product imagesUrl={images} />
            </ProductContainer>

            <SkewedContainer>
                <div data-aos="zoom-in" data-aos-duration="1000">

                    <Media Icon={<FaShippingFast size={35} />} />
                    <Media Icon={<IoMdPricetags size={35} />} />
                    <Media Icon={<HiShieldCheck size={35} />} />
                </div>
            </SkewedContainer>
            <div data-aos="zoom-in" data-aos-duration="1000" >
                <InputForm />
            </div>
        </div>
    );
}
const TopContainer = styled.div`
width: 100%;
margin: 1rem 0rem -2rem;
display: flex;
align-items: center;

@media only screen and (min-width: 1024px) {
        width: 40%;
        margin: 3rem 0rem -2rem;

    }
`
const Container = styled.div`
    width: 100%;
    display: flex;
    margin: 3.5rem 0;
    justify-content: center;
    align-items: center;

    @media only screen and (min-width: 1024px) {
        clip-path: polygon(0 0, 100% 0%, 100% 100%, 0% 100%);
        justify-content: end;
        width: 50%;

    }
`
const Text = styled.span`
text-align: center;
direction: rtl;

@media only screen and (min-width: 1024px) {
    text-align: start;
    }
`
const ContainerA = styled.div`
    display: flex;
    flex-wrap: wrap;

    @media only screen and (min-width: 1024px) {
        align-items: center;
        justify-content: space-between;
        margin: 3rem 8rem 0;
    }

`

const ProductContainer = styled.div`
margin-bottom: 5rem ;
@media only screen and (min-width: 1024px) {
        margin-top: 8rem;

    }
`;

export default HomePage;