import { createSlice } from "@reduxjs/toolkit";

const mobileNavSlice = createSlice({
	name: "mobileNav",
	initialState: {
		shown: false,
		itemExpanded: {
			clothingItems: false,
			shoeItems: false,
			accessoryItems: false,
		},
	},
	reducers: {
		setMobileNav: (state, action) => {
			state.shown = action.payload.shown;
		},
		toggleExpanded: (state, action) => {
			state.itemExpanded.accessoryItems = action.payload.accessoryItems;
			state.itemExpanded.clothingItems = action.payload.clothingItems;
			state.itemExpanded.shoeItems = action.payload.shoeItems;
		},
	},
});

export const { setMobileNav, toggleExpanded } = mobileNavSlice.actions;
export default mobileNavSlice.reducer;
