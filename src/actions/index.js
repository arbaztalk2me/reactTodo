export const ADD_TODO="ADD_TODO";
export const REMOVE_TODO='REMOVE_TODO';
export const DELETE_TODO='DELETE_TODO';



export function addNewTodo(data){
    return{
        type:ADD_TODO,
        payload:{
            id:new Date().getTime().toString(),
            data:data

        }
    }
}

export function removeTodo(id){

    return{
        type:REMOVE_TODO,
        id:id
    }
}

export function deleteTodo(){
    return{
        type:DELETE_TODO
    }
}