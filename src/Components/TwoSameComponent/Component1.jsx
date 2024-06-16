import React, { useEffect } from 'react';

const Component1 = () => {
  useEffect(() => {
    console.log('1 mounting');

    return () => console.log('1 unmounting');
  }, []);
  
  return (
    <div>
      <h1>Component1</h1>
      <div>Check</div>
    </div>
  );
};

export default Component1;
