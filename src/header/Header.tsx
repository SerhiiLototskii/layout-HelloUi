import React from 'react';
import './Header.css';

function Header() {
    return (
        <header className="header">
            <div className="header__container">
                <div>
                    <div className="header__row">
                        <div className="header__title">
                            HelloUI
                        </div>
                        <ul className="header__buttons">
                            <li>Docs</li>
                            <li>Tools</li>
                            <li>Freatures</li>
                            <li>Pricing</li>
                            <li>Jobs</li>
                        </ul>
                            <div className="header__signIn">Sign in</div>
                            <button className="header__tryForFree">Try for Free</button>
                    </div>
                </div>

            </div>
        </header>
    );
}

export default Header;
