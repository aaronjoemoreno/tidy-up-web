import React from 'react'
import styled from 'styled-components';
import { StaticImage } from "gatsby-plugin-image"

const Container = styled.div`
    width: 100%;
    height: 130vh;
    display: grid;
    grid-template-columns: 1fr 1fr;

    .slogan{
        width: 80%;
        padding: 5rem 5rem 0 5rem;

        .gradient{
            font-size: 10rem;
            font-family: var(--main-extra-bold);
            background: linear-gradient(60deg, var(--blue) 25%, var(--aqua) 75%);
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            line-height: 10rem;
        }

        h1{
            font-size: 10rem;
            font-family: var(--main-extra-bold);
        }

        h3{
            font-family: var(--main-extra-bold);
            background: linear-gradient(60deg, var(--blue) 15%, var(--aqua) 85%);
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        h5{
            margin-top: 10rem;
            background: linear-gradient(60deg, var(--blue) 10%, var(--aqua) 90%);
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            font-family: var(--main-regular);
        }
    }

    .active-img-container{
        width: 100%;
        margin: 0 auto;
        margin-top: 10rem;
    }

    .form{
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    .formButton{
        background: linear-gradient(60deg, var(--blue) 15%, var(--aqua) 85%);
        color: var(--white);
        border: none;
    }
}

`

export const MainHero = () => {
    return(
    <Container>
        <div className="slogan">
            <h1 className='gradient'>KEEPING HOMES CLEAN</h1>
            <h3>CONNECTING HOSTS <br/>AND CLEANERS</h3>
            <h5>Get notified when it launches</h5>
            <div className="form">
                <input className="input-custom" placeholder="email address"></input>
                <button type='submit' className='formButton'>Notify Me</button>
            </div>
        </div>
        <div className="active-img-container">
            <StaticImage src='../images/livingroom2.png' alt="host"/>
        </div>
    </Container>
    )
}