import React from 'react';
import JavaScript from "./img/javaScript.jpg"



function Course() {
    return (
        <div>
            <h3 className="mt-5" >Related Coursework</h3>
            <ul>
                <li>HTML, CSS, J.S, Bootstrap, jQuery, React, Node.js, Express.js,
                 Git, SQL, NO SQL, APIs|Web Development Bootcamp | 200 Hours</li>
                <li>HTML CSS J.S | Jhon Hopkins University | Coursera </li>
            </ul>
            <div className="image-hide">
                <img src={JavaScript} alt="html" className="certificate-img" />
            </div>
        </div>
    )
}

export default Course;