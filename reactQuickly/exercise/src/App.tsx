import React from "react";
import Clock from "./Clock";
import HelloWorld from "./practice/HelloWorld";

const App: React.FC = () => {
  return (
    <div>
      <HelloWorld />
      <Clock />
    </div>
);
};

export default App;