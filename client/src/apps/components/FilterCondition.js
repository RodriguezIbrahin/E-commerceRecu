import React from 'react';

import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

import LabelIcon from '@material-ui/icons/Label';
import LabelOffIcon from '@material-ui/icons/LabelOff';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';

import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import * as actionCreators from "../../redux/actions/actions";

import { animateScroll as scroll} from "react-scroll";



export function FilterCondition({CacheProducts, SearchCacheProducts, Url, UrlForPage, SearchQueryCache, UrlPrice, UrlForCondition }) {


    const New = (event)=>{

        let news = "http://localhost:3001/api/search?" + Url + UrlPrice + "&c=new";

        if(SearchCacheProducts[news]){

            UrlForCondition("&c=new");
            UrlForPage(Url + UrlPrice + "&c=new");
            CacheProducts(SearchCacheProducts[news]); 
            scroll.scrollToTop();
        }
        if(!SearchCacheProducts[news]){

            UrlForCondition("&c=new");
            UrlForPage(Url + UrlPrice + "&c=new");
            SearchQueryCache(Url + UrlPrice + "&c=new"); 
            scroll.scrollToTop();  
        };
    };

    const Used = (event)=>{

        let used = "http://localhost:3001/api/search?" + Url + UrlPrice + "&c=used";

        if(SearchCacheProducts[used]){

            UrlForCondition("&c=used");
            UrlForPage(Url + UrlPrice + "&c=used");
            CacheProducts(SearchCacheProducts[used]);
            scroll.scrollToTop();
        }
        if(!SearchCacheProducts[used]){

            UrlForCondition("&c=used");
            UrlForPage(Url + UrlPrice + "&c=used");
            SearchQueryCache(Url + UrlPrice + "&c=used");
            scroll.scrollToTop();   
        };
    };
    
    const Indistinto = (event)=>{

        let indis = "http://localhost:3001/api/search?" + Url + UrlPrice + "";

        if(SearchCacheProducts[indis]){

            UrlForCondition("");
            UrlForPage(Url + UrlPrice + "");
            CacheProducts(SearchCacheProducts[indis]);
            scroll.scrollToTop(); 
        }
        if(!SearchCacheProducts[indis]){

            UrlForCondition("");
            UrlForPage(Url + UrlPrice + "");
            SearchQueryCache(Url + UrlPrice + "");
            scroll.scrollToTop();  
        };
    };
    
    
        

    
  return (

        <List>
            <ListItem button onClick={Indistinto} key={"Indistinto"}>

                <ListItemIcon>
                    <LabelImportantIcon/>
                </ListItemIcon>

               <ListItemText primary={"Indistinto"} />

            </ListItem>

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
};

function mapStateToProps(state) {
    return {
        Url: state.Url,
        UrlPrice: state.UrlPrice,
        SearchCacheProducts: state.SearchCacheProducts
    };
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
};
  
export default connect(mapStateToProps, mapDispatchToProps)(FilterCondition);