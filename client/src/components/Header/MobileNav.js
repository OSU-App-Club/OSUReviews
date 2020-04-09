import React from 'react';
import './MobileNav.css';

const MobileNav = (props) => {
    const { className, setMobileNavVis } = props;
    return (
        <div className={className}>
            <div className="exit__button">
                <span onClick={() => setMobileNavVis(false)}>
                    <svg width="36" height="36" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="38.3627" width="52.9632" height="10.5926" transform="rotate(-45 0 38.3627)" fill="black" />
                        <rect x="8.54939" y="0.912079" width="52.9632" height="10.5926" transform="rotate(45 8.54939 0.912079)" fill="black" />
                    </svg>
                </span>
            </div>
            <div>
                <a href="/" onClick={() => setMobileNavVis(false)}>
                    <h2>Home</h2>
                </a>
            </div>
            <div>
                <a href="/About" onClick={() => setMobileNavVis(false)}>
                    <h2>About</h2>
                </a>
            </div>
            <div>
                <a href="/Contact" onClick={() => setMobileNavVis(false)}>
                    <h2>Contact</h2>
                </a>
            </div>
        </div>
    );
};

MobileNav.defaultProps = {
    className: 'mobile_nav'
};

export default MobileNav;