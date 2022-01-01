import React, { useState } from 'react';
import styled from "styled-components";
import { BsList, BsCart3 } from 'react-icons/bs';
import { Badge } from '@mui/material/';

import colors from '../config/colors';
import * as S from '../config/styles'

const fakeCategoryItems = [
    { name: 'דף הבית', path: '/' },
    { name: 'איך זה עובד?', path: '/how-to-install' },
    { name: 'מי אנחנו?', path: '/' },
    { name: 'צור קשר', path: '/contact-us' },
]

function Navbar({ categories = fakeCategoryItems }) {
    const [active, setActive] = useState(false)
    return (
        <Wrapper>
            <Container>
                <S.MyLink to='/'>
                    <Logo>
                        RONBOX
                    </Logo>
                </S.MyLink>

                <CartContiner>
                    <Badge badgeContent={4} color='error'>
                        <BsCart3 size={25} />
                    </Badge>
                    <IconContainer active={active} onClick={() => setActive(!active)}>
                        <BsList size={25} />
                    </IconContainer>
                </CartContiner>


                <CategoryContainer active={active}>
                    {categories.map(({ name, path }) =>
                        <S.MyLink key={name} to={path} onClick={() => setActive(!active)}>
                            <CategoryItem>
                                {name}
                            </CategoryItem>
                        </S.MyLink>
                    )}
                </CategoryContainer>
            </Container>
        </Wrapper >
    );
}
const Wrapper = styled.div`
    margin-bottom: 2.5rem;
`

const CartContiner = styled.div`
    color: ${colors.white};
    align-items: center;
    justify-content: center;
    display: flex;
    cursor: pointer;
    margin: 0 0.5rem;
`
const Container = styled.div`
    align-items: center;
    background-color: ${colors.secondary};
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0.7rem 0;
    position: fixed;
    width: 100%;
    z-index: 1;
    @media only screen and (min-width: 1024px) {
        flex-wrap: nowrap;
        justify-content: center;

    }

`
const Logo = styled.div`
    color: ${colors.white};
    cursor: pointer;
    font-weight: 600;
    margin: 0 1rem ;
`;

const IconContainer = styled.div`
    color: ${({ active }) => active ? colors.white : colors.lightGrey};
    cursor: pointer;
    transform: rotate(${({ active }) => active ? -90 : 0}deg);
    transition: transform 0.5s ease-out ,color 0.2s;
    margin: 0 0.5rem;

:hover{
    color: ${colors.white};
}
@media only screen and (min-width: 1024px) {
    display: none;

    }

`

const CategoryContainer = styled.ul`
    background-color: ${colors.secondary};
    direction: rtl;
    margin: 0;
    max-height: ${({ active }) => active ? 50 : 0}vh;
    opacity: ${({ active }) => active ? 1 : 0};
    overflow: hidden;
    padding: 0 ;
    text-align: center;
    transition: all 0.5s ;
    @media only screen and (max-width: 1024px) {
        width: 100%;

    }

    @media only screen and (min-width: 1024px) {
        display: flex;
        max-height: 100%;
        opacity: 1;
    }

`
const CategoryItem = styled.li`
border-top: 1px dotted ${colors.lightGrey};
color: ${colors.lightGrey};
cursor: pointer;
direction: rtl;
list-style: none;
padding: 0.7rem;
transition: all 0.4s;
:hover{
    color: ${colors.white};
    transform: scale(1.1);

}
@media only screen and (min-width: 1024px) {
    border-top:0;
    }
`

export default Navbar;