import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import * as actionCreators from "../../redux/actions/actions";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const options = ["Indistinto",'Descendente', 'Ascendente'];

export function Order({Url, UrlForPage, SearchQueryCache, UrlCondition, UrlForPrice}) {

  const [value, setValue] = React.useState(null);
  const [inputValue, setInputValue] = React.useState('');

  const handleChange = (event, newInputValue) => {
    setInputValue(newInputValue);

    if(newInputValue === options[1]){

      UrlForPrice("&o=desc");
      UrlForPage(Url + "&o=desc" + UrlCondition);
      SearchQueryCache(Url + UrlCondition + "&o=desc");
    }
    if(newInputValue === options[2]){

      UrlForPrice("&o=asc");
      UrlForPage(Url + "&o=asc" + UrlCondition);
      SearchQueryCache(Url + UrlCondition + "&o=asc");

    }if(newInputValue === options[0]){

      UrlForPrice("");
      UrlForPage(Url + "" + UrlCondition);
      SearchQueryCache(Url + UrlCondition + "");
    }

  };

  return (
    <Autocomplete

      value={value}

      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      
      inputValue={inputValue}

      onInputChange={handleChange}

      id="controllable-states-demo"

      options={options}

      style={{ width: 180, }}

      size = "small"

      renderInput={(params) => <TextField {...params} label="Price" variant="outlined" />}

    />

    
  );
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
  
export default connect(mapStateToProps, mapDispatchToProps)(Order);