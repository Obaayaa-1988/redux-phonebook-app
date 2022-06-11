import { legacy_createStore as createStore, combineReducers } from 'redux';
import { contacts } from './reducers/reducer';


const reducers = {
    contacts
}

const rootReducers = combineReducers(reducers)

export  const combineStore = () => createStore(rootReducers)