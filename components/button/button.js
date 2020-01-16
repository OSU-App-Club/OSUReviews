import React from 'react';
//import './button.css';

const Button = (props) => {
  const {
    className,
    children,
    ...rest
  } = props;

  return (
    <button
      className={className}
      {...rest}
    >
      hey
    </button>
  );
};

Button.defaultProps = {
  className: 'button'
};

export default Button;
