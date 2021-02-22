import React from 'react';
import Css from "./img/css3.jpg"



function Skill() {
    return (
        <div>
            <h3 className="mt-5">My Skills & Abilities</h3>
            <ul>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>Bootstrap</li>
                <li>JavaScript</li>
                <li>Jquery</li>
                <li>React.js</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>SQL and NO SQL</li>
                <li>Git</li>
            </ul>
            <div className="image-hide">
                <img src={Css} alt="css" className="certificate-img"></img>
            </div>
        </div>
    )
}

export default Skill;