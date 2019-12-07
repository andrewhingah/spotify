import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import SectionBody from '../../components/SectionBody/SectionBody';
import './LandingPage.css';

class LandingPage extends React.Component{
    render() {
        return (
            <body className="container full-height-grow">
                <NavBar />
                <SectionBody />
            </body>
        )
    }
}

export default LandingPage;