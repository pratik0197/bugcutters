import axios from 'axios'
const imageUploadBackend = axios.create({
    baseURL : process.env.REACT_APP_SERVER
})
export default imageUploadBackend