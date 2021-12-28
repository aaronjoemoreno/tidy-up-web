import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"

const Container = styled.div`
    width: 100%;
    max-height: 10vh;
    border-bottom: 1px solid var(--aqua);
    display: grid;
    grid-template-columns: 1fr 1fr;

    .logo{
        width: 200px;

        img{
            width: 100%;
        }
    }

    .nav-itmes{
        display: flex;
        justify-content: center;

        h5{
            font-family: var(--main-thin);
            color: var(--aqua);
        }

        a{
            margin: 3rem 2rem 0rem 2rem;
        }
    }

    /*Meqia Queries*/

`

export const Navigation = () => {
    return(
        <Container>
            <div className="logo">
                <Link to="/">
                    <StaticImage src='../../images/tidyup.png' alt="tidy up"/>
                </Link>
            </div>
            <div className="nav-itmes">
                <Link to="#about">
                    <h5>about</h5>
                </Link>
                <Link to="#faqs">
                    <h5>faqs</h5>
                </Link>
                <Link to="#sign-up">
                    <h5>sign up</h5>
                </Link>
            </div>
        </Container>
    )
}