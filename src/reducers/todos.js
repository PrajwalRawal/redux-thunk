let initState = [
    {
        "title": "Bring Milk",
    },
    {
        "title": "Bring KitKat",
    },
    {
        "title": "Bring Tea",
    },
];
export default (state = initState, action) => {
    let {type, payload} = action
    switch(type){
        case 'GET_TODOS':
            return [...state, ...payload];
        default: 
            return state
    }
}