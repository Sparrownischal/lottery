import React, { useState } from 'react';
import NumberButton from './components/NUmberButton';
import MoneyButton from './components/MoneyButton';
import SelectedNumbers from './components/SelectedNumbers';
import './App.css';
import './assets/css/main.css';

function App() {
  const [selectedNumbers, setSelectedNumbers] = useState([]);
  const [totalMoney, setTotalMoney] = useState(0);
  const [showReceipt, setShowReceipt] = useState(false);

  // Function to handle selecting numbers
  const handleSelectNumber = (number) => {
    if (selectedNumbers.includes(number)) {
      setSelectedNumbers(selectedNumbers.filter((selectedNumber) => selectedNumber !== number));
    } else if (selectedNumbers.length < 5) {
      setSelectedNumbers([...selectedNumbers, number]);
    } else {
      alert("You can't select more than 5 numbers!");
    }
  };

  // Function to handle assigning money value
  const handleAssignMoney = (moneyValue) => {
    if (selectedNumbers.length === 5) {
      setTotalMoney(totalMoney + moneyValue);
    }
  };

  // Function to handle selecting 5 random numbers
  const handleSelectRandomNumbers = () => {
    const randomNumbers = [];
    while (randomNumbers.length < 5) {
      const randomNumber = Math.floor(Math.random() * 20) + 1;
      if (!randomNumbers.includes(randomNumber)) {
        randomNumbers.push(randomNumber);
      }
    }
    setSelectedNumbers(randomNumbers);
  };

  // Function to handle clearing selections
  const handleClear = () => {
    setSelectedNumbers([]);
    setTotalMoney(0);
    setShowReceipt(false);
  };

  // Function to handle displaying the cash receipt
  const handleCash = () => {
    setShowReceipt(true);
  };

  return (
    <div className="app">
      <header className="header-container">

        <h1 className='header-text'> WHE WHE on D' Avenue </h1>
      </header>
      <div className='main'>

        <div className='first'>
          <div className='first-bg'>
          </div>
          <div className="money-buttons">
            <MoneyButton value={1} onAssign={handleAssignMoney} disabled={selectedNumbers.length !== 5} />
            <MoneyButton value={5} onAssign={handleAssignMoney} disabled={selectedNumbers.length !== 5} />
            <MoneyButton value={10} onAssign={handleAssignMoney} disabled={selectedNumbers.length !== 5} />
            <MoneyButton value={20} onAssign={handleAssignMoney} disabled={selectedNumbers.length !== 5} />
          </div>
        </div>
        <div className="number-buttons">
          {[...Array(20).keys()].map((number) => (
            <NumberButton
              key={number}
              number={number + 1}
              onSelect={handleSelectNumber}
              isSelected={selectedNumbers.includes(number + 1)}
            />
          ))}

          <div className='buttons-container'>
            <button onClick={handleClear}>Clear</button>
            <button onClick={handleSelectRandomNumbers}>Select Random Numbers</button>
            <button className="cash-button" onClick={handleCash}>
              Cash
            </button>
          </div>

          {showReceipt && (
            <div className="receipt">
              <h2>Receipt</h2>
              <p>Selected Numbers: {selectedNumbers.join(', ')}</p>
              <p>Total Money: ${totalMoney.toFixed(2)}</p>
            </div>
          )}
        </div>
        <div className='third'>
          <SelectedNumbers numbers={selectedNumbers} totalMoney={totalMoney} />
        </div>

      </div>
    </div>
  );
}

export default App;