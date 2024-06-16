import React, { useEffect, useState } from 'react';
import InnerTesting from '../../Components/Testing/Testing.inner';
import { PhoneNumberInput } from '../../Components/Testing/PhoneNumberInput';

const Testing = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log('parent mounting');
    return () => {
      console.log('parent unmounting empty: ', value);
    };
  }, []);

  useEffect(() => {
    console.log('Check 2nd parent useEffect');
    if (value < 5) {
      setValue((preVal) => preVal + 1);
    }
    console.log('parent: ', value);

    return () => {
      console.log('parent unmounting: ', value);
    };
  }, [value]);

  return (
    <>
      <PhoneNumberInput />
      {Array.from({ length: 5 }).map((ele, idx) => {
        return <InnerTesting val={value} key={idx} />;
      })}
      <InnerTesting val={value} />;
    </>
  );
};

export default Testing;
