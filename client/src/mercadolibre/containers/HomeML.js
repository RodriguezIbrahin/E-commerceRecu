import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import SearchBarML from "../components/SearchBarMercadoLibre";
import ResultsSBML from "./ResultsSBML";



function HomeML() {
  return (
    <BrowserRouter>
    <Route exact path="/mercadolibre" component={SearchBarML}/>
    <Route exact path="/mercadolibre" component={ResultsSBML}/>
    </BrowserRouter>
  );
}

export default HomeML;