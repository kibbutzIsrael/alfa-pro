import axios from "axios";
import { BASE_API_URL } from "./constants";

axios.defaults.baseURL = BASE_API_URL;

export function setCommonHeader(headerName, headerValue) {
   axios.defaults.headers.common[headerName] = headerValue;
}

const httpServices = {
   get: axios.get,
   post: axios.post,
   patch: axios.patch,
   put: axios.put,
   delete: axios.delete,
   setCommonHeader,
};

export default httpServices;
