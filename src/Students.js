import React, { Component } from 'react';

class Students extends Component {
    constructor(props) {
        super(props);
        this.state = {
            studentList: [{ nombre: 'Davy', apellido: 'Jones', numeroCuenta: '12365478' }, { nombre: 'Larry', apellido: 'Stone', numeroCuenta: '123798456' }, { nombre: 'Matthew', apellido: 'Perry', numeroCuenta: '456789323' }]
        };
    }

    render() {
        return (
            <ul>
                <li>{this.state.studentList[0].numeroCuenta} - {this.state.studentList[0].nombre} - {this.state.studentList[0].apellido}</li><br></br>
                <li>{this.state.studentList[1].numeroCuenta} - {this.state.studentList[1].nombre} - {this.state.studentList[1].apellido}</li><br></br>
                <li>{this.state.studentList[2].numeroCuenta} - {this.state.studentList[2].nombre} - {this.state.studentList[2].apellido}</li><br></br>
            </ul>
        );
    }
}

export default Students;