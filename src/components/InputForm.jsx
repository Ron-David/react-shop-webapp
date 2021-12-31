import React from 'react';
import styled from 'styled-components';
import { FiMail } from 'react-icons/fi'
import { BsFillPersonFill, BsFillPencilFill } from 'react-icons/bs'

import Button from './Button';
import Input from './Input';
import * as S from '../config/styles'
import colors from '../config/colors';

function InputForm(props) {
    return (
        <Container>
            <S.P rtl={true}>השאר פרטים:</S.P>
            <InputContainer>
                <Input placeholder='Email' iconBackground={colors.lightGrey}>
                    <FiMail size={20} color={colors.primary} />
                </Input>
                <Input placeholder='Name' iconBackground={colors.lightGrey}>
                    <BsFillPersonFill size={20} color={colors.primary} />
                </Input>
                <Input placeholder='Text' iconBackground={colors.lightGrey}>
                    <BsFillPencilFill size={20} color={colors.primary} />
                </Input>
            </InputContainer>
            <Button text='שלח' width={8} />
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem 0rem;
`
const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem 0rem;
`

export default InputForm;