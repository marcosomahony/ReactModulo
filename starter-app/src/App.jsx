import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Intro from './components/Intro'
import WonderForm from './components/WonderForm'

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: 'Marcos',
            apellido: 'OMahony',
            text: 'cosa',
            age: '21'
        }
    }

    onUsernameChange = username => {
        this.setState({ username })
    }

    onInputChange = (key, value) => {
        this.setState({ [key]: value }) // le estamos diciendo que el valor dentro de [] nos lo ponga como indice y el otro vaor como variable    
    }

    isOld = () => {
        const { age } = this.state
        return age > 28
    }

    render() {
        const { username, apellido, text, age } = this.state
        const message = `Hi ${username} ${apellido}! Age: ${age}. Text: ${text}.`

        return (
            <div className="App">
                <Header logo={logo} />
                <Intro message={message} />
                { this.isOld() && <p>Eres viejo</p> }
                <WonderForm
                    //onUsernameChange={this.onUsernameChange}
                    onInputChange={this.onInputChange}
                />
            </div> 
        );
    }
}

export default App;
