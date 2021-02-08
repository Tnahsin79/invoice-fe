import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem
} from 'reactstrap';
import routes from '../routes';
import { Link } from "react-router-dom";

const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const logout = (e) => {
        localStorage.removeItem("capstone");
    }

    return (
        <div className="container header">
            <Navbar color="light" light expand="md">
                <Link className="nav-brand" to={routes.home}>HOME</Link>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <Link className="nav-link" to={routes.signup}>Signup</Link>
                        </NavItem>
                        {
                            localStorage.getItem('capstone') ?
                                <NavItem>
                                    <Link className="nav-link" to={routes.login} onClick={logout}>Log Out</Link>
                                </NavItem>
                                :
                                <NavItem>
                                    <Link className="nav-link" to={routes.login}>Login</Link>
                                </NavItem>
                        }
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Header;