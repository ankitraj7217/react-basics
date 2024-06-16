import React, { useEffect, useState } from 'react';

const InnerTesting = ({ val }) => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    console.log('child mounting: ', value);

    return () => {
      console.log('inner Unmounting 2nd: ', value);
    };
  }, []);

  useEffect(() => {
    console.log('inner value: ', val);

    setTimeout(() => {
      setValue(80);
    }, 500);

    return () => {
      console.log('inner Unmounting: ', val);
    };
  }, [val]);

  return <div>{val}</div>;
};

export default InnerTesting;
