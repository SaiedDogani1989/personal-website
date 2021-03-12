import React from 'react';
import Logo from "../Image/logo.png"
import Navigation from "./nav"
import navbar from "../navbar"
import "../Styles/navbar.css"


function Navbar() {
    return (
        <div className="firsNavbar">
            <nav id="navbar">
                <div className="navBg">&nbsp;</div>
                <div className="main">
                    <div className="logo">
                        <img src={Logo} alt="Logo" />
                    </div>
                    <div className="nav">
                        <div className="items">
{/* nav section  */}
                            {navbar.map((nav) => {
                                return <Navigation
                                    className={nav.className}
                                    key={nav.id}
                                    label={nav.label}
                                    path={nav.path}

                                />
                            })}
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;