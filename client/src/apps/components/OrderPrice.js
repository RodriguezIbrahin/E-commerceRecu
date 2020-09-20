import React from 'react';

import { ListItem, List , ListItemIcon, ListItemText } from '@material-ui/core';


import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import ArrowUpwardSharpIcon from '@material-ui/icons/ArrowUpwardSharp';
import ArrowDownwardSharpIcon from '@material-ui/icons/ArrowDownwardSharp';

import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import * as actionCreators from "../../redux/actions/actions";

import { animateScroll as scroll} from "react-scroll";



export function OrderPrice({CacheProducts, SearchCacheProducts, Url, UrlForPage, SearchQueryCache, UrlCondition, UrlForPrice}) {


    const Ascendente = (event)=>{

        let asc ="http://localhost:3001/api/search?" + Url + "&o=asc" + UrlCondition;

        if(SearchCacheProducts[asc]){

            UrlForPrice("&o=asc");
            UrlForPage(Url + "&o=asc" + UrlCondition);
            CacheProducts(SearchCacheProducts[asc]); 
            scroll.scrollToTop();  
        }
        if(!SearchCacheProducts[asc]){

            UrlForPrice("&o=asc");
            UrlForPage(Url + "&o=asc" + UrlCondition);
            SearchQueryCache(Url + UrlCondition + "&o=asc"); 
            scroll.scrollToTop();
        };
    };
    
    const Descendente = (event)=>{

        let desc = "http://localhost:3001/api/search?" + Url + "&o=desc" + UrlCondition;

        if(SearchCacheProducts[desc]){

            UrlForPrice("&o=desc");
            UrlForPage(Url + "&o=desc" + UrlCondition);
            CacheProducts(SearchCacheProducts[desc]);
            scroll.scrollToTop();
        }
        if(!SearchCacheProducts[desc]){

            UrlForPrice("&o=desc");
            UrlForPage(Url + "&o=desc" + UrlCondition);
            SearchQueryCache(Url + UrlCondition + "&o=desc");
            scroll.scrollToTop();
        };
    };

    const Indiferente = (event)=>{

        let ind = "http://localhost:3001/api/search?" + Url + "" + UrlCondition;

        if(SearchCacheProducts[ind]){

            UrlForPrice("");
            UrlForPage(Url + "" + UrlCondition);
            CacheProducts(SearchCacheProducts[ind]);
            scroll.scrollToTop();
        }
        if(!SearchCacheProducts[ind]){

            UrlForPrice("");
            UrlForPage(Url + "" + UrlCondition);
            SearchQueryCache(Url + UrlCondition + "");
            scroll.scrollToTop();
        };
       
    };
  

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

                <ListItemText primary={"Ascendant"} />

            </ListItem>

            <ListItem button onClick={Descendente} key={"desc"}>

                <ListItemIcon>
                    <ArrowDownwardSharpIcon />
                </ListItemIcon>

                <ListItemText primary={"Descent"} />

            </ListItem>  

        </List>
    );
 
};

function mapStateToProps(state) {
  return {
       Url: state.Url,
       UrlCondition: state.UrlCondition,
       SearchCacheProducts: state.SearchCacheProducts
    };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
};
  
export default connect(mapStateToProps, mapDispatchToProps)(OrderPrice);