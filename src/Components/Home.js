import React from "react";
import Header from "./Header";
//import {BrowserRouter, Routes , Route} from 'react-router-dom';
import {AddNewTask} from './AddNewTask';
import Container from "react-bootstrap/esm/Container";
import {Col,Row} from "react-bootstrap/esm";




export const Home = ()=>{
    return(
        <>
    <Header></Header>
    <div>
        <Container fluid>
          <Row>
            
            <Col xs={9} >
            <AddNewTask />
            </Col>
        </Row>
        </Container>    
    </div>
    </>
    );
}

