import Button from 'react-bootstrap/Button';
import { useState,useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import { Col, Container, Form, InputGroup, Row } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";


export function AddNewTask() {
  
  var [date,setDate] = useState(new Date());
  //const [task , setTask] = useState("");
  //const [taskDate , setTaskDate] = useState(date.toLocaleDateString());
  const [taskData, setTaskData] = useState({
    task : "",
    taskDate :""
  });
  const onChange = (e)=>{
    setTaskData({...taskData,[e.target.name]:e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //const response = await updateTask(taskData);
    const response = (await axios.post("http://localhost:3001/task/add",taskData)).data;
    if(response){ toast.success('Task added ', {position: toast.POSITION.TOP_RIGHT});    }
    console.log(response);    
  };
     
  useEffect(() => {
        var timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
          <Card.Footer><p> Date : {date.toLocaleDateString()}</p></Card.Footer>
            clearInterval(timer)
        }
    });
  return (
  <div>
    
    <Container>
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col sm="10">
          <Card>
            <Card.Body> 
              <InputGroup className="mb-3" >
                <Col xs={11}>
                <Form.Control   aria-label="" id='task' name='task' type="text" onChange={onChange}/></Col><Form.Control id='taskDate' name='taskDate' onChange={onChange} aria-label="date" type='date'  style={{marginRight:"20px"}}/>
              </InputGroup>
            </Card.Body>
            <Card.Footer> 
                Date : {date.toLocaleDateString()}
            </Card.Footer>
          </Card>
        </Col>
        <Col md="2" className=' align-items-right '>
          <Button type ="submit">Add</Button>
          <ToastContainer/>
        </Col>
      </Row>
      </Form>
    </Container>
  </div>
  );
}
