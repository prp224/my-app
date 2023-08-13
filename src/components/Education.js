import React from 'react'
import Footer from './Footer'
import lehigh from './images/lehigh.JPG'

function work() {
    return (
        <div className='container'>
            <header className='App-header prof' id='education'>
            <img style={{ width:'40%'}}  src={lehigh}></img>
                <h1>Education</h1>
                <div className='education'>
                    <div className='college'>
                        <h3>Lehigh University</h3>
                            <ul>
                                <li>2020-2024</li>
                                <li>B.S Computer Engineering</li>
                                <li>minors: Data Science, Electrical Engineering</li>
                                <li>GPA: 3.57</li>
                            </ul>
                        </div>
                </div>
                <h1>Skills</h1>
                <div className='skills'>
                    <ul>
                        <li>
                            Programming: Java, Javascript, Python, C/C++, Matlab, Verilog
                        </li>
                        <li>
                            Technology : React JS, Node JS, Flutter, Spark, Tensorflow, PSpice
                        </li>
                        <li>
                            Hardware Knowledge: Microcontroller, FPGA, Signal and Circuit analysis,<br /> 
                            Combinational and  Sequential circuits, Soldering, Oscilloscope, Function generator
                        </li>
                    </ul>
                </div>
            </header>
        </div>
    )
}

export default work
