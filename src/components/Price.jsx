import React from 'react';
import styled from 'styled-components';

import colors from '../config/colors';
import * as S from '../config/styles'

function Price({
    currency = '₪',
    currentPrice = 99,
    oldPrice = 200,
    title = "פס-הלם חשמלי להרחקת יונים!",
}) {
    return (
        <Container>

            {title &&
                <S.H1 size={26}>{title}</S.H1>
            }
            <PriceContainer>
                {oldPrice &&
                    <OldPrice>
                        {oldPrice + currency}
                    </OldPrice>
                }
                {currentPrice &&
                    <CurrentPrice>
                        {currentPrice + currency}
                    </CurrentPrice>
                }
            </PriceContainer>
        </Container>
    );
}

const CurrentPrice = styled.span`
    margin: 0;
color: ${({ textColor }) => textColor ? textColor : colors.dark};
font-size: 30px;
font-weight: 900;
padding-left: 1rem;

@media only screen and (min-width: 1024px) {
        font-size: 40px;
    }
`

const PriceContainer = styled.div`
    margin: 1rem 0;
`

const OldPrice = styled.span`
    margin: 0;
color: ${({ textColor }) => textColor ? textColor : colors.red};
font-family: Arial, Helvetica, sans-serif;
font-size: 23px;
font-weight: 100;
text-decoration: line-through;


@media only screen and (min-width: 1024px) {
        font-size: 30px;
    }
`

const Container = styled.div`
align-items: center;
direction: rtl;
display: block;
font-family: 'Courier New', Courier, monospace;
justify-content: space-around;
margin: 1rem;
@media only screen and (min-width: 1024px) {
    margin: 0rem;

    }

`

export default Price;