import Axios from "axios";

const firebaseInstance = Axios.create({
    baseURL  : 'https://bugcutters.firebaseio.com'
})
export default firebaseInstance