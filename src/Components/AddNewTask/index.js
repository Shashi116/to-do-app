import Button from 'react-bootstrap/Button';
import { useState,useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import { Form, InputGroup } from 'react-bootstrap';

export function AddNewTask() {
  var [date,setDate] = useState(new Date());
    
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
        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
        <Form.Control aria-label="Text input with checkbox" />
      </InputGroup>
    </Card.Body>
    <Card.Footer> Date : {date.toLocaleDateString()}</Card.Footer>
  </Card>

  );
}
