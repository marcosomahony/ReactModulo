import React, { Component } from 'react'

const Intro = ({ message }) => {
    console.log(message);
    return (
        <p
            className="App-intro"
            dangerouslySetInnerHTML={{ __html: message }}
        ></p>
    )
}

export default Intro;
