import React from "react";
import Table from "./components/Table";
import Sidebar from "./components/sidebar";

const App = () => {
  return (
    <div className="flex justify-between">
      <Sidebar />
      <Table />
    </div>
  );
};

export default App;
