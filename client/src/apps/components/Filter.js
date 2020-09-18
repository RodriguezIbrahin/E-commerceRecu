import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import * as actionCreators from "../../redux/actions/actions";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const options = ["Indistinto", 'New', 'Used'];

export function Filter({ Url, UrlForPage, SearchQueryCache, UrlPrice, UrlForCondition }) {
 
  const [value, setValue] = React.useState(null);
  const [inputValue, setInputValue] = React.useState('');

  const handleChange = (event, newInputValue) => {
      setInputValue(newInputValue);
      
      if(newInputValue === options[1]){

          UrlForCondition("&c=new");
          UrlForPage(Url + UrlPrice + "&c=new");
          SearchQueryCache(Url + UrlPrice + "&c=new");
        
        }
        if(newInputValue === options[2]){

          UrlForCondition("&c=used");
          UrlForPage(Url + UrlPrice + "&c=used");
          SearchQueryCache(Url + UrlPrice + "&c=used");
          
        }if(newInputValue === options[0]){

          UrlForCondition("");
          UrlForPage(Url + UrlPrice + "");
          SearchQueryCache(Url + UrlPrice + "");

        }
        

    };

  return (

    <div>

       <Autocomplete

        value={value}

        onChange={(event, newValue) => {
          setValue(newValue);
        }}

        inputValue={inputValue}

        onInputChange={handleChange}

        id="controllable"

        options={options}

        style={{ width: 180, }}

        size = "small"

        renderInput={(params) => <TextField {...params} label="Condición" variant="outlined" />}

      />

    </div>
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
  
export default connect(mapStateToProps, mapDispatchToProps)(Filter);