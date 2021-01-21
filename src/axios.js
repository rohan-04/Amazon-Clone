// axios is a popular fetching library
// allows us to (GET/POST)request to APIs easily

import axios from "axios";


const instance = axios.create({
    baseURL: "http://localhost:5001/clone-3a14a/us-central1/api" // The API (cloud function) URL

});


export default instance;