import React, {Component} from 'react'
import propTypes from 'prop-types'
import {useState, useEffect} from 'react'
import profile from './images/_SelfPortraits00775.jpg'
import Footer from './Footer'

const About = (props) => {


    return (
        <div className="container">
            <header className="App-header" id='about'>
                <img className="profile" src={profile} alt="Profile-pic" />
                <h2>Hi, My name is Prabin Panta!</h2>
                <body className='body'>
                    <h3>Bio:</h3>
                    <p>
                    I am a senior at Lehigh University, majoring in Computer Engineering with a minor in Data Science. 
                    Originally from Nepal and currently residing in Houston, I bring a global perspective to my academic
                     pursuits. My passion for technology has been a driving force since youth, and I'm dedicated to 
                     translating it into a meaningful career.
                     </p>
                     <p>
                     Beyond academics, I enjoy piano, soccer, and quality 
                     time with friends. My goal is to contribute to the tech industry by leveraging my education and 
                     enthusiasm for software engineering and machine learning. I aspire to be at the forefront of 
                     innovation, continuously expanding my knowledge in this ever-evolving field.
                    </p>
                    <h3> <br />
                        Goals:
                    </h3>
                    <p>
                    As a dedicated software engineer with a passion for machine learning, my objective is to 
                    contribute my skills and expertise to a dynamic team, creating innovative solutions that 
                    leverage cutting-edge technologies. With a strong foundation in software development and a 
                    keen interest in machine learning algorithms, I am committed to driving advancements in 
                    AI-driven applications while continuously expanding my knowledge in this rapidly evolving field.
                    </p>
                </body>
            </header>
            <body>

            </body>
        </div>
    )
}



export default About