import React from 'react'
import {Navbar, Nav, Form, Button,} from 'react-bootstrap'


const navg = () => {
    return (
    
        <div>
            <Navbar  bg="light" variant="light">
                <Navbar.Brand href="#home">My Blog</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Profile</Nav.Link>
                    <Nav.Link href="#pricing">Features</Nav.Link>
                </Nav>
                <Form inline>
                   
                    <Button variant="outline-primary">log out</Button>
                </Form>
            </Navbar>
            
        </div>
    )
}

export default navg
