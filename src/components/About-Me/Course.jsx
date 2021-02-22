import React from 'react';
import JavaScript from "./img/javaScript.jpg"



function Course() {
    return (
        <div>
            <h3 className="mt-5" >Related Coursework</h3>
            <ul>
                <li>The Complete 2020 Web Development Bootcamp | 53.5 Hours | Dr. Angela Yu| Udemy | 53.5 Hours |Fall 2020</li>
                <li>HTML, CSS, JavaScript | 6 Hours | John Hopkins University| Yaakov Chaikin| Coursera | Fall 2020</li>
                <li>React.js | 12 Hours | Mosh Hamedani| CodeWithMosh | Summer 2020</li>
                <li>JavaScript| 6.5 Hours| Mosh Hamedani| CodeWithMosh| Spring 2020</li>
                <li>JavaScript| 14.5 Hours| Iman Madaeni| Toplearn| Winter 2020</li>
                <li>Bootstrap 4| 14 Hours| Iman Madaeni| Toplearn|Winter 2020</li>
                <li>HTML, CSS| 19.5 Hours| Iman Madaeni| Toplearn| Fall 2019</li>
            </ul>
            <div className="image-hide">
                <img src={JavaScript} alt="html" className="certificate-img" />
            </div>
        </div>
    )
}

export default Course;