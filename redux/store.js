import { configureStore } from "@reduxjs/toolkit"
import elementsReducer from "./elementsSlice"
import featuredReducer from "./featuredSlice"
import productReducer from "./productSlice"
import searchReducer from "./searchSlice"
import mobileNavReducer from "./mobileNavSlice"
import signupReducer from "./signupSlice"
import storeLinkReducer from "./storeLinkSlice"

export default configureStore({
	reducer: {
		elements: elementsReducer,
		featured: featuredReducer,
		product: productReducer,
		search: searchReducer,
		mobileNav: mobileNavReducer,
		signup: signupReducer,
		storelink: storeLinkReducer
	}
})