import React from 'react';
import { connect } from "react-redux";
import { useStyles} from "../../styles/Styles";
import Pagination from '@material-ui/lab/Pagination';
import { bindActionCreators } from 'redux';
import * as actionCreators from "../../redux/actions/actions"
import { animateScroll as scroll} from "react-scroll";


export function PaginationControlled({CacheProducts, SearchCacheProducts, UrlPage, PageTotal, onClickPage}) {

  const classes = useStyles();

  const [page, setPage] = React.useState(1);

  const handleChange = (event, value) => {

    setPage(value);

    let pageurl = "http://localhost:3001/api/search?" + UrlPage + "&p=" + (value - 1);

    if(SearchCacheProducts[pageurl]){

      CacheProducts(SearchCacheProducts[pageurl])
      scroll.scrollToTop();

    }
    if(!SearchCacheProducts[pageurl]){

      onClickPage([value - 1 , UrlPage]);
      scroll.scrollToTop();

    };
  };
  
  return (
    <>
      {(PageTotal > 1 ) &&
        <div className={classes.pagination}>
         
          <Pagination count={PageTotal} page={page} onChange={handleChange} color="primary" />
        
        </div>
      }
    </>
  );
};

function mapStateToProps(state) {
  return {
    UrlPage: state.UrlPage,
    PageTotal: state.PageTotal,
    SearchCacheProducts: state.SearchCacheProducts
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(PaginationControlled);