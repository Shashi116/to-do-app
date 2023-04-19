import Button from 'react-bootstrap/Button';
import { useState,useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import { Form, InputGroup } from 'react-bootstrap';

export function AddNewTask() {
  var [date,setDate] = useState(new Date());
  const [task , setTask] = useState();
    
    useEffect(() => {
        var timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
          <Card.Footer><p> Date : {date.toLocaleDateString()}</p></Card.Footer>
            clearInterval(timer)
        }
    
    });
  return (
    <Card>
    <Card.Body> <InputGroup className="mb-3">
       
        <Form.Control aria-label="" />
      </InputGroup>
    </Card.Body>
    <Card.Footer> Date : {date.toLocaleDateString()}</Card.Footer>
  </Card>

  );
}
