import React, { useState } from "react"
import { Link } from "react-router-dom"
import { SideBarData } from "./sidebarData"
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import { IconContext } from "react-icons"
import "./style.css"


function SecondNav() {

    const [sidebar, SetSidebar] = useState(false);

    const showSidebar = () => {
        SetSidebar(!sidebar)
    }

    return (

        <div className="secondNav">
            <IconContext.Provider value={{color:"#fff"}}>
                <div className="navbar">
                    <Link to="#" className="menu-bars">
                        <FaIcons.FaBars onClick={showSidebar} />
                    </Link>
                </div>
                <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
                    <ul className="nav-menu-items" onClick={showSidebar}>
                        <li className="navbar-toggle">
                            <Link to="#" className="menu-bars">
                                <AiIcons.AiOutlineClose />
                            </Link>
                        </li>
                        {SideBarData.map((item, index) => {
                            return (
                                <li className={item.className} key={index} >
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>

                </nav>
            </IconContext.Provider>
        </div>

    )
}


export default SecondNav;