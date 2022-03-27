import { createSlice } from "@reduxjs/toolkit"

const elementsSlice = createSlice({
	name: "elements",
	initialState: {
		shown: false,
		storeLinkShown: false,
		showSearchBar: false
	},
	reducers: {
		setShown: (state, action) => {
			state.shown = action.payload.shown;
		},
		setStoreLinkShown: (state, action) => {
			state.storeLinkShown = action.payload.storeLinkShown
		},
		// search navbar input
		setNavSearchBar: (state, action) => {
			state.showSearchBar = action.payload.showSearchBar
		}
	}
})

export const { setShown, setStoreLinkShown, setNavSearchBar } = elementsSlice.actions;
export default elementsSlice.reducer;