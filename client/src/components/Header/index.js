import React, { useState } from 'react';
import './Header.css';
import MobileNav from './MobileNav.js';

const Header = (props) => {

    const [mobileNavVis, setMobileNavVis] = useState(false);

    return (
        <React.Fragment>
            <div className="header">
                <div className="header__left">
                    <a href="/">
                        <h2>OSU<span>Reviews</span></h2>
                    </a>
                </div>
                <div className="header__right">
                    <span className="desktop">
                        <a href="/about">
                            <h2><span>About</span></h2>
                        </a>
                    </span>
                    <span className="desktop">
                        <a href="/contact">
                            <h2><span>Contact</span></h2>
                        </a>
                    </span>
                    <span className="mobile" onClick={() => setMobileNavVis(!mobileNavVis)}>
                        <svg viewBox="0 0 100 80" width="40" height="40">
                            <rect width="100" height="20"></rect>
                            <rect y="30" width="100" height="20"></rect>
                            <rect y="60" width="100" height="20"></rect>
                        </svg>
                    </span>
                </div>
            </div>
            {mobileNavVis && <div className="mobile__drawer"><MobileNav setMobileNavVis={setMobileNavVis} /></div>}
        </React.Fragment>
    )
}

export default Header;