import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Button from '@material-ui/core/Button'
import code from '../../assets/images/back2.jpg'
import './Me.css'


const Me = () => {
    return (
        <div id="main">
            
            <section className="iam" >
                <p>
                    <strong>
                        Just in case you don't understand, don't worry
                        I will explain.
                        <br></br> 
                        I build software basically I give a series of instructions
                        to a machine to perform a task such as you may be seeing this message on the screen
                        cool don't you think soo? :)
                   </strong>
                </p>
                <Button>Hire Me</Button>
            </section >
        </div>
    )
}

export default Me
