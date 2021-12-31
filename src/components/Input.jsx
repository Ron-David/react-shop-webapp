import React from 'react';
import styled from 'styled-components';

import colors from '../config/colors';
import Icon from './Icon';

function Input({ placeholder = 'Enter text here...', value, onChange, multiline, iconBackground, children }) {
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
width: 30%;
display: flex;
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
min-height: 3rem;
justify-content: center;
margin: 0.5rem 0rem;
outline: 0;
padding: 0;
min-width: 50rem;
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

  @media (max-width: 1024px)  {
}

}
`

const RoundedTextArea = styled.textarea`
padding: 0.5rem 1rem 5rem;
border-radius: 30px;
border: 0px solid ${colors.lightGrey};
color: ${colors.dark};
font-size: 1rem;
outline: 0;
width: 100%;
resize: none;

::placeholder{
  color: #cdcbd7;

  @media (max-width: 1024px)  {
}

}
`

export default Input;