import React from 'react'
import { Button } from './Button.js'
import  '/Users/mac/Desktop/react-tutorial/react-tutorial/react-website-yt-1/src/App.css'
 import '/Users/mac/Desktop/react-tutorial/react-tutorial/react-website-yt-1/src/Components/HeroSection.css'
 
function HeroSection() {
    return (
        <div className="hero-container">
            <video src="/Users/mac/Desktop/react-tutorial/react-tutorial/react-website-yt-1/src/videos/video-2.mp4" 
            autoPlay loop muted/>
            <h1> ADVENTURE AWAITS</h1>
            <p> What are you waiting for?</p>
            <div className="hero-btns">
                <Button className="btns" 
                buttonStyle="btn--outline"
                buttonSize="btn--large"
                >
                    GET STARTED
                </Button>
                <Button className="btns" 
                buttonStyle="btn--primary"
                buttonSize="btn--large"
                >
                    WATCH TRAILER <i className="far fa-play-circle"/>
                </Button>
              
            </div>
        </div>
    )
}

export default HeroSection
