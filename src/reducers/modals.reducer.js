const reducer = (state = {isOpen: false}, action) => {
    switch (action.type) {
        case 'OPEN_MODAL_EDIT' : 
            return {...state, isOpen : true, id: action.payload.id};
        case 'CLOSE_MODAL_EDIT' :
            break
        default:
            return state;
    }
};

export default reducer;