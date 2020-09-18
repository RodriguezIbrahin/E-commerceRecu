import React from 'react';
import { connect } from "react-redux";
import { useStyles} from "../../styles/Styles";
import Pagination from '@material-ui/lab/Pagination';
import { bindActionCreators } from 'redux';
import * as actionCreators from "../../redux/actions/actions" 


export function PaginationControlled({UrlPage, PageTotal, onClickPage}) {

  const classes = useStyles();

  const [page, setPage] = React.useState(1);

  const handleChange = (event, value) => {

    setPage(value);
    
    onClickPage([value - 1 , UrlPage]);
  };
  
  return (
    <>
      {(PageTotal > 1 ) &&
        <div className={classes.root}>
          <Pagination count={PageTotal} page={page} onChange={handleChange} color="primary" />
        </div>
      }
    </>
  );
}

function mapStateToProps(state) {
  return {
    UrlPage: state.UrlPage,
    PageTotal: state.PageTotal
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PaginationControlled);