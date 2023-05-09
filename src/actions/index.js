//add, delete, remove all
export const addTodo = (data)=>{
    return {
        type:"ADD_TODO",
        payload:{
            id: new Date().getTime().toString(),
            data:data,
            date:Date.now()
        }
    }
}

export const deleteTodo = (id)=>{
    return {
        type:"DELETE_TODO",
        id
    }
}

export const removeTodo = ()=>{
    return {
        type:"REMOVE_TODO"
    }
}