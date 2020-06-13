import React from 'react'
import './ContactCard.css'



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
                           
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactCard
