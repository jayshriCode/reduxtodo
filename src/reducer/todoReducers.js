const initialData = {
    list: []
}


const todoReducers = (state = initialData, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            const { id, data, date } = action.payload;
            return {
                ...state,
                list: [
                    ...state.list,
                    {
                        id: id,
                        data: data,
                        date: date
                    }
                ]
            }// eslint-disable-next-line
            break;

        case 'DELETE_TODO':
            const newList = state.list.filter((elem) => { return elem.id !== action.id })
            return {
                ...state,
                list: newList
            } // eslint-disable-next-line
            break;

        case 'REMOVE_TODO':
            return {
                ...state,
                list: []
            } // eslint-disable-next-line
            break;

        default:
            return state; // eslint-disable-next-line
            break;
    }
}

export default todoReducers;