import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Button from '@material-ui/core/Button'
import code from '../../assets/images/back2.jpg'
import './Me.css'
import Divider from '@material-ui/core/Divider'


const Me = () => {
    return (
       
        <div id="main">
             <Divider />
            <section className="iam" >
              
                    <strong>
                        Just in case you don't understand, don't worry
                        I will explain.
                        <br></br> 
                        I build software basically I give a series of instructions
                        to a machine to perform a task such as you may be seeing this message on the screen
                        cool don't you think soo? :)
                   </strong>
                
                <Button  variant="outlined" color="primary" size="medium" >Hire Me</Button>
            </section >
            <Divider />
        </div>
        
    )
}

export default Me
