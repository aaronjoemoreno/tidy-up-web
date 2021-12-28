import React, { useState } from 'react'
import styled from 'styled-components'
import { StaticImage } from "gatsby-plugin-image"

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background: #000;
    text-align: center;

    .formButton{
        width: 35%;
        height: 50px;
        font-family: var(--main-regular);
        background: linear-gradient(60deg, var(--blue) 15%, var(--aqua) 85%);
        color: var(--white);
        border: none;
    }

    .horizontal-card{
        position: absolute;
        margin-top: -200px;
        left: 0;
        right: 0;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        font-family: var(--main-thin);
        padding: 2rem;
        box-shadow:
        0 2.8px 2.2px rgba(0, 0, 0, 0.034),
        0 6.7px 5.3px rgba(0, 0, 0, 0.048),
        0 12.5px 10px rgba(0, 0, 0, 0.06),
        0 22.3px 17.9px rgba(0, 0, 0, 0.072),
        0 41.8px 33.4px rgba(0, 0, 0, 0.086),
        0 100px 80px rgba(0, 0, 0, 0.12)
    }


.switch {
  position: relative;
  display: inline-block;
  width: 300px;
  height: 70px;
}

.switch input {display:none;}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--aqua);
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 60px;
  width: 60px;
  left: 5px;
  bottom: 5px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: var(--blue);
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(230px);
  -ms-transform: translateX(230px);
  transform: translateX(230px);
}

.on
{
  display: none;
}

.on, .off
{
  color: white;
  position: absolute;
  transform: translate(-50%,-50%);
  top: 50%;
  left: 50%;
  font-size: 2rem;
  font-family: Verdana, sans-serif;
}

input:checked+ .slider .on{
    display: block;
}

input:checked + .slider .off{
    display: none;
}

.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;}
`

const Cleaner = styled.div`
    width: 100%;
    margin-top: 2rem;
    margin-bottom: 2rem;
    text-align: center;

    input{
        display: block;
        height: 30px;
        width: 30%;
        margin: 0 auto;
        margin-top: 1rem;
    }
`

const Host = styled.div`
    width: 100%;
    margin-top: 2rem;
    margin-bottom: 2rem;
    text-align: center;
    position: relative;

    .img-container{
        width: 150px;
        left: 200px;
        top: 0;
        position: absolute;
    }

    input{
        display: block;
        height: 30px;
        width: 30%;
        margin: 0 auto;
        margin-top: 1rem;
    }
`

export const SignUp = () => {
    const[isHost, setIsHost] = useState(false)

    return(
        <Container>
            <div className="horizontal-card">
                <h3>sign up to be a...</h3>
                <label className="switch">
                    <input type="checkbox" id="togBtn" onChange={(e) => setIsHost(e.target.checked)}/>
                    <div className="slider round">
                        <span className="on">HOST</span>
                        <span className="off">CLEANER</span>
                    </div>
                </label>

                {isHost &&
                    <Host>
                        <h5>Host Information:</h5>
                        {/* <div className="img-container">
                            <StaticImage src='../images/house.png' alt="host"/>
                        </div> */}
                        <input type="text" placeholder="name" className='input-custom'/>
                        <input type="text" placeholder="email" className='input-custom'/>
                        <input type="tel" placeholder="phone"  className='input-custom'/>
                    </Host>
                }
                {!isHost &&
                    <Cleaner>
                        <h5>Cleaner Information:</h5>
                        <input type="text" placeholder="name" className='input-custom'/>
                        <input type="text" placeholder="email" className='input-custom'/>
                        <input type="tel" placeholder="phone" className='input-custom'/>
                    </Cleaner>
                }

                <button type='submit' className='formButton'>Sign Up</button>

            </div>
        </Container>
    )
}