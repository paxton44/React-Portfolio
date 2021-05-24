import React from "react";
import {Nav, } from "react-bootstrap";
import Link from "react-router-dom";


const AppNavBar = () => (
  <Nav activeKey="/home">
  <Nav.Item>
    <Nav.Link href="./HomePage" eventKey="Home">Mitch Flood
    </Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href="./Portfolio" eventKey="Portfolio">Portfolio</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href="./ContactInfo" eventKey="Contact">Contact</Nav.Link>
  </Nav.Item>
</Nav>
);

export default AppNavBar;
