import React from 'react';

function SelectedNumbers({ numbers, totalMoney }) {
    return (
        <div className="selected-container">
            <h2>Selected Numbers :</h2>
                {numbers.map((number, index) => (
                    <p key={index}>{number}</p>
                ))}

            <div className='total'>
                <p> <strong> Total Money:</strong> ${totalMoney.toFixed(2)}</p>
            </div>
        </div>
    );
}

export default SelectedNumbers;
