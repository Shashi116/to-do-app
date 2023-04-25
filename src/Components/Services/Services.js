import axios from "axios";

/*class post{

    create(taskData){
        const url = "http://localhost:3001/post";
        const config = {
            headers: { 'content-type': "application/application.json"
        },
        }
        
        axios.post(url, taskData,config);
    }
}

export default new post();*/
const url = "http://localhost:3001/post";
export async function updateTask(data){
    return axios.post(url,data);
}