import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import * as actionCreators from "../../redux/actions/actions";
import { useStyles2 } from "../../styles/Styles";
import { InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

export function SearchBar2 ({CacheProducts, SearchCacheProducts, UrlForPage, UrlForFilterAndOrder, SearchQueryCache, UrlForPrice, UrlForCondition}){

    const classes = useStyles2();

    const handleSearchChange = (event)=>{

        let title = event.target.value
        
        let arr = "http://localhost:3001/api/search?q=" + title;

        if(SearchCacheProducts[arr]){

           CacheProducts(SearchCacheProducts[arr])
           UrlForPage("q=" + title);
           UrlForPrice("")
           UrlForCondition("")
           UrlForFilterAndOrder("q=" + title);
           
        }
        if(!SearchCacheProducts[arr]){

            if(title){

                UrlForPage("q=" + title);
                UrlForPrice("")
                UrlForCondition("")
                SearchQueryCache("q=" + title);
                UrlForFilterAndOrder("q=" + title);

            }
            if (!title){

                UrlForPage("");
                UrlForPrice("")
                UrlForCondition("")
                SearchQueryCache("");
                UrlForFilterAndOrder("");

            };
        }; 
    };

       

   return (
        <div className={classes.search}>

            <div className={classes.searchIcon}>

                <SearchIcon />

            </div>

            <InputBase

               placeholder="Search…"
               classes={{
                   root: classes.inputRoot,
                   input: classes.inputInput,
               }}

               onChange={handleSearchChange}
               inputProps={{ 'aria-label': 'search' }}

            />

        </div>

    );

};

function mapStateToProps(state) {
    return {
        Url: state.Url,
        SearchCacheProducts: state.SearchCacheProducts
    };
};


function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar2);
