import React from 'react'
import './SocialMedia.css'

const SocialMedia = () => {

    const address = "South East,London";
    const country = "United Kindom";
    const phone = "+44 07927485295";
    const email = "Ricardovargasleslie@gmail.com";
    const name = "Ricardo Vargas";

    return (
        <div id="media">
            <ul>
                <li>
                    <a href="https://twitter.com/ricki_me" className="icon fa-twitter">
                        <span className="label">Twitter</span>
                    </a>
                </li>
                <li>
                    <a href="https://linkedin.com/in/ricardo-josé-vargas-leslie-235747143" className="fa fa-linkedin">
                        <span className="label">Linkedin</span>
                    </a>
                </li>
                <li>
                    <a href="https://stackoverflow.com/users/4814583/ricki" className="fa-stack-overflow">
                        <span className="label">Stack Overflow</span>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/RicardoVargasLeslie" className="icon fa-github">
                        <span className="label">Github</span>
                    </a>
                </li>

                <li>
                    <a href="#" className="icon fa-envelope-o">
                        <span className="label">Email</span>
                    </a>
                </li>
            </ul>
            <ul className="labeled-icons">
                <li>{name}</li>
                <li className="icon fa-home" >{address}</li>
                <li className="icon fa-mobile">{phone}</li>
                <li className="icon fa-envelope-o">{email}</li>
                <li className="copyright"> © All rights are reserved | {new Date().getFullYear()} |</li>
                <li aria-label="love" role="img"> </li>
            </ul>
        </div>
    )
}

export default SocialMedia
