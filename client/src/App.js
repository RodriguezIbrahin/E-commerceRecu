import React from 'react';
import { connect } from "react-redux";
import { BrowserRouter } from 'react-router-dom';
import Home from "./apps/containers/HomeApps"
import HomeML from './mercadolibre/containers/HomeML';
import ChangePage from "./components/ChangePage"



export function App({AppMl}) {

  return (
    <BrowserRouter>

      {AppMl === 1 ? <Home/> : <HomeML/>}

      <ChangePage/>
      
    </BrowserRouter>
  );
}

function mapStateToProps(state) {

  return {

    AppMl: state.AppMl

  }
}

export default connect(mapStateToProps, null)(App);
