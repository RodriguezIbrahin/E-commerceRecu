import React from 'react';

import { ListItem, List , ListItemIcon, ListItemText } from '@material-ui/core';


import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import ArrowUpwardSharpIcon from '@material-ui/icons/ArrowUpwardSharp';
import ArrowDownwardSharpIcon from '@material-ui/icons/ArrowDownwardSharp';

import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import * as actionCreators from "../../redux/actions/actions";



export function OrderPrice({Url, UrlForPage, SearchQueryCache, UrlCondition, UrlForPrice}) {



    const Ascendente = (event)=>{

        UrlForPrice("&o=asc");
        UrlForPage(Url + "&o=asc" + UrlCondition);
        SearchQueryCache(Url + UrlCondition + "&o=asc"); 

    }
    
    const Descendente = (event)=>{

      UrlForPrice("&o=desc");
      UrlForPage(Url + "&o=desc" + UrlCondition);
      SearchQueryCache(Url + UrlCondition + "&o=desc");
        
    }

    const Indiferente = (event)=>{

        UrlForPrice("");
        UrlForPage(Url + "" + UrlCondition);
        SearchQueryCache(Url + UrlCondition + "");
          
    }
  

  return (
        <List>
            <ListItem button onClick={Indiferente} key={"price"}>

                <ListItemIcon>
                    <MonetizationOnIcon />
                </ListItemIcon>

                <ListItemText primary={"Order Price"} />

            </ListItem>

            <ListItem button onClick={Ascendente} key={"asc"}>

                <ListItemIcon>
                    <ArrowUpwardSharpIcon/>
                </ListItemIcon>

                <ListItemText primary={"Ascendente"} />

            </ListItem>

            <ListItem button onClick={Descendente} key={"desc"}>

                <ListItemIcon>
                    <ArrowDownwardSharpIcon />
                </ListItemIcon>

                <ListItemText primary={"Desencente"} />

            </ListItem>  

        </List>
    )
 
}

function mapStateToProps(state) {
  return {
    Url: state.Url,
    UrlCondition: state.UrlCondition
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}
  
export default connect(mapStateToProps, mapDispatchToProps)(OrderPrice);