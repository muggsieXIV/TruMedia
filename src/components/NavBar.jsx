import React from 'react';

import BenWalkerResume from '../media/BenWalkerResume.pdf'; 
import IKMTestResults from '../media/IKMTestResults.pdf';
const NavBar = () => {


    return (
        <nav className="navbar navbar-inverse">
            <div className="container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand" href="#">TruMedia</a>
                </div>
                <ul className="nav navbar-nav">
                    <li><a href={BenWalkerResume} target="blank">Resume</a></li>
                    <li><a href={IKMTestResults} target="blank">IKM Test Results</a></li>
                    <li className="dropdown">
                        <a className="dropdown-toggle" data-toggle="dropdown" href="#">Author Info
                        <span className="caret"></span></a>
                        <ul className="dropdown-menu">
                            <li><a href="https://github.com/muggsieXIV" target="blank">GitHub</a></li>
                            <li><a href="https://www.linkedin.com/in/benwillwalk" target="blank">LinkedIn</a></li>
                            <li><a href="mailto:benwillwalk@gmail.com" target="blank">Email</a></li>
                            <li><a href="tel:9523564014">+1 (952) 356-4014</a></li>
                            <li><a href="https://muggsiexiv.github.io/HoustonRockets/">Project: Houston Rockets Box Score</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;