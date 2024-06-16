import { useEffect, useState, createContext } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import DragAndDrop from './Components/DragAndDrop';
import Testing from './Components/Testing/Testing.components';
import MainComponent from './Components/TwoSameComponent/MainComponent';
import Experiment from './Components/Experiment/Experiment';
import Timer from './Components/Timer';
import MovingBox from './Components/MovingBox';
import CallerComponent from './Components/InfiniteScrollerISObserver/Caller.component';
import Comments from './Components/Comments';
import SimpleComment from './Components/SimpleComment';
import CompoundPattern from './Components/CompoundPattern';

export const Context = createContext(2);

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount(1);
    }, 1000);
  }, []);

  // return <>{count ? <DragAndDrop /> : <Testing />}</>;

  // return <MainComponent />;

  return (
    <Context.Provider value={{ cnt: count, setCnt: setCount }}>
      {/* <Testing /> */}
      {/* <Experiment /> */}
      {/* <Timer /> */}
      {/* <MovingBox /> */}
      {/* <CallerComponent /> */}
      {/* <Comments /> */}
      {/* <SimpleComment /> */}
      {/* <CompoundPattern /> */}
    </Context.Provider>
  );
}

export default App;
