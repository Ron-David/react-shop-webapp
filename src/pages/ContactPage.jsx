import React, { useEffect } from 'react';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { ReactComponent as TopImg } from '../assets/contact.svg';
import InputForm from '../components/InputForm';

function ContactPage(props) {

    useEffect(() => {
        AOS.init()
    }, []);
    return (
        <Container>
            <ImgContainer data-aos="fade-right"
                data-aos-duration="1000">

                <TopImg width={400} />
            </ImgContainer>
            <div data-aos="fade-up"
                data-aos-duration="1000">

                <InputForm />
            </div>
        </Container>
    );
}
const ImgContainer = styled.div`
margin: -5rem 0;
    
`

const Container = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 5rem;
`

export default ContactPage;