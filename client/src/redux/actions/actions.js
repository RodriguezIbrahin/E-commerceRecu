import axios from "axios";

export const GET_ML_PRODUCTS = "GET_ML_PRODUCTS";
export const POST_DB_PRODUCTS = "POST_DB_PRODUCTS";
export const GET_CACHE_PRODUCTS = "GET_CACHE_PRODUCTS";
export const GET_PRODUCTS = "GET_PRODUCTS";
export const NEW_URL = "NEW_URL";
export const URL_FILTER_ORDER = "URL_FILTER_ORDER";
export const URL_PAGE = "URL_PAGE";
export const URL_PRICE = "URL_PRICE";
export const URL_CONDITION = "URL_CONDITION";

// Traigo los productos de MercadoLibre

export function GetProductsML(payload) {
    return function (dispatch) {
      return axios.get(`https://api.mercadolibre.com/sites/MLA/search?q={${payload}}`)
        .then(response => {
          dispatch({ type: GET_ML_PRODUCTS, payload: response.data.results });  // despacha la accion GET_ML_PRODUCTS
        })
        .catch(err => {
          console.log(err)
        });
    }
};


// Cargo un producto a la bd

export function PostProducts(payload) {
    return function (dispatch) {
      return axios.post(`http://localhost:3001/products/`, payload)
        .then(response => {
          if (response.data.name === "SequelizeUniqueConstraintError"){
              alert ("Producto ya agregado")
            }else 
            alert ("producto agregado")
            dispatch({ type: POST_DB_PRODUCTS, payload: response.data });  // despacha la accion POST_DB_PRODUCTS
        })
        .catch(err => {
          alert("algo salio mal")
          console.log(err)
        });
    }
}

// Cargar todo a la bd

export function PostAllProducts(payload){
  return function(dispatch){
    payload && payload.map(products =>{
      let product ={
        title: products.title,
        id: products.id,
        price: products.price,
        currency_id: products.currency_id,
        available_quantity: products.available_quantity,
        thumbnail: products.thumbnail,
        condition: products.condition,
      }

      return axios.post(`http://localhost:3001/products/`, product)
      .then(ress =>{
        dispatch({ type: POST_DB_PRODUCTS, payload: ress.data });  // despacha la accion POST_DB_PRODUCTS
      })
      .catch(err => {
        alert("algo salio mal")
        console.log(err)
      });
            
    })
    alert("Todos los productos")
  }
}


//CACHE DE PRODUCTOS

export function SearchQueryCache(payload){
  return function(dispatch){
    let url = "http://localhost:3001/api/search?" + payload
    return axios.get(`${url}`)
    .then(response => {
      dispatch({ type: GET_CACHE_PRODUCTS, payload: {search: url, respuesta: response.data} });  // despacha la accion GET_CACHE_PRODUCTS
    })
    .catch(err => {
      console.log(err)
    });
  }

}

//Traigo el producto de la bd

export function GetProducts(payload) {
  return function (dispatch) {
    return axios.get(`http://localhost:3001/products/${payload}`)
      .then(response => {
        dispatch({ type: GET_PRODUCTS, payload: response.data });  // despacha la accion GET_PRODUCTS
      })
      .catch(err => {
        console.log(err)
      });
  }
};

//URL a usar en filtros

export function UrlForFilterAndOrder(payload){
  return{
    type: URL_FILTER_ORDER,
    payload
  }
}

//url de precio

export function UrlForPrice(payload){
  return{
    type: URL_PRICE,
    payload
  }
}

//url de condicion

export function UrlForCondition(payload){
  return{
    type: URL_CONDITION,
    payload
  }
}


//URl para usar paginado

export function UrlForPage(payload){
  return{
    type: URL_PAGE,
    payload
  }
}

//onlick paginas

export function onClickPage(payload){
  return function (dispatch) {
    dispatch(SearchQueryCache(payload[1] + "&p=" +payload[0]));
  } 
}