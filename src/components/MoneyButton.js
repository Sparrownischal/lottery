import React from 'react';

function MoneyButton({ value, onAssign, disabled }) {
  const handleClick = () => {
    onAssign(value);
  };

  return (
    <button className='money-button' onClick={handleClick} disabled={disabled}>${value}</button>
  );
}

export default MoneyButton;
