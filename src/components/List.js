import React, { useState, useRef, useContext, useEffect } from "react";

import { ListContext } from "../context/listContext";

import "./List.css";

const List = () => {
  const [element, setElement] = useState(null);
  const { data, loading, more, load } = useContext(ListContext);
  const loader = useRef(load);
  const observer = useRef(
    new IntersectionObserver(
      (entries) => {
        const first = entries[0];

        if (first.isIntersecting) {
          loader.current();
        }
      },
      {
        threshold: 1,
      }
    )
  );

  useEffect(() => {
    loader.current = load;
  }, [load]);

  useEffect(() => {
    const currentElement = element;
    const currentObserver = observer.current;

    if (currentElement) {
      currentObserver.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        currentObserver.unobserve(currentElement);
      }
    };
  }, [element]);

  return (
    <div className="list">
      <ul>
        {data.map((row) => (
          <li key={row}>{row}</li>
        ))}

        {loading && <p>Loading...</p>}

        {!loading && more && (
          <li style={{ background: "transparent" }} ref={setElement}></li>
        )}
      </ul>
    </div>
  );
};

export default List;
