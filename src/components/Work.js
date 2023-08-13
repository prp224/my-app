import React from 'react'
import Footer from './Footer'
import lehigh from './images/lehigh.JPG'

function work() {
    return (
        <div className='container'>
            <header className='App-header prof' id='work'>
                <h1>Work Experience</h1>
                    <div className='workEx'>
                        <ul>
                            <li className='list-item'>
                                <h4>
                                Customer Service Team Member | McDonald's | <br></br>[Jun - Aug 2022] Houston, TX
                                </h4>
                                <p>
                                As a Customer Service Team Member at McDonald's, I excelled in 
                                delivering exceptional service through efficient order management, adept food packaging, 
                                beverage preparation, and timely order delivery. Operating in fast-paced environments, I 
                                upheld quality standards while providing a positive dining experience for patrons.
                                </p>
                                </li>
                            <li className='list-item'>
                                <h4>
                                Undergraduate Researcher | University of Houston | <br></br>[Jun - Aug 2023] Houston, TX
                                </h4>
                                <p>
                                At the University of Houston, I contributed to pioneering research by developing an 
                                innovative method for recognizing carrying actions in Near-Infrared spectrum images. 
                                Employing advanced image processing techniques and pose annotations, I extracted and 
                                classified visual features, advancing image analysis and human pose recognition.
                                </p>
                            </li>
                        </ul>
                    </div>
                <div>

                </div>
            </header>
        </div>
    )
}

export default work
