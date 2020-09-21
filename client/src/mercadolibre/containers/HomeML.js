import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ToolBarML from "./ToolBarML"



function HomeML() {
  return (
    <BrowserRouter>
      <ToolBarML/>
    </BrowserRouter>
  );
}

export default HomeML;