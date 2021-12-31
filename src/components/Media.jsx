import React from 'react';
import * as S from '../config/styles'
import styled from 'styled-components';
import colors from '../config/colors';

function Media({
    Icon,
    title = 'מהירות',
    text = 'מהירות מהירות מהירות מהוירת'
}) {

    return (
        <Container>
            <Text>
                <S.H3>{title}</S.H3>
                <S.P>{text}</S.P>
            </Text>
            <IconContainer>
                {Icon}
            </IconContainer>
        </Container>
    );
}
const Container = styled.div`
display: flex;
margin-bottom: 1.5rem;
`

const Text = styled.div`
    width: 90%;
`

const IconContainer = styled.div`
        color: ${colors.secondary};
        margin: 0 1rem;
`
export default Media;