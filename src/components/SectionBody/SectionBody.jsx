import React from 'react';
import './SectionBody.css';
 
function SectionBody() {
    return (
        <section className="home-main-section">
            <div className="img-wrapper">
                <div className="lady-image"></div>
            </div>
            <div className="call-to-action">
                <h1 className="title">Feel The Music</h1>
                <span className="subtitle">Stream over 20 thousand songs with one click</span>
                <a href="join.html" className="btn">Join Now</a>
            </div>
        </section>
    )
}

export default SectionBody;