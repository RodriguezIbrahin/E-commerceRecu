import React from 'react';

import { ListItem, List , ListItemIcon, ListItemText } from '@material-ui/core';

import AddToPhotosIcon from '@material-ui/icons/AddToPhotos';

import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import * as actionCreators from "../../redux/actions/actions";

export function AddDB({ ProductsML, PostAllProducts }) {

  const Add = (event)=>{
    PostAllProducts(ProductsML)
  }
  

  return (
    
    <List>

      <ListItem button onClick={Add} key={"price"}>

        <ListItemIcon >

          <AddToPhotosIcon/>

        </ListItemIcon>

        <ListItemText primary={"Add all products"} />

      </ListItem> 

    </List>
    
  )
 
}

function mapStateToProps(state) {
  return {
    ProductsML: state.ProductsML,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}
  
export default connect(mapStateToProps, mapDispatchToProps)(AddDB);