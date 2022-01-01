import React from 'react';
import styled from 'styled-components';

import colors from '../config/colors';
import Icon from './Icon';

function Input({
    children,
    iconBackground,
    multiline,
    onChange,
    value,
    placeholder = 'Enter text here...',
}) {
    return (
        <RounedDiv>
            {children &&
                <IconContainer>
                    <Icon background={iconBackground}>
                        {children}
                    </Icon>
                </IconContainer>
            }


            {multiline ?
                <RoundedTextArea placeholder={placeholder} onChange={onChange} defaultValue={value} />
                :
                <RoundedInput placeholder={placeholder} onChange={onChange} defaultValue={value} />
            }
        </RounedDiv>
    );
}
const IconContainer = styled.div`
display: flex;
width: 30%;
@media only screen and (min-width: 1024px) {
    width: 10%;
    }
`
const RounedDiv = styled.div`
align-items: center;
background-color: ${colors.white};
border-radius: 30px;
border: 1px solid ${colors.lightGrey};
box-shadow: 0px 0px 3px 3px ${colors.lightGrey};
display: flex;
justify-content: center;
margin: 0.5rem 0rem;
min-height: 3rem;
min-width: 50rem;
outline: 0;
padding: 0;
@media (max-width: 1024px)  {
   min-height: 2.5rem;
   min-width: 20rem;
}
`
const RoundedInput = styled.input`
border-radius: 30px;
border: 0px solid ${colors.lightGrey};
color: ${colors.dark};
font-size: 1rem;
height: 50%;
outline: 0;
width: 100%;
::placeholder{
  color: #cdcbd7;
}
`

const RoundedTextArea = styled.textarea`
border-radius: 30px;
border: 0px solid ${colors.lightGrey};
color: ${colors.dark};
font-size: 1rem;
outline: 0;
padding: 0.5rem 1rem 5rem;
resize: none;
width: 100%;

::placeholder{
  color: #cdcbd7;
  }
`

export default Input;