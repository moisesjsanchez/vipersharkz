import React from 'react';
import './Ata.css';

const PROFILE_LINK = "https://d1vyza13emfewt.cloudfront.net/profile.jpeg";

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
                <div className="main">
                    <h1>My name is Ata Ahmad</h1>
                </div>
                <div className="main">
                    <img className="main-phot" src={PROFILE_LINK} alt="Me" />
                </div>
                <div className="bio">
                    I have been on this team since the beginning and have loved it for all it's moments of triumph and learning.<br/><br/>
                    My responsibilities include:<br/>
                    - Office Hours<br/>
                    - Product/Feature Release QA<br/>
                    - Integrations Platform Testing<br/>
                    - Integrations Platform Automation<br/>
                    <strong>- Being a postitive and supportive teammate to everyone</strong><br/>
                </div>
                <h2 className="main">
                    I've been a Vipershark for {this.state.workDays} days and counting!
                </h2>
            </div>
        )
    }
}


export default Ata;