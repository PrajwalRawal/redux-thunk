import Axios from "axios";

export const getTodos = () => {
    return dispatch => {
        Axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(res => {
            dispatch({type:'GET_TODOS', payload: res.data})
        })
    }

}