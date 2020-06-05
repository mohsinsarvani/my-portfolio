import React from 'react'

const SocialMedia = () => {

    const address = "South East,London";
    const country = "United Kindom";
    const phone = "+44 07927485295";
    const email = "Ricardovargasleslie@gmail.com";
    const name = "Ricardo Vargas";

    return (
        <div>
            <ul>
                <li>
                    <a href="https://twitter.com/ricki_me" className="icon fa-twitter">
                        <span>Twitter</span>
                    </a>
                </li>
                <li>
                    <a href="https://linkedin.com/in/ricardo-josé-vargas-leslie-235747143" className="fa fa-linkedin">
                        <span>Linkedin</span>
                    </a>
                </li>
                <li>
                    <a href="https://stackoverflow.com/users/4814583/ricki" className="fa-stack-overflow">
                        <span>Stack Overflow</span>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/RicardoVargasLeslie" className="icon fa-github">
                        <span>Github</span>
                    </a>
                </li>

                <li>
                    <a href="#" className="icon fa-envelope-o">
                        <span>Email</span>
                    </a>
                </li>
            </ul>

            <span>{name}</span>
            <span className="icon fa-home" >{address}</span>
            <span>{country}</span>
            <span className="icon fa-mobile">{phone}</span>
            <span className="icon fa-envelope-o">{email}</span>
            <span> © All rights are reserved | {new Date().getFullYear()} |</span>
            <span aria-label="love" role="img"> </span>
        </div>
    )
}

export default SocialMedia
