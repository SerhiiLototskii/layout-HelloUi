import React from 'react';
import UpdateImg from '../img/Update.jpg'
import './Update.css';

function Update() {
    return (
        <div className="update">
            <div className="update__container">
                <div className="update__row">
                    <div>
                        <div className="update__title">Update</div>
                        <div className="update__text">Develop for all your users' devices with just one <br/>
                            codebase. Add fast refresh, true native capabilities, <br/>
                            and your creativity, and you'll have the app your users<br/>
                            want in no time.<br/>
                        </div>
                        <div className="update__buttonMore">Learn more about spellon</div>

                    </div>
                    <div>
                        <img className="update__image" src={UpdateImg} alt=""/>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Update;
