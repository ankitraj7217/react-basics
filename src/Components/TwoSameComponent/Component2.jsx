import React, { useEffect } from 'react';

const Component2 = () => {
  useEffect(() => {
    console.log('2 mounting');

    return () => console.log('2 unmounting');
  }, []);

  return (
    <div>
      <h1>Component2</h1>
      <div>Check</div>
    </div>
  );
};

export default Component2;
