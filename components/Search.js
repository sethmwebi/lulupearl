import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setSearch } from "../redux/searchSlice"

const Search = () => {
	const dispatch = useDispatch()
	const {search} = useSelector(state => ({...state.search}))

	return (
		<input
			className="w-full outline-none pl-1.5 md:pl-2 bg-gray-100 text-gray-500"
			autoFocus
			type="text"
			placeholder="search lulupearl"
			onChange={(e) => dispatch(setSearch({search: e.target.value}))}
		/>
	);
};

export default Search;
