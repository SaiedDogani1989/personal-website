import React from 'react';
import SportNews from "../imge/sportNews.png"
import newsLetter from "../imge/NewsLetter.png"
import TodoApp from "../imge/TodoApp.png"
import "../style/workSmple.css"


function ExternalWeb() {
    return (

        <div>
            <h3 className="title-name">
            Website Example
            </h3>

            <div className="row">
                <div className="col-sm-4  center-link mt-5">
                    <a className="workSample-link"
                        href="https://shrouded-dusk-06186.herokuapp.com/" target="_blank">
                        <img
                            className="workSample-image"
                            src={SportNews} />
                    </a>
                </div>
                <div className="col-sm-4    center-link mt-5">
                    <a className="workSample-link"
                        href="https://aqueous-waters-07302.herokuapp.com/" target="_blank">
                        <img
                            className="workSample-image"
                            src={newsLetter} />
                    </a>
                </div>
                <div className=" col-sm-4   center-link mt-5">
                    <a className="workSample-link"
                        href="https://aqueous-waters-07302.herokuapp.com/" target="_blank">
                        <img
                            className="workSample-image"
                            src={TodoApp} />
                    </a>
                </div>
            </div>
        </div>
    )

}

export default ExternalWeb;