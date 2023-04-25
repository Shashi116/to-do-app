import React, { useState , useEffect} from 'react';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { Button } from 'react-bootstrap';
import axios from "axios";

export function ShowTask() {
    const [TaskList , setTaskList] = useState([]);
    const [selectedTaskId,setTaskId] = useState('');
    
    async function getTaskList(){
       const response=await axios.get("http://localhost:3001/get/task");
       setTaskList(response.data);
    }
    const deleteTask=async()=>{
       const response = await axios.delete("http://localhost:3001/task/:id="+selectedTaskId);
       console.log(response.data);
       
       getTaskList();

    }

    useEffect(()=>{
        getTaskList();
    },[]);
  return (
    <MDBTable align='middle'>
      <MDBTableHead>
        <tr>
          <th scope='col'>Task</th>
          <th scope='col'>Date</th>
          <th scope='col'>Status</th>
          <th scope='col'>Actions</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
      {
                            TaskList.map((task)=>{
                                return(
                 
                            <tr>
                                <td>{task.task}</td>
                                <td>{task.taskDate}</td>
                                <td>active</td>
                                <td><Button variant="danger" className="btn-sm" onClick={()=>{
                                            setTaskId(task.id)
                                            ;}} >Delete</Button></td>
                            </tr>
                                )
                        })
                    }
      </MDBTableBody>
    </MDBTable>
  );
}