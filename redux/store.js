import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import storage from "redux-persist/lib/storage"
import { persistReducer } from "redux-persist"
import { combineReducers } from "redux"

import elementsReducer from "./elementsSlice"
import featuredReducer from "./featuredSlice"
import productReducer from "./productSlice"
import searchReducer from "./searchSlice"
import mobileNavReducer from "./mobileNavSlice"
import signupReducer from "./signupSlice"
import storeLinkReducer from "./storeLinkSlice"
import cartReducer from "./cartSlice"

const persistConfig = {
	key: "root",
	version: 1,
	storage,
	whitelist: ['cart']
}

const reducer = combineReducers({
	elements: elementsReducer,
		featured: featuredReducer,
		product: productReducer,
		search: searchReducer,
		mobileNav: mobileNavReducer,
		signup: signupReducer,
		storelink: storeLinkReducer,
		cart: cartReducer
})

const persistedReducer = persistReducer(persistConfig, reducer)

export default configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})