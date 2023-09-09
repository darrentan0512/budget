export const openEditModal = (id) => {
    return { type: 'OPEN_MODAL_EDIT', payload: {id}}
}

export const closeEditModal = () => {
    return { type: 'CLOSE_MODAL_EDIT'}
}