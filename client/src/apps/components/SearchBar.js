import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import * as actionCreators from "../../redux/actions/actions";

export class SearchBar extends React.Component{

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
        this.props.UrlForPage("q=" + this.state.title);
        this.props.UrlForFilterAndOrder("q=" + this.state.title);
        this.props.SearchQueryCache("q=" + this.state.title);
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
                   <button type="submit">BUSCAR en bd</button>
                </form>
                
            </div>
        );

    }

}

function mapStateToProps(state) {
    return {
        Url: state.Url,
    }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
  