import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import * as actionCreators from "../../redux/actions/actions";
import { useStyles2 } from "../../styles/Styles";
import { InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

export function SearchBar2 ({UrlForPage, UrlForFilterAndOrder, SearchQueryCache, Url}){

   const classes = useStyles2();

   const handleSearchChange = (event)=>{
       let title = event.target.value
        UrlForPage("q=" + title);
        UrlForFilterAndOrder("q=" + title);
        SearchQueryCache("q=" + title);
        console.log(title)
    }

       

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

    

}

function mapStateToProps(state) {
    return {
        Url: state.Url,
    }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar2);
