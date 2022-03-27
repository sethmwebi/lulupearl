import axios from "axios"

export const fetcher = (url, data) => {
	axios({method: data ? "POST" : "GET", url: url, data: data}).then(res => res.data)
}