import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
	name: "cart",
	initialState: {
		items: [],
		totalAmount: 0,
		totalCount: 0,
		shippingCost: 40
	},
	reducers: {
		addToCart: (state, action) => {
			let product  = state.items.findIndex(item => item.id === action.payload.id);
			if(product != -1){
				state.items[product].amount++
			} else {
				let item = {...action.payload, amount: 1};
				state.items.push(item)
			}
		},
		getCartTotal: (state) => {
			let { totalAmount, totalCount } = state.items.reduce(
				(cartTotal, cartItem) => {
					const { price, amount } = cartItem;
					const itemTotal = price * amount;
					cartTotal.totalAmount += itemTotal;
					cartTotal.totalCount += amount;
					return cartTotal;
				},
				{
					totalAmount: 0,
					totalCount: 0,
				}
			);
			state.totalAmount = parseInt(totalAmount.toFixed(2));
			state.totalCount = totalCount;
		},
		remove: (state, action) => {
			state.items = state.items.filter((item) => item.id !== action.payload);
		},
		increase: (state, action) => {
			state.items = state.items.map((item) => {
				if (item.id === action.payload) {
					return { ...item, amount: item.amount + 1 };
				}
				return item;
			});
		},
		decrease: (state, action) => {
			state.items = state.items
				.map((item) => {
					if (item.id === action.payload) {
						return { ...item, amount: item.amount - 1 };
					}
					return item;
				})
				.filter((item) => item.amount !== 0);
		},
		clearCart: (state) => {
			state.items = [];
		},
	},
});

export default cartSlice.reducer;
export const {
	addToCart,
	getCartTotal,
	increase,
	remove,
	decrease,
	clearCart,
} = cartSlice.actions;
