import axios from 'axios';

const api = axios.create({
	baseURL: 'https://api.spotify.com/',
});

api.interceptors.request.use(
	async (config) => {
		config.headers.Accept = 'application/json';
		let token = localStorage.getItem('accessToken');
		if (token) {
			config.headers.Authorization = 'Bearer ' + token;
		}
		return config;
	},
	(error) => Promise.reject(error)
);

export default api;
