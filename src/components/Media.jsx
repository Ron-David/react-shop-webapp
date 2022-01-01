import React from 'react';
import styled from 'styled-components';

import * as S from '../config/styles'
import colors from '../config/colors';

function Media({
    Icon,
    text = 'מהירות מהירות מהירות מהוירת',
    title = 'מהירות',
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