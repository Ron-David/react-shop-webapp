import React from 'react';
import styled from 'styled-components';
import colors from '../config/colors';
import * as S from '../config/styles'

const fakeOptions = [
    '2 מטר',
    '5 מטר',
    '10 מטר',
]
function SelectOption({ label = "אורך:", options = fakeOptions }) {
    return (
        <Container>
            <S.Select defaultValue={options[0]}>
                {options.map(v =>
                    <S.Option key={v}>{v}</S.Option>
                )}
            </S.Select>
            <S.Label size={16}>{label}</S.Label>
        </Container>
    );
}

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-left: 2rem;
`

export default SelectOption;