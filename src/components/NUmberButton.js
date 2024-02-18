import React from 'react';

function NumberButton({ number, onSelect, isSelected }) {
  const handleClick = () => {
    onSelect(number);
  };

  return (
    <button onClick={handleClick} className={isSelected ? 'numberbtn selectedButton' : 'numberbtn'}>{number}</button>
  );
}

export default NumberButton;
