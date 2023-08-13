import React from 'react'
import Footer from './Footer'
import HobbieSlide from './HobbySlide.js'
import soccer1 from "./images/prabin_soccer1.jpg"
import soccer2 from "./images/prabin_soccer2.jpg"
import soccer3 from "./images/prabin_soccer3.jpg"

const Hobbies = () => {
    return (
        <div className='container'>
            <header className="App-header" id='hobbies'>
                <HobbieSlide />
                <h1>My Hobbies</h1>
                <h3>Piano</h3>
                <p>
                My voyage into the world of piano commenced during fifth-grade, equipped with an electronic keyboard,
                thoughtfully gifted by my parents, I embarked on formal lessons within my elementary school. While my 
                enthusiasm continued, the absence of piano instruction during my middle school years led to a temporary pause.
                The pandemic's arrival, however, rekindled my dedication, motivating me to re-engage with the instrument. 
                Guided by a friend's recommendation, I began with Yurima's beautiful piece "River Flows in You." Since then, 
                my repertoire has expanded to encompass several additional compositions, each representing a chapter of growth,
                enjoyment, and a continual quest for improvement. 
                </p>
                <iframe className="videos" src="https://youtube.com/embed/m8gjBHxuZYA?feature=share" allowFullScreen></iframe>
                <h3>Soccer</h3>
                <p>
                    My introduction to soccer unfolded around 2013/2014, coinciding with my brother's participation in practices 
                    for a Nepali soccer club situated in Houston. Together, we became pivotal members of the inaugural club, aptly 
                    named Dead Runner FC, embarking on a journey that encompassed active involvement in various tournaments. My soccer 
                    journey further evolved as I joined my high school's JV soccer team during my freshman year, a pivotal experience 
                    that significantly contributed to my skill enhancement. Embracing the role of Right Back, I played a pivotal part 
                    in the prime days of the Dead Runner Football Club, achieving a commendable second-place finish with my team in the 
                    Dashain Cup.
                </p>
                <div className="img-container">
                    <img className="tri-image" src={soccer1} />
                    <img className="tri-image" src={soccer2} />
                    <img className="tri-image" src={soccer3} />
                </div>
            </header>
            <Footer />
        </div>
    )
}

export default Hobbies
