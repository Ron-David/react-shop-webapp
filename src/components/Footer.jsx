import React from 'react';
import colors from '../config/colors';
import SkewedContainer from './SkewedContainer';
import * as S from '../config/styles'
import styled from 'styled-components';
function Footer(props) {
    return (
        <SkewedContainer flip background={colors.secondary}>

            <Container>

                <S.P color={colors.white}>
                    כל הזכויות שמורות Ⓒ
                </S.P>
            </Container>
        </SkewedContainer>
    );
}

const Container = styled.div`
    display: flex;
    justify-content: center;
`

export default Footer;