import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../Hooks/useAuth';

const Header = () => {
  const {user, logout} = useAuth();
  console.log(user.displayName);
    return (

     <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg" >
        <Container className='px-3'>
          <Navbar.Brand  href="/home">Tour BD</Navbar.Brand>
          <Navbar.Toggle />
          {user.displayName? <div>
            <Navbar.Collapse className="justify-content-end">
            <Nav className="">
              <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
              <Nav.Link as={HashLink} to="/home#offer">Offer</Nav.Link>
              <Nav.Link as={HashLink} to="/about#about">About</Nav.Link>
              <Nav.Link as={HashLink} to="/home#contact">Contact Us</Nav.Link>
              <Nav.Link as={Link} to="/addAService">Add A Service</Nav.Link>
              <Nav.Link as={Link} to="/myOrder">My Order</Nav.Link>
              <Nav.Link as={Link} to="/manageOrder">Manage Order</Nav.Link>
              <div className='d-flex'>
                 <button onClick={logout} className='btn btn-danger'>Logout</button>
                  <h5 className='text-white ms-2'>{user.displayName}</h5>
                </div> 
            </Nav>
          </Navbar.Collapse>

          </div>:<div>
            <Navbar.Collapse className="justify-content-end">
            <Nav className="">
              <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
              <Nav.Link as={HashLink} to="/home#offer">Offer</Nav.Link>
              <Nav.Link as={HashLink} to="/about#about">About</Nav.Link>
              <Nav.Link as={HashLink} to="/home#contact">Contact Us</Nav.Link>
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
             
            </Nav>
          </Navbar.Collapse>

          </div>
          
        }
          
          </Container>
          </Navbar>

    );
};

export default Header;