import axios from "axios";

class post{

    create(taskData){
        const url = "http://localhost:3001/post";
        const config = {
            headers: { 'Content-type':'multipart/taskData' },
        }
        axios.post(url, taskData, config);
    }
}

export default new post();