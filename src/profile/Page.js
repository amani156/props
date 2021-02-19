import React from 'react'
import './style.css';
import { Nav ,Col, Row, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import FullName from './FullName';
import Bio from "./Bio";
import Profession from "./Profession";





const Page = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col className="first" className="block">
                        <Nav defaultActiveKey="/home" className="flex-column">
                            <Nav.Link href="/home">My website</Nav.Link>
                            <Nav.Link eventKey="link-1">acheivements</Nav.Link>
                            <Nav.Link eventKey="link-2">inventions</Nav.Link>
                            <Nav.Link eventKey="disabled" disabled>
                                disabled
                            </Nav.Link>
                        </Nav>
                    </Col>



                    <Col className="second">
                    <FullName name="Stewie Griffin ">
                        <img src="/img/stewie.jpg" alt="profile pic"/>
                    </FullName>

                    <Bio name="Stewie Griffin" age="2 years old"/>
                    <Profession job="world class scientist" hobby="time travel"/>
                    </Col>
                </Row>

            </Container>
        </div>
    )
}

export default Page



