import React from 'react';
import BuildImg from '../img/Build.jpg'
import './Build.css';

function Build() {
    return (
        <div className="build">
            <div className="container">
                <div className="build__row">
                    <div>
                        <img className="build__image" src={BuildImg} alt=""/>
                    </div>
                    <div className="build__body">
                        <div className="build__title">Build</div>
                        <div className="build__text">Develop for all your users' devices with just one <br/>
                            codebase. Add fast refresh, true native capabilities, <br/>
                            and your creativity, and you'll have the app your users<br/>
                            want in no time.<br/>
                        </div>
                        <div className="build__buttonMore">Learn more about spellon</div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Build;
