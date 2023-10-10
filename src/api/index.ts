import axios from 'axios'


axios.interceptors.request.use(req => {
	const token = localStorage.getItem('token')
	if (token) {
		req.headers['X-Authorization'] = token
	}
	return req
})

export const instance = axios.create({
	baseURL: import.meta.env.VITE_BASE_URL
	// headers: {
	// 	'Authorization': 'Basic YmVuem86Sk8rL3Q4OG9sSDhsSzlxelRUWHZaQQ=='
	// }
})
