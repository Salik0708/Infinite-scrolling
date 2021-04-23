import React, { useReducer } from "react";

import { listReducer } from "../reducers/listReducer";
import { ListContext } from "../context/listContext";

const allData = new Array(25).fill(0).map((_val, i) => i + 1);
const perPage = 10;

const ListProvider = ({ children }) => {
  const [state, dispatch] = useReducer(listReducer, {
    loading: false,
    more: true,
    after: 0,
    data: [],
  });

  const { loading, data, after, more } = state;

  const load = () => {
    dispatch({ type: "start" });

    setTimeout(() => {
      const newData = allData.slice(after, after + perPage);

      dispatch({ type: "loaded", newData, perPage });
    }, 1000);
  };

  return (
    <ListContext.Provider value={{ loading, data, more, load }}>
      {children}
    </ListContext.Provider>
  );
};

export default ListProvider;
