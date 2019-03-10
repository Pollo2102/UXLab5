import React, { Component } from 'react';

class Classes extends Component {
    constructor(props){
        super(props);
        this.state = {
            classesList: [{nombre: 'Organización de Computadoras', codigoClase: 'CC 512'}, {nombre: 'Experiencia de Usuario', codigoClase: 'CC 789'}]
        };
    }

    render() {
        return (
            <ul>
            <li>{this.state.classesList[0].codigoClase} - {this.state.classesList[0].nombre}</li><br></br>
            <li>{this.state.classesList[1].codigoClase} - {this.state.classesList[1].nombre}</li><br></br>
            </ul>
        );
    }
}

export default Classes;