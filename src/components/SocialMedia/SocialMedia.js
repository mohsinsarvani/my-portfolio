import React from 'react'

const SocialMedia = () => {

    const address = "South East,London";
    const country = "United Kindom";
    const phone = "+44 07927485295";
    const email = "Ricardovargasleslie@gmail.com";
    const name = "Ricardo Vargas";

    return (
        <div className="icons">
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
            <div className="labeled-icons">
                <span>{name}</span>
                <span className="icon fa-home" >{address}</span>
                <span className="icon fa-mobile">{phone}</span>
                <span className="icon fa-envelope-o">{email}</span>
                <span className="copyright"> © All rights are reserved | {new Date().getFullYear()} |</span>
                <span aria-label="love" role="img"> </span>
            </div>
        </div>
    )
}

export default SocialMedia
