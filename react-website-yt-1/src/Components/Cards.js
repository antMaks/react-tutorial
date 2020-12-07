import React from 'react'
import CardItem from './CardItem'
import '/Users/mac/Desktop/react-tutorial/react-tutorial/react-website-yt-1/src/Components/Cards.css'

function Cards() {
    return (
        <div className="cards">
            <h1>Check out these EPIC Destinations!</h1>
            <div className="cards__container">
                <div className="card__wrapper">
                    <ul className="cards__items">
                        <CardItem
                        src="/Users/mac/Desktop/react-tutorial/react-tutorial/react-website-yt-1/src/images/img-9.jpg"
                        text="Explore the hidden waterfall deep
                        inside the Amazon Jungle"
                        label="Adventure"
                        path="/services"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
