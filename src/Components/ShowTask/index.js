import React, { useState , useEffect} from 'react';
import { Button , Table,ButtonGroup} from 'react-bootstrap';
import axios from "axios";


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
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th style={{width:"10%"}}>Date</th>
          <th>Task</th>
          <th style={{width:"10%"}}>Status</th>
          <th style={{width:"20%"}}>Actions</th>
        </tr>
      </thead>
      <tbody>
      {
        TaskList.map((task)=>{
        return(         
          <tr>
            <td>{task.taskDate}</td>
            <td>{task.task}</td>
            <td>active</td>
            <td><ButtonGroup><Button variant="danger" className="btn-sm" onClick={()=>{setTaskId(task._id)
                                                                          deleteTask();}} >Delete</Button><Button style={{width:"8vh"}}  className="btn-sm">Edit</Button></ButtonGroup></td>
          </tr>
        )})
                    }
      </tbody>
    </Table>
  );
}