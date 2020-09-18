import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ResultsSB from "./ResultsSB";
import MiniDrawer from "./ToolBar";

function Home() {
  return (
    <BrowserRouter>
    <Route exact path="/" component={MiniDrawer}/>
    </BrowserRouter>
  );
}

export default Home;