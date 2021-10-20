import React from 'react';
import { Button,Container, Nav, Navbar } from 'react-bootstrap';
import logo from './images/logo.png'
import './Header.css'
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
const Header = () => {
  const {user, handleLogOut} = useAuth()
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="info" variant="dark">
  <Container>
  <Navbar.Brand to="#home"> <img src={logo} alt=""  className="logo mx-2 "/><strong className="fs-3 p-1">0ne Dental Care</strong></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav" className="text-white fw-bold fs-5 text-center">
    <Nav className="ms-auto ">
      <NavLink className="anchor mx-2" to="/home">Home</NavLink>
      <NavLink className="anchor mx-2" to="/services">Services</NavLink>
      <NavLink className="anchor mx-2" to="/prices">Prices</NavLink>
      <NavLink className="anchor mx-2" to="/ourdentist">Our Dentist</NavLink>
      <NavLink className="anchor mx-2" to="/booking">Booking</NavLink>
    </Nav>
    <Nav className="ms-auto text-white">
      {
        user?.email && <h6 className="text-black mx-2 mt-2">{user.displayName}</h6>
      }
      {
        user?.email ? <Button className=" btn-light mx-auto" onClick={handleLogOut}>Log out</Button> :
        <NavLink className="anchor mx-2" to="/login">Login</NavLink>
      }
      <NavLink className="anchor mx-2" to="/register">
        Register
      </NavLink>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;