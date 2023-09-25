const modalTypes = {
    OPEN_MODAL_EDIT : "OPEN_MODAL_EDIT",
    CLOSE_MODAL_EDIT : "CLOSE_MODAL_EDIT"
}

export default modalTypes;

export const openEditModal = (id) => {
    return { type: modalTypes.OPEN_MODAL_EDIT, payload: {id}}
}

export const closeEditModal = () => {
    return { type: modalTypes.CLOSE_MODAL_EDIT}
}