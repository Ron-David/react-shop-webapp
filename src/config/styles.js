import styled from "styled-components";
import colors from "./colors";
import { Link } from 'react-router-dom';

const P = styled.p`
margin: 0;
color: ${p => p.color || colors.dark};
direction: rtl;
font-family: cursive;
font-size: ${p => p.size || 12}px;

@media only screen and (min-width: 1024px) {
        font-size: ${p => p.size * 1.35 || 16}px;
    }
`
const H1 = styled.h1`
margin: 0;    
color: ${p => p.color || colors.dark};
direction: rtl;
font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
font-size: ${p => p.size || 28}px;
background: ${p => p.background};

@media only screen and (min-width: 1024px) {
        font-size: 32px;
    }
`
const H3 = styled.h3`
margin: 1rem 0;    
color: ${colors.dark};
direction: rtl;
font-family: 'Courier New', Courier, monospace;
font-size: 24px;

@media only screen and (min-width: 1024px) {
        font-size: 30px;
    }
`

const Grid1X2 = styled.div`
    display: grid;
    width: 100%;
    justify-content: center;
    direction: ${p => p.rtl && 'rtl'};
    @media only screen and (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    }
`
const MyLink = styled(Link)`
   text-decoration: none;

`
const Label = styled.label`
margin: 0rem;
color: ${p => p.color || colors.dark};
direction: rtl;
font-family: cursive;
font-size: ${p => p.size || 12}px;
margin: 0 1rem;
@media only screen and (min-width: 1024px) {
        font-size: ${p => p.size * 1.35 || 16}px;
    }
`

const Option = styled.option`
direction: rtl;
`
const Select = styled.select`
color: ${colors.secondary};
background-color: ${colors.white};
border-radius: 0.4rem;
outline: none;
width: 100%;
font-size: ${p => p.size || 15}px;
padding: 0.7em 1em;
display: flex;
border-color: ${colors.secondary};

`
export { H1, H3, P, Grid1X2, MyLink, Label, Option, Select }