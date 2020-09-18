import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import * as actionCreators from "../../redux/actions/actions";
import ProductCardML from "../components/ProductCardML";

export class ResultsSBML extends React.Component {

    render(){

        return(
            <div>
               {this.props.ProductsML && this.props.ProductsML.map( products => 
                <ProductCardML
                title= {products.title}
                id = {products.id}
                price = {products.price}
                currency_id = {products.currency_id}
                available_quantity = {products.available_quantity}
                thumbnail = {products.thumbnail}
                condition = {products.condition}
                />)}
          </div>
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
  