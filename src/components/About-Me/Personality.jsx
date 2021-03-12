import React from 'react';
import CERTIFICATE from "./img/CERTIFICATE.jpeg";
import Html from "./img/html.jpg";



function Personality() {
    return (
        <div className="contentt">

            <h3 className="mt-5">About Me</h3>
            <p className="justify-paragraph">
                I am a hard working and dedicated front-end developer
                I like to write semantic, cross browser compatible code by hand that is re-useable,
                maintainable and easy to understand.
            </p>
            <p className="justify-paragraph">
                I am motivated, enthusiastic and well organized, with a keen eye for beautiful design,
                primarily based around user interfaces
            </p>
            <p className="justify-paragraph">
                The main areas of my expertise are HTML(5), CSS(3) and JavaScript (React).
                but I have intermediate knowledge of Node.js and APIs and a little knowledge
                about SQL and NO SQL
            </p>
            <p className="justify-paragraph">
                I use version control systems (GIT) to maintain my code,
                and I specialize in responsive web design (RWD).
             </p>
            <div className="image-hide">
                <img src={CERTIFICATE} alt="CERTIFICATE" className="certificate-img"></img>
            </div>
        </div>
    )
}
export default Personality;