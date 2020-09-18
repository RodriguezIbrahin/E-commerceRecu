import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Home from "./apps/containers/HomeApps"
import HomeML from './mercadolibre/containers/HomeML';



function App() {
  return (
    <BrowserRouter>
      <Home/>
      <HomeML/>
    </BrowserRouter>
  );
}

export default App;