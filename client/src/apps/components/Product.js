import React from 'react';
import * as actionCreators from "../../redux/actions/actions"
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

export class Product extends React.Component{

    componentDidMount() {
        
        const { match: { params: { id } } } = this.props;
        this.props.GetProducts(id);
    }


    render(){

        return(
            <div>

              <h3 >{this.props.ProductDB.title}</h3>
              <img src={this.props.ProductDB.thumbnail} ></img>
              <span >{this.props.ProductDB.price}</span>
              <span>{this.props.ProductDB.currency_id}</span>
              <span>{this.props.ProductDB.available_quantity}</span>
              <span>{this.props.ProductDB.condition}</span>
              <span>{this.props.ProductDB.id}</span>
       
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
       ProductDB: state.ProductDB,
    }
}
  
function mapDispatchToProps(dispatch) {
   return bindActionCreators(actionCreators, dispatch);
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Product);
  
  