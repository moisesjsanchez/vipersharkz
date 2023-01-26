import React from 'react';
import AboutMe from './sections/aboutMe';
import './css/style.css'
import Background from './components/aboutMe/background';

class Moises extends React.Component {

    render() {
        return (
            <div className='aboutMeContainer'>
                <Background />
                <AboutMe />
            </div>
        )
    }
}


export default Moises;