import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userReducer";
import storage from 'redux-persist/lib/storage';
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from 'redux-persist';
import createwebStorage from "redux-persist/lib/storage/createwebStorage";
import thunk from 'redux-thunk';


const createNoopStorage = () => {
  return {
    getItem(_key: string) {
      return Promise.resolve(null);
    },
    setItem(_key: string, value: string) {
      return Promise.resolve(value);
    },
    removeItem(_key: string) {
      return Promise.resolve();
    },
  };
};
// const storage = typeof window !== 'undefined' ? createwebStorage('local') : createNoopStorage();
const persistConfig = {
  key: 'root',
  storage,
}
const rootReducer = combineReducers({ 
  user: userReducer,
})
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware:[thunk]
});

export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;