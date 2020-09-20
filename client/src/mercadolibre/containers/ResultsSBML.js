import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import * as actionCreators from "../../redux/actions/actions";
import CatalogoConteinerML from "./CatalogoContainerML"

export class ResultsSBML extends React.Component {

    render(){

        return(

            <CatalogoConteinerML props={this.props.ProductsML} />

        )
    }
}; 

function mapStateToProps(state) {
    return {
       ProductsML: state.ProductsML,
    }
}
  
function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}
  
export default connect(mapStateToProps, mapDispatchToProps)(ResultsSBML);
  