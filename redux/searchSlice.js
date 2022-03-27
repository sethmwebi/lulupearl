import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import useSWR from 'swr'

export const searchProduct = createAsyncThunk("products/search", async (search) => {
	const { data, error, loading } = useSWR(`/products`)
	return data;
})

const searchSlice = createSlice({
	name: "search",
	initialState: {
		search: "",
		products: [],
		pending: null,
		error: null
	},
	reducers: {
		setSearch: (state, action) => {
			state.search = action.payload.search
		}
	},
	extraReducers: {
		searchProductStart: (state) => {
			state.pending = true;
		},
		[searchProduct.fulfilled]: (state, action) => {
      state.search = action.payload.search;
      state.pending = false;
    },
    [searchProduct.rejected]: (state) => {
      state.pending = false;
      state.error = true;
    },
	}
})

export const { setSearch } = searchSlice.actions;
export default searchSlice.reducer