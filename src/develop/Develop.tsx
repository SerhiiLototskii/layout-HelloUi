import React from 'react';
import DevelopBlock from '../img/DevelopBlock.png'
import './Develop.css';

function Develop() {
    return (
        <div className="develop">
            <div className="container">
                <div className="develop__row">
                    <div className="develop__body">
                        <div className="develop__title">Develop</div>
                        <div className="develop__text">Develop for all your users' devices with just one <br/>
                            codebase. Add fast refresh, true native capabilities, <br/>
                            and your creativity, and you'll have the app your users<br/>
                            want in no time.<br/>
                        </div>
                        <div className="develop__buttonMore">Learn more about spellon</div>

                    </div>
                    <div>
                        <img className="develop__image" src={DevelopBlock} alt=""/>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Develop;
