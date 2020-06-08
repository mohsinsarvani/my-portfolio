import React from 'react'
import './Card.css'
import avatar from '../../assets/images/avatar2.png'
import Social from './../Social/Social'

const Card = () => {
    return (
        <div id="main">
            <div id="card">
                <div class="flip-card-container">
                    <div class="flip-card">
                        <div class="flip-card-front">
                            <img src={avatar} alt="Rick" />
                        </div>
                        <div class="flip-card-back">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco
                              <Social />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
