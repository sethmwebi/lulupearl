import { createSlice } from "@reduxjs/toolkit";

const featuredSlice = createSlice({
	name: "featured",
	initialState: {
		featuredProducts: [],
		bestSelling: [],
		allProducts: [],
		products: [],
		activeBtn: "all"
	},
	reducers: {
		setProducts: (state, action) => {
			state.featuredProducts = action.payload.featuredProducts
			state.bestSelling = action.payload.bestSelling
			state.allProducts = [...action.payload.featuredProducts, ...action.payload.bestSelling]
		},
		filterFeatured: (state, action) => {
			state.activeBtn = action.payload.activeBtn;
			switch(state.activeBtn){
				case "featured":
					state.products = [...state.featuredProducts];
					break;
				case "best-selling":
					state.products = [...state.bestSelling];
					break;
				default:
					state.products = [...state.allProducts]
			}
		}
	}
})

export const { setProducts, filterFeatured } = featuredSlice.actions;
export default featuredSlice.reducer;