import React from 'react';
import PropTypes from 'prop-types';
//import './Button.css'; // Optional: Import your styles

const Button = ({ label, onClick, disabled, styleType, onDragStart }) => {
  return (
    <button
      className={`btn ${styleType}`}
      onClick={() => clicked()}
      disabled={disabled}
      onDragStart= {()=> dragging()}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.string,
  disabled: PropTypes.bool,
  styleType: PropTypes.string,
  onDragStart: PropTypes.func.isRequired
};

Button.defaultProps = {
  disabled: false,
  styleType: 'default', // You can have styles like 'primary', 'secondary', etc.
};

function clicked(){
  console.log('you clicked this')
}

function dragging(){
  console.log('You are dragging this thing')
}

export default Button;
