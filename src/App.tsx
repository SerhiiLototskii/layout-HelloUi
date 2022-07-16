import React from 'react';
import './App.css';
import Footer from "./footer/Footer";
import Develop from "./develop/Develop";
import Build from "./build/Build";
import Update from "./update/Update";
import Header from "./header/Header";

function App() {
    return (
        <div className="wrapper">
            <div className="content">
                <Header/>
            </div>
                <div className="content">
                    <Develop/>
                </div>
                <div className="content">
                    <Build/>
                </div>
                <div className="content">
                    <Update/>
                </div>
            <Footer/>
        </div>
    );
}

export default App;
