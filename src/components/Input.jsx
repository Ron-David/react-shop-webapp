import React from 'react';
import styled from 'styled-components';

import colors from '../config/colors';
import Icon from './Icon';

function Input({ placeholder = 'Enter text here...', value, onChange, iconBackground, children }) {
    return (
        <RounedDiv>
            <Icon background={iconBackground}>
                {children}
            </Icon>
            <RoundedInput placeholder={placeholder} onChange={onChange} defaultValue={value} />
        </RounedDiv>
    );
}

const RounedDiv = styled.div`
align-items: center;
background-color: ${colors.white};
border-radius: 30px;
border: 1px solid ${colors.lightGrey};
box-shadow: 0px 0px 3px 3px ${colors.lightGrey};
display: flex;
height: 3rem;
justify-content: center;
margin: 0.5rem 0rem;
outline: 0;
padding: 0rem 0rem;
width: 50rem;
@media (max-width: 1024px)  {
   height: 2.5rem;
   width: 20rem;
}
`
const RoundedInput = styled.input`
border-radius: 30px;
border: 0px solid ${colors.lightGrey};
color: ${colors.dark};
font-size: 1rem;
height: 50%;
outline: 0;
width: 90%;
::placeholder{
  color: #cdcbd7;

  @media (max-width: 1024px)  {
    width: 20rem;
}

}
`

export default Input;