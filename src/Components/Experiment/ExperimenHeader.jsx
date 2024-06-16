import React, { memo, useContext } from 'react';
import { Context } from '../../App';

const ExHeader = () => {
  const value = useContext(Context);

  console.log('In experiment header: ', value);
  return <h1>Haha</h1>;
};

export default memo(ExHeader);
