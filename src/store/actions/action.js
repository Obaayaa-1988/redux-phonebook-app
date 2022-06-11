export const ADD_CONTACT = "ADD_CONTACT"



export const addContact = (text) => ({
    type: ADD_CONTACT,
    payload: { text }

})