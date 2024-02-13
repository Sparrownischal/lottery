import React from 'react';
import { useState } from 'react';

const NumberButtons = () => {
  const [clickedButton, setClickedButton] = useState(null);
  

  const numbersArray = Array.from({ length: 20 }, (_, index) => index + 1);
  let selectedNumbers = [];
  const numClicked = (number)=>{
    // alert(number+'selected');
    selectedNumbers.push(number);
    console.log(selectedNumbers)
    setClickedButton(number);
    // if (clickedButton === number) {
    //   // If the clicked button value is the same as the current clicked button value, reset it
    //   setClickedButton(null);
    // } else {
    //   // Otherwise, set it to the new clicked button value
    //   setClickedButton(number);
    // }
    console.log(clickedButton)

  }
 
  return (
    <div className='numberButtons'>
      <div className='numberContainer'>
      {numbersArray.map((number, index) => (
        // <button 
        // className={`numberbtn ${clickedButton === number ? 'selectedButton' : ''}`} 
        // onClick={()=>numClicked(number)}>{number}</button>
        <button key={index} className=  {5 === number ? 'numberbtn selectedButton' : 'numberbtn'} 
        onClick={()=>numClicked(number)}> {number}</button>
      ))}
      </div>      
    </div>
  )
}

export default NumberButtons
