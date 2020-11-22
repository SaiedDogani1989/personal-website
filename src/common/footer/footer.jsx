import React from 'react';
import { Link } from 'react-router-dom';
import "../footer/footer.css"
import "font-awesome/css/font-awesome.css"


const Footer = () => {
    return (
        <React.Fragment>
            <footer id="footer" class="container-fluid footer-container">
                <a className="footer-link" href="http://www.linkedin.com/in/saeiddogani">
                    <i className="fab fa-linkedin fa-2x"></i>
                </a>
                <a className="footer-link" href="https://github.com/SaiedDogani1989">
                    <i className="fab fa-github fa-2x"></i>
                </a>
                <a className="footer-link" href="https://www.instagram.com">
                    <i className="fab fa-instagram fa-2x"></i>
                </a>
                <hr />
                <p>© 2020 Saeid Dogani.</p>
            </footer>
        </React.Fragment>
    );
}

export default Footer;