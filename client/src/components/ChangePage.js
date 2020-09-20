import React from 'react';
import { ListItem, List , ListItemIcon } from '@material-ui/core';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import { useStyles} from "../styles/Styles";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import * as actionCreators from "../redux/actions/actions";


export function ChangePage({ APPorML, UrlForPage, UrlForFilterAndOrder, SearchQueryCache, UrlForPrice, UrlForCondition}) {

  const classes = useStyles();

  const handleClick = (event) => {
    APPorML(-1)
    UrlForPage("");
    UrlForPrice("")
    UrlForCondition("")
    SearchQueryCache("");
    UrlForFilterAndOrder("");
  };

  return (
    
        <List className={classes.changepage} >

            <ListItem button onClick={handleClick} key={"change"}>

                 <ListItemIcon >

                   < AutorenewIcon/>

                </ListItemIcon>

            </ListItem> 

        </List>
    
    )
 
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(null, mapDispatchToProps)(ChangePage);