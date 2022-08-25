import axios from "axios";

const AxiosInstance = axios.create({
    baseURL: `${process.env.REACT_APP_BACKEND_URL}`
});

export default AxiosInstance