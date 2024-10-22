import React from 'react';
import PropTypes from 'prop-types';
//import './Button.css'; // Optional: Import your styles

const Button = ({ label, onClick, disabled, styleType }) => {
  return (
    <button
      className={`btn ${styleType}`}
      onClick={console.log('you clicked this lol')}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  styleType: PropTypes.string,
};

Button.defaultProps = {
  disabled: false,
  styleType: 'default', // You can have styles like 'primary', 'secondary', etc.
};

export default Button;
