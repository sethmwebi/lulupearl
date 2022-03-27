import useSWR from "swr"
import useSWRInfinite from 'swr/infinite'
import { fetcher } from "./fetcher"

export const usePagination = (url, options) => {
	const PAGE_SIZE = 5;

	const getKey = (pageIndex, previousPageData) => {
		pageIndex += 1;
		if(previousPageData && !previousPageData.length) return null;
		return `${url}&_page=${pageIndex}&_limit=${PAGE_SIZE}`
	}

	const { data: posts, size, setSize, error, mutate } = useSWRInfinite(getKey, options)

	const paginatedData = posts?.flat()

	const reachedEnd = posts && posts[posts.length - 1]?.length < PAGE_SIZE;

	return {
		paginatedData,
		reachedEnd,
		size,
		setSize,
		error,
		mutate
	}
}

export const useMe = () => {
	const {data: me} = useSWR("/api/me", fetcher);
	return { me }
}
