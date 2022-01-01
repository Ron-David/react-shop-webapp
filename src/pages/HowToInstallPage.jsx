import React, { useEffect } from 'react';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { RiNumber1, RiNumber2, RiNumber3 } from 'react-icons/ri';
import { HiOutlineChevronDoubleDown } from 'react-icons/hi';

import colors from '../config/colors';
import Media from '../components/Media';


const instructions = [
    { id: 0, title: 'שלב ראשון - נקה את המשטח', text: 'ככה זה עושה לי טוב', Icon: <RiNumber1 size={50} /> },
    { id: 1, title: 'שלב שני - הסר את המדבקה', text: '', Icon: <RiNumber2 size={50} /> },
    { id: 2, title: 'שלב שלישי - הדבק והדק!', text: '', Icon: <RiNumber3 size={50} /> },
]

function HowToInstallPage(props) {
    useEffect(() => {
        AOS.init()
    }, []);
    return (
        <div>
            {instructions.map(({ title, text, id, Icon }) =>
                <Container
                    key={id}
                    data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom"
                    data-aos-duration="1000"
                >

                    <Media title={title} text={text} Icon={Icon} />

                    {instructions.length - 1 !== id &&

                        <IconContainer>
                            <HiOutlineChevronDoubleDown size={20} />
                        </IconContainer>
                    }
                </Container>
            )}


        </div>
    );
}
const Container = styled.div`
    background-color: ${colors.lightGrey};
    display: flex;
    flex-direction: column;
    height: 60vh;
    justify-content: space-between;
    margin-bottom: 0.5rem;
    padding: 3rem 1rem;

`
const IconContainer = styled.div`
    align-self: center;
    animation: jump 2s 1s infinite;
    color: ${colors.secondary};

@keyframes jump {
0%{
    opacity: 1;
    transform: rotateY(0deg);
}
50%{

    opacity: 0.3;
}
100%{
    opacity: 1;
    transform: rotateY(180deg);

}

}
`

export default HowToInstallPage;