import React, { useCallback, useEffect, useRef, useState } from 'react';

const InfiniteScroller = (props) => {
  const { getData, renderListItem, listData, query } = props;
  const pageNo = useRef(1);
  const [loading, setLoading] = useState(false);
  const observer = useRef(null);

  const lastElementObserver = useCallback((node) => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          pageNo.current += 1;
          fetchData(query, pageNo.current);
        }
      });
    });

    if (node) observer.current.observe(node);
  }, []);

  const renderList = useCallback(() => {
    return listData.map((ele, idx) => {
      console.log('ele: ', ele);
      if (idx === listData.length - 1) {
        return renderListItem(ele, idx, lastElementObserver);
      }
      return renderListItem(ele, idx, null);
    });
  }, []);

  const fetchData = (query) => {
    setLoading(true);
    getData(query, pageNo.current).finally(() => {
      setLoading(false);
    });
  };

  useEffect(() => {
    if (query) {
      fetchData(query);
    }
  }, [query]);

  return (
    <>
      {renderList()}
      {loading && 'Loading...'}
    </>
  );
};

export default InfiniteScroller;
