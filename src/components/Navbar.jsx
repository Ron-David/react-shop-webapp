import React, { useState } from 'react';
import styled from "styled-components";
import { BsList } from 'react-icons/bs';
import colors from '../config/colors';
import * as S from '../config/styles'

const fakeCategoryItems = [
    { name: 'דף הבית', path: '/' },
    { name: 'איך זה עובד?', path: '/how-to-install' },
    { name: 'מי אנחנו?', path: '/' },
    { name: 'צור קשר', path: '/' },
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

                <IconContainer active={active} onClick={() => setActive(!active)}>
                    <BsList size={25} />
                </IconContainer>

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
        </Wrapper>
    );
}
const Wrapper = styled.div`
    margin-bottom: 2.5rem;
`
const Container = styled.div`
    display: flex;
    width: 100%;
    position: fixed;
    flex-wrap: wrap;
    justify-content: space-between;
    background-color: ${colors.secondary};
    align-items: center;
    z-index: 1;
    @media only screen and (min-width: 1024px) {
        flex-wrap: nowrap;
        justify-content: space-evenly;

    }

`
const Logo = styled.div`
    margin-left: 1rem;
    color: ${colors.white};
    font-weight: 600;
    cursor: pointer;
`;

const IconContainer = styled.div`
    margin: 0.5rem;
    color: ${({ active }) => active ? colors.white : colors.lightGrey};
    cursor: pointer;
    transition: transform 0.5s ease-out ,color 0.2s;
    transform: rotate(${({ active }) => active ? -90 : 0}deg);
:hover{
    color: ${colors.white};
}
@media only screen and (min-width: 1024px) {
    visibility: hidden;
    }

`

const CategoryContainer = styled.ul`
    background-color: ${colors.secondary};
    text-align: center;
    padding: 0 ;
    margin: 0;
    max-height: ${({ active }) => active ? 50 : 0}vh;
    overflow: hidden;
    transition: all 0.5s ;
    opacity: ${({ active }) => active ? 1 : 0};
    direction: rtl;
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
color: ${colors.lightGrey};
list-style: none;
transition: all 0.4s;
border-top: 1px dotted ${colors.lightGrey};
cursor: pointer;
direction: rtl;
padding: 0.7rem;
:hover{
    color: ${colors.white};
    transform: scale(1.1);

}
@media only screen and (min-width: 1024px) {
    border-top:0;
    }
`

export default Navbar;