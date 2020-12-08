import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Navbar extends Component {

    render() {
        const { handleBlur } = this.props

        return (<div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top text-center">
                <Link className="navbar-brand" to="/personal-website/"><i class="fas fa-home"></i></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation" handleBlur={handleBlur}

                >
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
                            <Link className="nav-link" to="/cv">CV</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>);
    }
    handleBlur = (e) => {
        // firefox onBlur issue workaround
        if (e.nativeEvent.explicitOriginalTarget &&
            e.nativeEvent.explicitOriginalTarget === e.nativeEvent.originalTarget) {
            return;
        }

        if (this.state.show) {
            setTimeout(() => {
                this.setState({ show: false });
            }, 200);
        }
    }
}

export default Navbar;




