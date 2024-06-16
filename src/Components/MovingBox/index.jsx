import React, { useState, useRef, createRef, useEffect } from 'react';
import './MovingBox.scss';

const MovingBox = () => {
  const btnRefs = useRef([]);
  const divRef = useRef();
  const menuRef = useRef();

  useEffect(() => {
    divRef.current.style.top =
      btnRefs.current[0].current.getBoundingClientRect().bottom + 'px';
    divRef.current.style.left =
      btnRefs.current[1].current.getBoundingClientRect().right + 'px';
  }, []);

  const isIntersecting = () => {
    const divPos = divRef.current.getBoundingClientRect();
    const upBtnPos = btnRefs.current[0].current.getBoundingClientRect();
    const leftBtnPos = btnRefs.current[1].current.getBoundingClientRect();
    const rightBtnPos = btnRefs.current[2].current.getBoundingClientRect();
    const downBtnPos = btnRefs.current[3].current.getBoundingClientRect();

    const divLeft = divPos.left;
    const divTop = divPos.top;
    const divBottom = divPos.bottom;
    const divRight = divPos.right;
    const divHt = divPos.height;
    const divWd = divPos.width;

    if (divLeft <= leftBtnPos.right) {
      divRef.current.style.left = leftBtnPos.right + 'px';
    }
    if (divTop <= upBtnPos.bottom) {
      divRef.current.style.top = upBtnPos.bottom + 'px';
    }
    if (divBottom >= downBtnPos.top) {
      divRef.current.style.top = downBtnPos.top - divHt + 'px';
    }
    if (divRight >= rightBtnPos.left) {
      divRef.current.style.left = rightBtnPos.left - divWd + 'px';
    }
  };

  const _onUpClick = () => {
    divRef.current.style.top =
      parseInt(divRef.current.style.top ? divRef.current.style.top : 0) -
      10 +
      'px';
    isIntersecting();
  };

  const _onDownClick = () => {
    divRef.current.style.top =
      parseInt(divRef.current.style.top ? divRef.current.style.top : 0) +
      10 +
      'px';
    isIntersecting();
  };

  const _onRightClick = () => {
    divRef.current.style.left =
      parseInt(divRef.current.style.left ? divRef.current.style.left : 0) +
      10 +
      'px';
    isIntersecting();
  };

  const _onLeftClick = () => {
    divRef.current.style.left =
      parseInt(divRef.current.style.left ? divRef.current.style.left : 0) -
      10 +
      'px';
    isIntersecting();
  };

  return (
    <menu ref={menuRef}>
      <button
        className="btn-up horizontal"
        ref={
          btnRefs.current[0]
            ? btnRefs.current[0]
            : (btnRefs.current[0] = createRef())
        }
        onClick={_onUpClick}
      >
        Up
      </button>
      <div className="mid-size">
        <button
          className="btn-left vertical"
          ref={
            btnRefs.current[1]
              ? btnRefs.current[1]
              : (btnRefs.current[1] = createRef())
          }
          onClick={_onLeftClick}
        >
          Left
        </button>
        <div className="block" ref={divRef}></div>
        <button
          className="btn-right vertical"
          ref={
            btnRefs.current[2]
              ? btnRefs.current[2]
              : (btnRefs.current[2] = createRef())
          }
          onClick={_onRightClick}
        >
          Right
        </button>
      </div>
      <button
        className="btn-down horizontal"
        ref={
          btnRefs.current[3]
            ? btnRefs.current[3]
            : (btnRefs.current[3] = createRef())
        }
        onClick={_onDownClick}
      >
        Down
      </button>
    </menu>
  );
};

export default MovingBox;
