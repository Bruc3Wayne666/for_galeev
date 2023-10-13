import axios from 'axios'


const instance = axios.create({
	baseURL: import.meta.env.VITE_BASE_URL
	// headers: {
	// 	'Authorization': 'Basic YmVuem86Sk8rL3Q4OG9sSDhsSzlxelRUWHZaQQ=='
	// }
})

instance.interceptors.request.use(req => {
	const token = localStorage.getItem('token')
	if (token) {
		req.headers['Authorization'] = `Bearer ${token}`
	}
	return req
})

export default instance
