import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import * as actionCreators from "../../redux/actions/actions";



export class ProductCardML extends React.Component{
    products = {
        id: this.props.id,
        title: this.props.title,
        price: this.props.price,
        currency_id: this.props.currency_id,
        available_quantity: this.props.available_quantity,
        thumbnail: this.props.thumbnail,
        condition: this.props.condition,
    };

    handleSubmit(event) {
        event.preventDefault();
        this.props.PostProducts(this.products); 
    }

    render(){

        return(
            <div>

              <h3 >{this.props.title}</h3>
              <img src={this.props.thumbnail} ></img>
              <span >{this.props.price}</span>
              <span>{this.props.currency_id}</span>
              <span>{this.props.available_quantity}</span>
              <span>{this.props.condition}</span>
              <span>{this.props.id}</span>
              <form onSubmit={(e) => this.handleSubmit(e)}>
                  <button type="submit" value={this.props.id} name="add">Agregar BD</button>
              </form>
       
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}
  
export default connect(null, mapDispatchToProps)(ProductCardML);