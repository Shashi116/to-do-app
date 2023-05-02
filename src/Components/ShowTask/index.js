import React, { useState , useEffect} from 'react';
import './style.css';
import axios from "axios";
import { Button,  Container } from 'react-bootstrap';


export function ShowTask() {
    const [TaskList , setTaskList] = useState([]);
    const [selectedTaskId,setTaskId] = useState('');

    
    
    async function getTaskList(){
       const response=await axios.get("http://localhost:3001/get/task");
       setTaskList(response.data);
    }
    const deleteTask=async()=>{
       const response = await axios.delete("http://localhost:3001/task/"+selectedTaskId);
       console.log(response.data);
       getTaskList();
    }



    useEffect(()=>{
        getTaskList();
    },[]);
  return (
        <>
        <div class="container page-todo bootstrap snippets bootdeys">
        <div class="col-sm-7 tasks">
            <div class="task-list">
                <h1>Tasks</h1>
      {
        TaskList.map((task)=>{
        return(         
            <>
          <div class="priority low"><span>Actives</span></div>                
          <div class="task low">
              <div class="desc">
                  <div class="title">{task.task}</div>
              </div>
              <div class="time">
                  <div class="date">{task.taskDate}</div>
                 
              </div>
          </div>
          <button class="btton"><i  class="icons8-trash"></i></button>
            </>
        )})
                    }
                    </div>
                    </div>
                    </div>
    </> 
  );
}