import React from 'react';
// import SportNews from "../imge/sportNews.png"
// import newsLetter from "../imge/NewsLetter.png"
// import TodoApp from "../imge/TodoApp.png"
import Niktec from "../imge/niktec.jpeg"
import Adnetworks from "../imge/annetworks.jpeg"
import Pajooha from "../imge/pajooha.jpeg"
import "../style/workSmple.css"


function ExternalWeb() {
    return (

        <div>
            <h3 className="title-name">
                Website Example
            </h3>

            <div className="row mb-5">
                <div className="col-sm-4  center-link mt-5">
                    <a className="workSample-link"
                        href="https://www.niktec.ir/" target="_blank">
                        <img src={Niktec} />
                    </a>


                </div>
                <div className="col-sm-4  center-link mt-5">
                    <a className="workSample-link"
                        href="https://adnetworks.ir/" target="_blank">
                        <img src={Adnetworks} />
                    </a>
                </div>
                <div className="col-sm-4  center-link mt-5">
                    <h2>
                        <a className="workSample-link"
                            href="https://86.pajooha.ir/" target="_blank">
                            <img src={Pajooha} />

                        </a>
                    </h2>
                </div>
            </div>
        </div>
    )

}

export default ExternalWeb;