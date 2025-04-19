import ActionTypes from "../actionTypes"
import api from "../../api"
export const getRestaurants=()=>{
    return async (dispatch)=>{
        dispatch({type:ActionTypes.REST_LOADING});
        api.get("/restaurants").then((res)=>dispatch({type:ActionTypes.REST_SUCCES,payload:res.data}))
        .catch((err)=>dispatch({type:ActionTypes.REST_ERROR,payload:err}))
    }
}