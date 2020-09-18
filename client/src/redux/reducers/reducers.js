import { GET_ML_PRODUCTS , POST_DB_PRODUCTS, GET_CACHE_PRODUCTS, GET_PRODUCTS, URL_FILTER_ORDER, URL_PAGE, URL_CONDITION, URL_PRICE} from "../actions/actions.js";

const initialState = {
    ProductsML: [],                //produsctos de mercadolibre
    SearchCacheProducts: {},       // productos en cache aun falta
    SearchProducts: [
      {
        "id": "MLA810456653",
        "title": "Nueva Ducato Ambulancia 2020 Anticipo $475.000 O Tu Usado- L",
        "price": 1166000,
        "currency_id": "ARS",
        "available_quantity": "1",
        "thumbnail": "http://http2.mlstatic.com/D_677566-MLA41815289378_052020-I.jpg",
        "condition": "used",
        "createdAt": "2020-09-17T02:22:43.511Z",
        "updatedAt": "2020-09-17T02:22:43.511Z"
      },
      {
        "id": "MLA877270186",
        "title": "Volkswagen Fox 1.6 3p Trendline 2013 Tomo Usado Northwagen",
        "price": 545000,
        "currency_id": "ARS",
        "available_quantity": "1",
        "thumbnail": "http://http2.mlstatic.com/D_610373-MLA43187828835_082020-I.jpg",
        "condition": "used",
        "createdAt": "2020-09-17T02:22:43.223Z",
        "updatedAt": "2020-09-17T02:22:43.223Z"
      },
      {
        "id": "MLA766741406",
        "title": "Hyundai Veloster 1.6 130cv At 2013 Acepto Usados",
        "price": 1050000,
        "currency_id": "ARS",
        "available_quantity": "1",
        "thumbnail": "http://http2.mlstatic.com/D_891935-MLA31756633101_082019-I.jpg",
        "condition": "used",
        "createdAt": "2020-09-17T02:22:43.250Z",
        "updatedAt": "2020-09-17T02:22:43.250Z"
      },
      {
        "id": "MLA875544402",
        "title": "Volkswagen Polo Highline 2018 Full Usado",
        "price": 1469900,
        "currency_id": "ARS",
        "available_quantity": "1",
        "thumbnail": "http://http2.mlstatic.com/D_711441-MLA43298418518_082020-I.jpg",
        "condition": "used",
        "createdAt": "2020-09-17T02:22:43.296Z",
        "updatedAt": "2020-09-17T02:22:43.296Z"
      },
      {
        "id": "MLA872663510",
        "title": "Chevrolet Trailblazer 2.8 Ltz Usada 2013 Full  #4",
        "price": 2399900,
        "currency_id": "ARS",
        "available_quantity": "1",
        "thumbnail": "http://http2.mlstatic.com/D_645612-MLA42128956219_062020-I.jpg",
        "condition": "used",
        "createdAt": "2020-09-17T02:22:43.501Z",
        "updatedAt": "2020-09-17T02:22:43.501Z"
      }
    ],            // productos de la busqueda
    ProductDB: [],                 // producto en particular
    PageTotal: 1,                  //total de paginas
    Url: "",                       // url de la busqueda, listo para filtros
    UrlPage: "",
    UrlPrice:"",
    UrlCondition: "",                   // url de la busqueda con filtros, listo para paginado
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

      NewSearch[propiedad] = value;

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
      
    default:
     return {
       ...state
      }
  }
}
