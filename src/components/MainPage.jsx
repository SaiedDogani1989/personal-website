import React from "react";
import Navbar from "./NavBar";
import Content from "./Google";
import Note from "./Note";
import Footer from "./Footer";
import notes from "../sections";
import Header from "./Header";
import "../Styles/main-page.css"
import SecondNav from "./Navbar/SecondNavabar";




function MainPage() {

    return (
        <React.Fragment>
            <div id="frontPage">
                <Header />
                <Content />
                {notes.map((e) => {
                    return (<Note
                        key={e.key}
                        heading={e.header}
                        firstParagraph={e.content1}
                        secondParagraph={e.content2}
                        image={e.img}
                    />)
                })}
            </div>
        </React.Fragment>
    )
}

export default MainPage;