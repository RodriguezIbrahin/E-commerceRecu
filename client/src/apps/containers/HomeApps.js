import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ResultsSB from "./ResultsSB";
import ToolBar from "./ToolBar";

function Home() {
  return (
    <BrowserRouter>
    <ToolBar/>
    </BrowserRouter>
  );
}

export default Home;