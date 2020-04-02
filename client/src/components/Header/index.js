import React, { useState } from 'react';
import './Header.css';

const Header = (props) => {
    const {
        className,
        ...rest
    } = props;

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const Drawer = <div className="header__mobile__drawer">
        <div>
            <button
                className={mobileMenuOpen ? "open" : "close"}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >

                &#10005;
            </button>
        </div>
        <div className="header__mobile__drawer__first">
            <p>About</p>
        </div>
        <div>
            <p>Contact</p>
        </div>
    </div>;

    return (
        <div className={className}>
            <div className="header__left">
                <a href="/">
                    <p>OSU<span className="black_text">Reviews</span></p>
                </a>
            </div>
            <div className="header__right">
                <p>About</p>
                <p>Contact</p>
            </div>
            <div className="header__right__mobile">
                <button
                    className={mobileMenuOpen ? "open" : "close"}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    <svg width="42" height="32" viewBox="0 0 42 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line className="top_line" y1="2" x2="42" y2="2" stroke="black" strokeWidth="4" />
                        <line className="middle_line" y1="16" x2="42" y2="16" stroke="black" strokeWidth="4" />
                        <line className="bottom_line" y1="30" x2="42" y2="30" stroke="black" strokeWidth="4" />
                    </svg>
                </button>
                {mobileMenuOpen && Drawer}
            </div>
        </div>
    );
};

Header.defaultProps = {
    className: 'header'
};

export default Header;