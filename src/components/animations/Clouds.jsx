import React from 'react';
import styled from 'styled-components';
import { RiNumber1 } from 'react-icons';
import colors from '../../config/colors';

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const createClouds = (numOfClouds) => {
    let clouds = []
    for (let i = 0; i < numOfClouds; i++) {
        clouds.push({ height: random(2, 8), duration: random(10, 50), top: random(2, 40), rtl: random(0, 2) })
    }
    return clouds
}
const url = "https://cdn.pixabay.com/photo/2014/04/03/00/40/cloud-309024_960_720.png"
function Clouds({ numOfClouds = 5 }) {

    console.log(createClouds(numOfClouds))


    return (
        <div>
            {createClouds(numOfClouds).map(c =>

                <ImgCloud
                    src={url}
                    alt='cloud'
                    height={c.height}
                    duration={c.duration}
                    top={c.top}
                    rtl={c.rtl} />
            )}
            {/* <ImgCloud src="https://cdn.pixabay.com/photo/2012/05/07/02/11/cloud-47582_1280.png" alt='cloud' height={200} duration={15} top={5} />
            <ImgCloud src="https://cdn.pixabay.com/photo/2012/05/07/02/11/cloud-47582_1280.png" alt='cloud' height={300} duration={25} top={25} />
            <ImgCloud src="https://cdn.pixabay.com/photo/2012/05/07/02/11/cloud-47582_1280.png" alt='cloud' height={400} duration={35} top={35} /> */}
        </div>
    );
}


const ImgCloud = styled.img`
    position: fixed;
    z-index: -1;
    height: ${p => p.height || 5}rem;
    animation: ${p => p.rtl ? 'rtl' : 'ltr'} ${p => p.duration || 10}s 1s infinite ;
    top: ${p => p.top || 15}rem;
    opacity: 0;
    @keyframes rtl {
        0%{
            left: 20rem;
            opacity: 0;
        }
        50%{
            opacity: 0.3;
        }
        100%{
            left: -10rem;
            opacity: 0;
        }
    }

    @keyframes ltr {
        0%{
            left: 0rem;
            opacity: 0;
        }
        50%{
            opacity: 0.3;
        }
        100%{
            left: 30rem;
            opacity: 0;
        }
    }
`

export default Clouds;