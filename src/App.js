import React from "react";

import ListProvider from "./providers/ListProvider";
import List from "./components/List";

function App() {
  return (
    <ListProvider>
      <List />
    </ListProvider>
  );
}

export default App;
