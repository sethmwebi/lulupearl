import { createSlice } from "@reduxjs/toolkit"

const storeLinkSlice = createSlice({
	name: "storelinks",
	initialState: {
		clothing: ["dresses", "skirts", "tops"],
		shoes: ["flats", "boots", "heels"],
		accessories: ["bags", "wallets", "handbags"]
	}
})

export default storeLinkSlice.reducer;