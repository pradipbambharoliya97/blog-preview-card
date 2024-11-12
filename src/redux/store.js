import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { homeReducer } from "./slices/homeSlice";

const rootReducer = combineReducers({
  home: homeReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

// npm install @reduxjs/toolkit react-redux redux-persist

// src/app/store.ts
// import { configureStore } from '@reduxjs/toolkit';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import { homeReducer } from "./slices/rootSlice";
// import { combineReducers } from 'redux';

// // Define the root reducer with persist configuration
// const rootReducer = combineReducers({
//   home: homeReducer,
// });

// const persistConfig = {
//   key: 'root',
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// // Configure the store with the persisted reducer
// export const store = configureStore({
//   reducer: persistedReducer,
// });

// // Enable the persistor for the store
// export const persistor = persistStore(store);

// // Type definitions for Redux hooks
// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
