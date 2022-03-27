import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
	name: "product",
	initialState: {
		products: [],
		toolTip1: false,
		toolTip2: false,
		activeIndex: 0,
		sortType: "nothing",
	},
	reducers: {
		setProducts: (state, action) => {
			state.products = action.payload.products;
		},
		setTooltip: (state, action) => {
			state.toolTip1 = action.payload.toolTip1;
			state.toolTip2 = action.payload.toolTip2;
		},
		setHoveredItem: (state, action ) => {
			state.activeIndex = action.payload.activeIndex;
		},
		sortProducts: (state, action) => {
			state.sortType = action.payload.sortType;
			switch (state.sortType) {
				case "highest-lowest":
					state.products = [...state.products].sort(function (a, b) {
						return a.price < b.price ? (b.price > a.price ? 1 : 0) : -1;
					});
					break;
				case "lowest-highest":
					state.products = [...state.products].sort(function (a, b) {
						return a.price < b.price ? -1 : a.price > b.price ? 1 : 0;
					});
					break;
				case "best-selling":
					state.products = [...state.products].sort(function (a, b) {
						return a.sales < b.sales ? (b.sales > a.sales ? 1 : 0) : -1;
					});
				default:
					state.products = [...state.products];
			}
		},
	},
});

export const { setTooltip, setHoveredItem, setProducts, sortProducts } = productSlice.actions;
export default productSlice.reducer;
