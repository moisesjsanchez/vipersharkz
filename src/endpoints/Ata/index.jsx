import React from 'react';
import './Ata.css';

class Ata extends React.Component {

    constructor(props) {
        super(props);
        const today = new Date();
        const startDate = new Date("2020-03-23");
        const diffTime = Math.abs(today - startDate);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        this.state = {
            workDays: diffDays
        }
    }

    render() {
        return (
            <div>
                <div id="main">
                    <h1>My name is Ata Ahmad</h1>
                </div>
                <h3 id="header">
                    I've been a Vipershark for {this.state.workDays} days and counting!
                </h3>
            </div>
        )
    }
}


export default Ata;