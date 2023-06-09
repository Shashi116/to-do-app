import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import { Col, Container, Form, InputGroup, Row } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";


export function AddNewTask() {
  
  var date = new Date();
  //const [task , setTask] = useState("");
  //const [taskDate , setTaskDate] = useState(date.toLocaleDateString());
  const [taskData, setTaskData] = useState({
    task : "Task to do.",
    taskDate :date.toLocaleDateString(),
    taskTime : "09:00 am"
  });
  const onChange = (e)=>{
    setTaskData({...taskData,[e.target.name]:e.target.value});
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = (await axios.post("http://localhost:3001/task/add",taskData)).data;
    if(response){ toast.success('Task added ', {  position: toast.POSITION.TOP_RIGHT  });    }
    console.log(response);    
  };
    

  return (
  <div>
    <Container style={{marginBottom:"5vh"}}>
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col sm="10">
          <Card>
            <Card.Body > 
              <InputGroup className="mb-3" >
                <Col xs={10}>
                <Form.Control   aria-label="" id='task' name='task' type="text" onChange={onChange} /></Col><Form.Control id='taskDate' name='taskDate' onChange={onChange} aria-label="date" type='date'  />
                <Form.Control id='taskTime' name='taskTime' onChange={onChange} aria-label="time" type='time' style={{width:"11vh"}}/>
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
