import React from "react";
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import * as IoIcons from "react-icons/io"
import * as BsIcons from "react-icons/bs"

export const  SideBarData = [
   
    {
        title:"Home",
        path:"/personal-website",
        icon:<AiIcons.AiFillHome />,
        className:"nav-text"
    },
    {
        title:"About Me",
        path:"/aboutMe",
        icon:<BsIcons.BsPeopleCircle />,
        className:"nav-text"
    },
    {
        title:"Contact",
        path:"/contact",
        icon:<AiIcons.AiOutlineMessage />,
        className:"nav-text"
    },
    {
        title:"Work Sample",
        path:"/workSample",
        icon:<IoIcons.IoMdCodeWorking />,
        className:"nav-text"
    },
]