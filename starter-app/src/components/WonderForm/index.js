import React from 'react'
import PropTypes from 'prop-types'

import Input from './components/Input'

const WonderForm = props => {
    return (
        <div className="wonder-form">
            <p>Nombre</p>
            <Input type="text" name="username" onChange={props.onInputChange} />
            <p>Apellido</p>
            <Input type="text" name="apellido" onChange={props.onInputChange} />
            <p>Texto</p>
            <Input type="text" name="text" onChange={props.onInputChange} />
            <p>Edad</p>
            <Input type="number" name="age" onChange={props.onInputChange} />
        </div>
    )
}

export default WonderForm

WonderForm.propTypes = {
    // onUsernameChange: PropTypes.func.isRequired,
    onInputChange: PropTypes.func.isRequired,
}