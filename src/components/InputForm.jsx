import React, { useState } from 'react';
import styled from 'styled-components';
import { FiMail } from 'react-icons/fi'
import { BsFillPersonFill, BsFillPencilFill } from 'react-icons/bs'

import Button from './Button';
import Input from './Input';
import * as S from '../config/styles'
import colors from '../config/colors';

function InputForm({ label = 'השאר פרטים:' }) {
    const [email, setEmail] = useState()
    const [name, setName] = useState()
    const [text, setText] = useState()

    return (
        <Container>
            <S.Label rtl={true} size={20}>{label}</S.Label>
            <InputContainer>
                <Input placeholder='Email' value={email} onChange={setEmail} iconBackground={colors.lightGrey}>
                    <FiMail size={20} color={colors.primary} />
                </Input>
                <Input placeholder='Name' value={name} onChange={setName} iconBackground={colors.lightGrey}>
                    <BsFillPersonFill size={20} color={colors.primary} />
                </Input>
                <Input multiline placeholder='Text' value={text} onChange={setText} iconBackground={colors.lightGrey}>
                    {/* <BsFillPencilFill size={20} color={colors.primary} /> */}
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
`
const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem 0rem;
`;


export default InputForm;