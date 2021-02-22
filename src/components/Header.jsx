import React from 'react';
import { Zoom } from "@material-ui/core";
import slogan from "../Image/You_can_affect.png"



function Header() {
    return (
        <div id="welcome-screen">
            <video autoPlay muted className="video">
                <source src="https://video-public.canva.com/VAD7AeKuqu0/v/87285e54c2.mp4" type="video/webm" />
                <source src="https://video-public.canva.com/VAD7AeKuqu0/v/87285e54c2.mp4" typr="video/mp4" />
            </video>
            <div className="mask">&nbsp;</div>
            <div className="content">
                <div className="right">
                    <Zoom in={true}>
                        <div className="centered">
                                <img className="slogan" src={slogan} alt="slo" />
                        </div>
                    </Zoom>
                </div>
            </div>
        </div>
    )
}

export default Header;