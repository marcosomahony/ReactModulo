import React from 'react'

class Input extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            inputValue: ''
        }
    }

    onValueChange = e => { // e es el elemento sobre el cual se esta produciendo un evento, en este caso el input. Igual que un query selector
        let value = e.target.value
        const { onChange, type, name } = this.props
        onChange(name, value);
        
        this.setState({inputValue: value})
    }

    render() {
        const { inputValue } = this.state

        return (
            <input type={this.props.type} onChange={this.onValueChange} value={inputValue} />
        )
    }
}

export default Input;