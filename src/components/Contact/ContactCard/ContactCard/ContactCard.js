import React from 'react'
import './ContactCard.css'
import Social from "../ContactCard/ContactCard"
import avatar from './../../../../assets/images/avatar2.png'


const ContactCard = () => {
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
                               CONTACT CARD
                            </p>
                           {/* <Social></Social> */}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactCard
