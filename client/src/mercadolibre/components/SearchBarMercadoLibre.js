import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import * as actionCreators from "../../redux/actions/actions"

export class SearchBarML extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          title: ""
        };
    }

    handleChange(event) {
        this.setState({ title: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.GetProductsML(this.state.title)
    }
    handleSubmit2(event) {
        event.preventDefault();
        this.props.PostAllProducts(this.props.ProductsML)
    }

    render(){

        const { title } = this.state;

        return (

            <div>
                <h2>Buscador</h2>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <div>
                      <label >Productos: </label>
                        <input
                          type="text"
                          id="title"
                          autoComplete="off"
                          value={title}
                          onChange={(e) => this.handleChange(e)}
                        />
                    </div>
                   <button type="submit">BUSCAR ML</button>
                </form>
                <form onSubmit={(e) => this.handleSubmit2(e)}>
                  <button type="submit" value="5" name="add">Agregar Todo</button>
                </form>
            </div>
        );

    }

}

function mapStateToProps(state) {
    return {
       ProductsML: state.ProductsML,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBarML);
  