import React, { useEffect, useState } from 'react';
import Component1 from '../../Components/TwoSameComponent/Component1';
import Component2 from '../../Components/TwoSameComponent/Component2';

const MainComponent = () => {
  const [cnt, setCnt] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCnt(1);
    }, 10000);
  }, []);

  return <>{cnt ? <Component1 /> : <Component2 />}</>;
};

export default MainComponent;
