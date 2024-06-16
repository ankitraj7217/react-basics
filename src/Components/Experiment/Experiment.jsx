import React, { useEffect, useState, useContext } from 'react';
import { Context } from '../../App';
import ExHeader from '../../Components/Experiment/ExperimenHeader';
import ExperimentInner from '../../Components/Experiment/Experiment.inner';

const useDocTitle = (title) => {
  useEffect(() => {
    document.title = `AR ${title}`;
  }, [title]);
};

const Experiment = () => {
  // let [val, setVal] = useState(0);
  // const currContext = useContext(Context);

  // useDocTitle(val);

  // console.log('currContext: ', currContext);

  const [cnt1, setCnt1] = useState(0);
  const [cnt2, setCnt2] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCnt1(500);
      setCnt2(500);
    }, 1000);
  }, []);

  const handleUpdate = () => {
    setVal((prevVal) => prevVal + 1);
  };

  return (
    <div>
      <ExHeader />
      <ExperimentInner cnt={cnt1} setCnt={setCnt1} />
      <ExperimentInner cnt={cnt2} setCnt={setCnt2} />
    </div>
  );
};

export default Experiment;
