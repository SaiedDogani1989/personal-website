import React from 'react';
import Css from "./img/css3.jpg"



function Skill() {
    return (
        <div> 
            <h3 className="mt-5 title-name">My Skills & Abilities</h3>
            <ul className="list">
                <li>HTML5 <span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span></li>
                <li>CSS3 <span class="fa fa-star checked "></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span></li>
                <li>Bootstrap <span class="fa fa-star checked"></span><span class="fa fa-star checked  "></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span></li>
                <li>JavaScript <span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star"></span></li>
                <li>React.js <span class="fa fa-star checked "></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star"></span></li>
                <li>Git <span class="fa fa-star checked "></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span></li>
                <li>Jquery <span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star"></span></li>
                <li>Node.js <span class="fa fa-star checked "></span><span class="fa fa-star checked"></span><span class="fa fa-star"></span><span class="fa fa-star"></span></li>
                <li>Express <span class="fa fa-star checked "></span><span class="fa fa-star checked"></span><span class="fa fa-star"></span><span class="fa fa-star"></span></li>
                <li>SQL and NO SQL <span class="fa fa-star checked"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span></li>
            </ul>
            <div className="image-hide">
                <img src={Css} alt="css" className="certificate-img"></img>
            </div>
        </div>
    )
}

export default Skill;