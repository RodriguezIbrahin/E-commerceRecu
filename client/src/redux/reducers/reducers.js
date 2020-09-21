import {CACHE_PRODUCTS, APP_ML, GET_ML_PRODUCTS , POST_DB_PRODUCTS, GET_CACHE_PRODUCTS, GET_PRODUCTS, URL_FILTER_ORDER, URL_PAGE, URL_CONDITION, URL_PRICE} from "../actions/actions.js";

const initialState = {
    ProductsML: [],                //produsctos de mercadolibre
    SearchCacheProducts: {},                             // productos en cache aun falta
    SearchProducts: [],            // productos de la busqueda
    ProductDB: [],                 // producto en particular
    PageTotal: 1,                  //total de paginas
    Url: "",                       // url de la busqueda, listo para filtros
    UrlPage: "",
    UrlPrice:"",
    UrlCondition: "",                   // url de la busqueda con filtros, listo para paginado
    AppMl: 1,
};

export default function rootReducer(state = initialState, action) {
  switch (action.type){
        
   case GET_ML_PRODUCTS:
     return {
       ...state,
       ProductsML: action.payload,
      }

    case POST_DB_PRODUCTS:
      return {
       ...state,
      }

    case GET_CACHE_PRODUCTS:

      let propiedad = action.payload.search;

      let value = action.payload.respuesta.rows;

      let PageForSearch = Math.ceil((action.payload.respuesta.count / 30))

      let NewSearch = {};

      NewSearch[propiedad] = [value, PageForSearch];

      Object.assign(NewSearch, state.SearchCacheProducts)

      return{
        ...state,
        SearchCacheProducts: NewSearch,
        SearchProducts: value,
        PageTotal: PageForSearch
      }

    case GET_PRODUCTS:

     return {
       ...state,
       ProductDB: action.payload,
      }

    case URL_FILTER_ORDER:

     return {
       ...state,
       Url: action.payload,
      }
    case URL_PAGE:

     return {
       ...state,
       UrlPage: action.payload,
      }
    case URL_PRICE:

     return {
       ...state,
       UrlPrice: action.payload,
      }
    case URL_CONDITION:

     return {
       ...state,
       UrlCondition: action.payload,
      }
    case APP_ML:

     let arr = state.AppMl
     return {
       ...state,
       AppMl: arr * (action.payload),
      }
    case CACHE_PRODUCTS:

     return {
       ...state,
       SearchProducts: action.payload[0],
       PageTotal: action.payload[1]
      }
      
    default:
     return {
       ...state
      }
  }
}
