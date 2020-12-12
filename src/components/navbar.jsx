import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Navbar extends Component {

    render() {

        return (<div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-center">
                <Link className="navbar-brand" to="/personal-website/"><i class="fas fa-home"></i></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/aboutMe">About Me</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="../contact/contact">Contact Me</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/workSample">Work sample</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>);
    }
}

export default Navbar;




