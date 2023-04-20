import Button from 'react-bootstrap/Button';
import { useState,useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import { Col, Container, Form, InputGroup, Row } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Services from '../Services/Services';


export function AddNewTask() {
  //class TaskData{};
  var [date,setDate] = useState(new Date());
  const [task , setTask] = useState("");
  const [taskDate , setTaskDate] = useState(date.toLocaleDateString());

  const handleSubmit = async (e) => {
    e.preventDefault();
    const taskData = new FormData();
    taskData.append('task',task);
    taskData.append('taskDate',taskDate);
    const response = await Services.create(taskData);
    toast.success('Task added ', {position: toast.POSITION.TOP_RIGHT});    
    console.log(response);
    setTask('');
    setTaskDate('');
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
                <Form.Control   aria-label="" id='task' value={task} type="text" onChange={e=>setTask(e.target.value)}/></Col><Form.Control id='taskDate' value={taskDate} onChange={e=>setTaskDate(e.target.value)} aria-label="date" type='date'  style={{marginRight:"20px"}}/>
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
