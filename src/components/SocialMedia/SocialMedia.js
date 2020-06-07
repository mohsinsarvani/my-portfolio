import React from 'react'
import './SocialMedia.css'
import { SocialIcon } from 'react-social-icons';
const SocialMedia = () => {

    const address = "South East,London";
    const country = "United Kindom";
    const phone = "+44 07927485295";
    const email = "Ricardovargasleslie@gmail.com";
    const name = "Ricardo Vargas";

    return (
        <div id="media">
            <ul className="icons">

                <li><SocialIcon url="" network="github" bgColor="#000000" style={{ height: 50, width: 50 }} /></li>
                <li><SocialIcon url="http://linkedin.com/in/jaketrent" style={{ height: 50, width: 50 }} /></li>
                <li><SocialIcon url="" network="twitter" bgColor="#49a1eb" style={{ height: 50, width: 50 }} /></li>
            </ul>
        </div>

    )
}

export default SocialMedia
