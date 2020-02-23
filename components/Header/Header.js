import './Header.css';

const Header = (props) => {
    const {
        className,
        ...rest
    } = props;

    return (
        <div
            className={className}
            {...rest}
        >
            <div className="header__left">
                <p>Home</p>
            </div>
            <div className="header__right">
                <p>About</p>
                <p>Contact</p>
            </div>
        </div>
    );
};

// <Header> <Button/> </Header>

Header.defaultProps = {
    className: 'header'
};

export default Header;