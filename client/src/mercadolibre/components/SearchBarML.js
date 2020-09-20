import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import * as actionCreators from "../../redux/actions/actions";
import { useStyles2 } from "../../styles/Styles";
import { InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

export function SearchBarML ({GetProductsML}){

    const classes = useStyles2();

    const handleSearchChange = (event)=>{

        let title = event.target.value

        GetProductsML(title)
    
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


function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBarML);