import React, { useState, useCallback, useRef } from 'react';
import InfiniteScroller from '../../Components/InfiniteScrollerISObserver';

const CallerComponent = () => {
  const [query, setQuery] = useState('');
  const [data, setData] = useState([]);
  const controllerRef = useRef(null);

  const _handleInput = useCallback((e) => {
    setQuery(e.target.value);
  }, []);

  const _getData = useCallback((query, pageNo) => {
    return new Promise(async (res, rej) => {
      try {
        if (controllerRef.current) controllerRef.current.abort();
        controllerRef.current = new AbortController();

        const resp = await fetch(
          `https://openlibrary.org/search.json?` +
            new URLSearchParams({
              q: query,
              page: pageNo,
            }),
          {
            signal: controllerRef.current.signal,
          }
        );
        const data = await resp.json();
        res(data);
        setData((prevData) => [
          ...prevData,
          ...data.docs.map((ele) => ele.title),
        ]);
      } catch (e) {
        rej(e.message);
      }
    });
  }, []);

  const renderItems = useCallback(
    ({ title }, key, ref) => (
      <div key={key} ref={ref}>
        {title}
      </div>
    ),
    []
  );

  return (
    <>
      <input type="text" value={query} onChange={_handleInput} />

      <InfiniteScroller
        renderListItem={renderItems}
        getData={_getData}
        listData={data}
        query={query}
      />
    </>
  );
};

export default CallerComponent;
