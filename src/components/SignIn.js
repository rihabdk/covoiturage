import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import image from "../images/talan.jfif"
import { Link } from 'react-router-dom';

import carpool from "../images/car.png"
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';

function SignIn() {
  return ( 
    <div>     <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#"></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        
        <img src={image} alt="Nom de l'image" style={{ width: '1500px', height: '200px'}}/>

      </Nav>
    </Navbar.Collapse>
  </Navbar> 
    <MDBContainer className='my-5'>
      <MDBCard>

        <MDBRow className='g-0 d-flex align-items-center'>

          <MDBCol md='4'>
            <MDBCardImage src={carpool} alt='phone' className='rounded-t-5 rounded-tr-lg-0' fluid />
          </MDBCol>

          <MDBCol md='8'>

            <MDBCardBody>

              <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email'/>
              <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password'/>

              <div className="d-flex justify-content-between mx-4 mb-4">
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                <a href="!#">Forgot password?</a>
              </div>

              <MDBBtn className="mb-4 w-100">Sign in</MDBBtn>
              <Link to="/">
              <MDBBtn className="mb-4 w-100">Create a new account</MDBBtn>

             
              
              </Link>
            </MDBCardBody>

          </MDBCol>

        </MDBRow>

      </MDBCard>
    </MDBContainer>   </div>

  );
}

export default SignIn;