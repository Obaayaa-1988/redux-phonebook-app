import { ADD_CONTACT } from "../actions/action";

export const contacts = (state = [], action) => {
    switch (action.type) {
        case ADD_CONTACT: {
            const newContact = {
                text: action.payload.text
            }

            return [...state, newContact]

        }
            
            
    
        default:
          return  state;
    }

}

