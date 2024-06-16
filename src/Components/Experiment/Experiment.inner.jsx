import React, { useEffect, useState, useContext, memo } from 'react';
import { Context } from '../../App';

const ExperimentInner = ({ cnt, setCnt }) => {
  // const { cnt, setCnt } = useContext(Context);
  const [check, setCheck] = useState(-1);
  console.log('Experiment inner: ', check, cnt);

  useEffect(() => {
    setCheck(5);
  }, []);

  return <div onClick={() => setCnt(cnt + 1)}>{cnt}</div>;
};

export default memo(ExperimentInner);
