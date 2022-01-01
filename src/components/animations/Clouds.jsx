import React from 'react';
import styled from 'styled-components';

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const createClouds = (numOfClouds) => {
    let clouds = []
    for (let i = 0; i < numOfClouds; i++) {
        clouds.push({ key: i, height: random(2, 8), duration: random(10, 50), top: random(2, 40), rtl: random(0, 2) })
    }
    return clouds
}
const url = "https://cdn.pixabay.com/photo/2014/04/03/00/40/cloud-309024_960_720.png"
function Clouds({ numOfClouds = 5 }) {
    return (
        <div>
            {createClouds(numOfClouds).map(c =>

                <ImgCloud
                    alt='cloud'
                    duration={c.duration}
                    height={c.height}
                    key={c.key}
                    rtl={c.rtl}
                    src={url}
                    top={c.top}
                />
            )}
        </div>
    );
}


const ImgCloud = styled.img`
    animation: ${p => p.rtl ? 'rtl' : 'ltr'} ${p => p.duration || 10}s 1s infinite ;
    height: ${p => p.height || 5}rem;
    opacity: 0;
    position: fixed;
    top: ${p => p.top || 15}rem;
    z-index: -1;
    @keyframes rtl {
        0%{
            left: 100%;
            opacity: 0;
        }
        50%{
            opacity: 0.3;
        }
        100%{
            left: 0%;
            opacity: 0;
        }
    }

    @keyframes ltr {
        0%{
            left: 0%;
            opacity: 0;
        }
        50%{
            opacity: 0.3;
        }
        100%{
            left: 100%;
            opacity: 0;
        }
    }
`

export default Clouds;