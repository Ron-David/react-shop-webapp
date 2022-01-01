import React from 'react';
import styled from 'styled-components';
import colors from '../config/colors';
import * as S from '../config/styles';
import { ReactComponent as SvgImg } from '../assets/teamwork.svg';

const img = 'https://images.pexels.com/photos/3205568/pexels-photo-3205568.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
const lorem = 'הכאב עצמו חשוב לאליטה השומן העיקרית. יש, במקרים אחרים, הרבה פעמים מקובלות לחפש כל מוצא ללא הפרעה, וזה לא בחינם, וגם לא מונע זאת. איזה כאב, אכן, גם לא! הכאב עצמו חשוב לאליטה השומן העיקרית. יש, במקרים אחרים, הרבה פעמים מקובלות לחפש כל מוצא ללא הפרעה, וזה לא בחינם, וגם לא מונע זאת. איזה כאב, אכן, גם לא! הכאב עצמו חשוב לאליטה השומן העיקרית. יש, במקרים אחרים, הרבה פעמים מקובלות לחפש כל מוצא ללא הפרעה, וזה לא בחינם, וגם לא מונע זאת. איזה כאב, אכן, גם לא! הכאב עצמו חשוב לאליטה השומן העיקרית. יש, במקרים אחרים, הרבה פעמים מקובלות לחפש כל מוצא ללא הפרעה, וזה לא בחינם, וגם לא מונע זאת. איזה כאב, אכן, גם לא! הכאב עצמו חשוב לאליטה השומן העיקרית. יש, במקרים אחרים, הרבה פעמים מקובלות לחפש כל מוצא ללא הפרעה, וזה לא בחינם, וגם לא מונע זאת. איזה כאב, אכן, גם לא!'

function AboutUsPage(props) {
    return (
        <Container>
            <CardContainer>
                <TitleContainer>

                    <S.H3 size={30}>קצת עלינו:</S.H3>
                </TitleContainer>
                <S.P>{lorem}</S.P>
                <ImgContainer>

                    <SvgImg height={200} />
                </ImgContainer>
            </CardContainer>
        </Container>
    );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
margin: 5rem 0.5rem;
`;
const CardContainer = styled.div`
display: block;
padding: 1rem;
width: 90%;
border: 1px dotted ${colors.dark};
border-radius: 2rem;
`

const TitleContainer = styled.div`
    text-align: center;
    margin: 1rem 0 2rem 0;
`
const ImgContainer = styled.div`
display: flex;
margin: 5rem 0 0 0;
justify-content: center;
`

export default AboutUsPage;