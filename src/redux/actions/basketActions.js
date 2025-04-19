
import api from "../../api"
import ActionTypes from "/src/redux/actionTypes.js";




 export const getBasket=()=>{
    return  async (dispatch)=>{
        dispatch({type:ActionTypes.CART_LOADING});
        api.get("/cart")
        .then((res)=>dispatch({type:ActionTypes.CART_SUCCES,payload:res.data}))
        .catch((err)=>dispatch({type:ActionTypes.CART_ERROR,payload:err.message}))
        

    }
}
export const createItem=(product)=>
    
    async (dispatch)=>{
        const newItem={
            id:product.id,
            productId:product.id,
            category:product.category,
            title:product.title,
            price:product.price,
            photo:product.photo,
            amount:1,
        };
        api.post("/cart",newItem)
        .then(()=>dispatch({type:ActionTypes.CREATE_ITEM,payload:newItem}))
        
    };
    export const updateItem = (id, newAmount) => async (dispatch) => {
        // api'a güncelleme isteği at
        api
          .patch(`/cart/${id}`, { amount: newAmount })
          // istek başarılı olursa reducer'a haber ver
          .then((res) =>
            dispatch({ type: ActionTypes.UPDATE_ITEM, payload: res.data })
          )
          .catch((err) => alert("Üzgünüz bir sorun oluştu"));
      };
  export const deleteItem=(id)=>
        async (dispatch)=>{
            api.delete(`/cart/${id}`)
            .then(()=>dispatch({type:ActionTypes.DELETE_ITEM,payload:id}))
        }
  
   

