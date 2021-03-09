import axios from 'axios';
import PORT_NUM from '../../port'

const instance = axios.create({
	baseURL: process.env.NODE_ENV === "development" ? `http://localhost:${PORT_NUM}/` : "the innernet"
})

export default instance;