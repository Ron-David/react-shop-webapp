import React from 'react';
import styled from 'styled-components';
import colors from '../config/colors';
import * as S from '../config/styles'

function Price({
    oldPrice = 200,
    currentPrice = 99,
    currency = '₪',
    title = "פס-הלם חשמלי להרחקת יונים!"
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
font-weight: 900;
font-size: 30px;
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
font-weight: 100;
font-size: 23px;
text-decoration: line-through;
font-family: Arial, Helvetica, sans-serif;


@media only screen and (min-width: 1024px) {
        font-size: 30px;
    }
`

const Container = styled.div`
display: block;
font-family: 'Courier New', Courier, monospace;
justify-content: space-around;
align-items: center;
margin: 1rem;
direction: rtl;
@media only screen and (min-width: 1024px) {
    margin: 0rem;

    }

`

export default Price;