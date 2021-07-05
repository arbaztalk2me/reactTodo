import { combineReducers } from "redux";
import { ADD_TODO,DELETE_TODO,REMOVE_TODO } from "../actions";

const initalState={
    list:[]
};

export function todo(state=initalState,action){
   switch(action.type){
        case ADD_TODO:
            const {id,data}=action.payload;
            return{
                ...state,
                list:[
                    ...state.list,
                    {
                        data:data,
                        id:id,
                    }
                ]
            }
        case DELETE_TODO:
            return{
                ...state,
                list:[]
            }
        case REMOVE_TODO:
            const arr=state.list.filter((elem)=>elem.id!==action.id);
            return{
                ...state,
                list:arr,
            }
        default:
            return state
   }
}

export default combineReducers({
    todo:todo,
   
})