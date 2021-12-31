import React, { useEffect } from 'react';
import InputForm from '../components/InputForm';
import { ReactComponent as TopImg } from '../assets/contact.svg';
import styled from 'styled-components';
import * as S from '../config/styles'
import AOS from 'aos';
import 'aos/dist/aos.css';

function ContactPage(props) {

    useEffect(() => {
        AOS.init()
    }, []);
    return (
        <Container>
            <div data-aos="fade-right"
                data-aos-duration="1000">

                <TopImg width={400} />
            </div>
            <div data-aos="fade-up"
                data-aos-duration="1000">

                <InputForm />
            </div>
        </Container>
    );
}

const Container = styled.div`
margin-bottom: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export default ContactPage;