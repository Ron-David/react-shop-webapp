import styled from "styled-components";
import { Link } from 'react-router-dom';

import colors from "./colors";

const P = styled.p`
color: ${p => p.color || colors.dark};
direction: rtl;
font-family: 'Courier New', Courier, monospace;
font-size: ${p => p.size || 12}px;
font-weight: 600;
margin: 0;

@media only screen and (min-width: 1024px) {
        font-size: ${p => p.size * 1.35 || 16}px;
    }
`

const H1 = styled.h1`
background: ${p => p.background};
color: ${p => p.color || colors.dark};
direction: rtl;
font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
font-size: ${p => p.size || 28}px;
margin: 0.5rem 0;    

@media only screen and (min-width: 1024px) {
        font-size: 32px;
    }
`
const H3 = styled.h3`
color: ${colors.dark};
direction: rtl;
font-family: 'Courier New', Courier, monospace;
font-size: ${p => p.size || 24}px;
margin: 0.5rem 0;    

@media only screen and (min-width: 1024px) {
    font-size: ${p => p.size * 1.25 || 30}px;
    }
`

const Grid1X2 = styled.div`
    direction: ${p => p.rtl && 'rtl'};
    display: grid;
    justify-content: center;
    width: 100%;
    @media only screen and (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    }
`
const MyLink = styled(Link)`
   text-decoration: none;

`
const Label = styled.label`
color: ${p => p.color || colors.dark};
direction: rtl;
font-family: cursive;
font-size: ${p => p.size || 12}px;
margin: 0 1rem;
margin: 0rem;
@media only screen and (min-width: 1024px) {
        font-size: ${p => p.size * 1.35 || 16}px;
    }
`

const Option = styled.option`
direction: rtl;
`
const Select = styled.select`
background-color: ${colors.white};
border-color: ${colors.secondary};
border-radius: 0.4rem;
color: ${colors.secondary};
display: flex;
font-size: ${p => p.size || 15}px;
outline: none;
padding: 0.7em 1em;
width: 100%;

`
export {
    Label,
    MyLink,
    Option,
    Select,
    Grid1X2,
    P,
    H1,
    H3,
}