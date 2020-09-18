import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import SearchBar from "../components/SearchBar";
import ResultsSB from "./ResultsSB";
import Product from "../components/Product";
import PaginationControlled from "../components/Pagination";
import OrderFilter from "./OrderFilter"
import MiniDrawer from "./ToolBar";

function Home() {
  return (
    <BrowserRouter>
    <Route exact path='/products/:id' component={Product}/>
    <Route exact path="/" component={SearchBar}/>
    <Route exact path="/1" component={MiniDrawer}/>
    <Route exact path="/" component={OrderFilter}/>
    <Route exact path="/" component={ResultsSB}/>
    <Route exact path="/" component={PaginationControlled}/>
    </BrowserRouter>
  );
}

export default Home;