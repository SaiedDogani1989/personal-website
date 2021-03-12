import React from 'react';
import Html from "./img/html.jpg"



function Experience() {
    return (
        <div >
            <h3 className="mt-5">Work Experience</h3>
            <ul>
                <li className="font-weight">FrontEnd Developer| Amoot Company| Apr 2018-Dec 2020| Mashhad, Iran</li>

                <li className="font-weight">Web Designer | Form-Sazeyeh-Deniz Company| 2016-2018| Mashhad,Iran</li>
            </ul>
            <div className="image-hide">
                <img src={Html} alt="html" className="certificate-img" />
            </div>
        </div>
    )
}

export default Experience;