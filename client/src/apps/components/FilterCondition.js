import React from 'react';

import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

import LabelIcon from '@material-ui/icons/Label';
import LabelOffIcon from '@material-ui/icons/LabelOff';

import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import * as actionCreators from "../../redux/actions/actions";



export function FilterCondition({ Url, UrlForPage, SearchQueryCache, UrlPrice, UrlForCondition }) {


    const New = (event)=>{

        UrlForCondition("&c=new");
        UrlForPage(Url + UrlPrice + "&c=new");
        SearchQueryCache(Url + UrlPrice + "&c=new"); 

    }

    const Used = (event)=>{

        UrlForCondition("&c=used");
        UrlForPage(Url + UrlPrice + "&c=used");
        SearchQueryCache(Url + UrlPrice + "&c=used");

    }
    
    const Indistinto = (event)=>{

        UrlForCondition("");
        UrlForPage(Url + UrlPrice + "");
        SearchQueryCache(Url + UrlPrice + "");

    }
    
    
        

    
  return (

        <List>

            <ListItem button onClick={New} key={"New"}>

                <ListItemIcon>
                    <LabelIcon/>
                </ListItemIcon>

                <ListItemText primary={"New"} />

            </ListItem>

            <ListItem button onClick={Used} key={"Used"}>

                <ListItemIcon>
                    <LabelOffIcon />
                </ListItemIcon>

                <ListItemText primary={"Used"} />

            </ListItem>

        </List>

    );
}

function mapStateToProps(state) {
    return {
        Url: state.Url,
        UrlPrice: state.UrlPrice,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}
  
export default connect(mapStateToProps, mapDispatchToProps)(FilterCondition);