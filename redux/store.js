import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from 'redux-persist'

import authReducer from "./authReducers";
import searchReducer from "./reducers";
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'applicationState',
  storage,
}

const combinedReducers = combineReducers({
  auth: authReducer,
  search: searchReducer,
})

const persistedReducer = persistReducer(persistConfig, combinedReducers)

const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

export default store;