import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import * as actionCreators from "../../redux/actions/actions";
import CatalogoConteiner from "./CatalogoContainer";


export class ResultsSB extends React.Component {
    
    render(){

        return(

            <CatalogoConteiner props={this.props.SearchProducts}/>
        
        )
    }
}; 

function mapStateToProps(state) {
    return {
        SearchProducts: state.SearchProducts,
    }
}
  
function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}
  
export default connect(mapStateToProps, mapDispatchToProps)(ResultsSB);