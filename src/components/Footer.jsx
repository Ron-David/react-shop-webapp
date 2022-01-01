import React from 'react';
import styled from 'styled-components';

import colors from '../config/colors';
import SkewedContainer from './SkewedContainer';
import * as S from '../config/styles'

function Footer(props) {
    return (

        <Container>
            <SkewedContainer flip background={colors.secondary}>

                <S.P color={colors.white}>
                    כל הזכויות שמורות Ⓒ
                </S.P>
            </SkewedContainer>
        </Container>
    );
}

const Container = styled.div`
    text-align: center;
    width: 100vw;
    margin-top: 5rem;
`

export default Footer;