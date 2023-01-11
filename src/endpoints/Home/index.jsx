import React from 'react';
import '../../App.css';
import logo from '../../logo.svg';

class Home extends React.Component {

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>Welcome to the ViperSharkz page</h1>
                    <h3>currently under construction...</h3>
                    <img src={logo} className="App-logo" alt="logo" />
                </header>
            </div>
        )
    }
};

export default Home;