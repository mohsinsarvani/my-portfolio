import React from 'react'
import SocialMedia from '../SocialMedia/SocialMedia'
import './Footer.css'

const Footer = () => {

    const address = "South East,London";
    const country = "United Kindom";
    const phone = "+44 07927485295";
    const email = "Ricardovargasleslie@gmail.com";
    const name = "Ricardo Vargas";

    return (
        <footer id="footer">
            <div>
                <SocialMedia></SocialMedia>
            </div>
            <div className="personal">
               {/*  <span>{address}|</span>
                <span>{country}|</span>
                <span>{phone}|</span>
                <span>{email}|</span> */}
            </div>
        </footer>
    )
}

export default Footer
