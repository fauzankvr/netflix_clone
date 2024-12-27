import React from 'react'
import "./Home.css"
import Navbar from "../../components/Navbar/Navbar"
import hero from "../../assets/heroBanner.jpg"
import TitleCards from "../../components/TitleCards/TitleCards"
import Footer from "../../components/Footer/Footer"


const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <div className='hero'>
        <img src={hero} alt="" className='hero-banner' />
        <div className="hero-texts-bnt">
          <div className="hero-head">
           <h1>Unlimited movies, TV shows and more</h1>
          <p>Starts at ₹149. Cancel at any time.</p>
          </div>
          <p className="hero-para">Ready to watch? Enter your email to create or restart your membership.</p>
        <form className="email-form" action="">
    <input className="email-box" type="email" placeholder="Email Address" />
    <button className="btn-start">
        Get Started
        <span className="arrow">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
            >
                <path
                    d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z"
                    fill="white"
                />
            </svg>
        </span>
    </button>
</form>

          </div>
      </div>
      <TitleCards title={"Trending Now"}/>
      <div className="more-cards">
        <TitleCards title={"Blockbuster Movies"} category={"top_rated"}/>
        <TitleCards title={"Only on Netflix"} category={"popular"}/>
        <TitleCards title={"Upcoming"} category={"upcoming"}/>
         <TitleCards title={"Top Pics For You"} category={"now_playing"}/>
      </div>

      <Footer />
    </div>
  )
}

export default Home