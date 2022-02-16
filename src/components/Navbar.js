import React from 'react';
import { NavLink } from 'react-router-dom';
import {Container, Nav, Navbar} from "react-bootstrap";

export const NavBar = () => (
    <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
            <NavLink className="navbar-brand" to="/">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="img"
                />
                GithubSearch
            </NavLink>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <NavLink to="/" className='nav-link'>Главная</NavLink>
                    <NavLink to="/about" className='nav-link'>Информация</NavLink>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
)
