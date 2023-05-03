import Header from "./Header";
//import {BrowserRouter, Routes , Route} from 'react-router-dom';
import {AddNewTask} from './AddNewTask';
import Container from "react-bootstrap/esm/Container";
import {Col,Row} from "react-bootstrap/esm";
import { ShowTask } from "./ShowTask";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { EditTask } from "./EditTask";

export const Home = ()=>{
    return(
        <>
        
    <Header></Header>
    <div>
        <Container fluid>
          <Row>
            <Col xs={12} >
                <AddNewTask />
            </Col>
        </Row>
        <Row>
            <Col >
            <ShowTask/>
            </Col>            
        </Row>
        </Container>           
    </div>
    <BrowserRouter>
        <Routes>
            <Route path = "/Edit" element ={<EditTask/>}/>
        </Routes>
    </BrowserRouter>
    </>
    );
}

