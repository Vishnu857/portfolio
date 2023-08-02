import React from "react";
import Header from "./components/Header/Header";
import TopContainer from "./components/TopContainer/TopContainer";
const App = () => {
  return <div>
    <Header/>
    <div className="main">
    <TopContainer />
    </div>
  </div>;
};

export default App;
