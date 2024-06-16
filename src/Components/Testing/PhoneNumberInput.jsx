import React, { useState, ChangeEvent } from 'react';

export function PhoneNumberInput() {
  // your code here
  const [val, setVal] = useState('');

  const _handleChange = (e) => {
    const inputVal = e.target.value;
    console.log('inputVal: ', inputVal);
    let newVal = '';

    for (let i = 0; i < inputVal.length; i++) {
      const charCode = inputVal.charCodeAt(i);
      if (charCode >= 48 && charCode <= 57 && newVal.length < 10) {
        newVal += inputVal[i];
      }
    }

    setVal(newVal);
  };

  return (
    <input
      data-testid="phone-number-input"
      value={val}
      type="tel"
      onChange={_handleChange}
    />
  );
}
