import React from 'react'
import TextField from '@material-ui/core/TextField'
import TextareaAutosize from '@material-ui/core/TextareaAutosize'
import Icon from '@material-ui/core/Icon'
import Tooltip from '@material-ui/core/Tooltip'
import Button from '@material-ui/core/Button'
import './Contact.css'



const Contact = () => {

    return (
        <section className="row uniform 50%">

            <form noValidate autoComplete="off">
                <Tooltip title="Name" arrow>
                    <TextField id="outlined-size-normal" label="Name" variant="outlined" />
                </Tooltip>

                <Tooltip title="E-Mail" arrow>
                    <TextField id="outlined-size-normal" label="E-Mail" variant="outlined" />
                </Tooltip>
                <TextareaAutosize aria-label="minimum height" rowsMin={3} placeholder="Minimum 3 rows" />
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    endIcon={<Icon>send</Icon>}
                />
            </form>
        </section >
    )
}

export default Contact
