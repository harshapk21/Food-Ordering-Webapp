import  {mainReducer}  from './Reducers/mainReducer';
import { createStore } from 'redux';
//import { combineReducers } from 'redux';
//import { persistStore,persistReducer } from 'redux-persist';
//import storage from 'redux-persist/lib/storage';

   
export default () => {
    
   /* let initialS = {

    }
    const config = {
        key:'root',
        storage,
    }

    const persistedReducer = persistReducer(config,mainReducer);
    //console.log(mainReducer);
    */
    const store = createStore(mainReducer);
    console.log(store);
    //const persistedStore = persistStore(store);
    return {store};

};

