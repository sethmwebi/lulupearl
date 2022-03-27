import { createSlice } from "@reduxjs/toolkit"

const mobileNavSlice = createSlice({
	name: "mobileNav",
	initialState: {
		shown: false
	},
	reducers: {
		setMobileNav: (state, action) => {
			state.shown = action.payload.shown;
		}
	}
})

export const { setMobileNav } = mobileNavSlice.actions;
export default mobileNavSlice.reducer;