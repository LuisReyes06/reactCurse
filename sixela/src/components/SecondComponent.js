/*Class component*/

import React, { Component } from 'react';

class Saludos extends Component{
    render(){
        return(
            <h1>Saludos {this.props.name}</h1>
        )
    }
}

export default Saludos;