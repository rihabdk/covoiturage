import {React , useState} from 'react';
import '../styles/SignUp.css';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import carpool from "../images/ima.png"
import image from "../images/talan.jfif"

import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBRow,
  MDBCol,
  MDBCheckbox
}
from 'mdb-react-ui-kit';

function SignUp() {
 const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(false);

  function validateEmail() {
    const re = /^[^\s@]+@talan.com+$/;
    setIsValid(re.test(email));
  }

  function handleSubmit(e) {
    e.preventDefault();
    validateEmail();
  }

  return (

<div>
<Navbar bg="light" expand="lg">
    <Navbar.Brand href="#"></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        
        <img src={image} alt="Nom de l'image" style={{ width: '1500px', height: '200px'}}/>

      </Nav>
    </Navbar.Collapse>
  </Navbar> 
   <form onSubmit={handleSubmit}>
     
      
  

    <MDBContainer fluid className='my-5'>

      <MDBRow className='g-0 align-items-center'>
        <MDBCol col='6'>

          <MDBCard className='my-5 cascading-right' style={{background: 'hsla(0, 0%, 100%, 0.55)',  backdropFilter: 'blur(30px)'}}>
            <MDBCardBody className='p-5 shadow-5 text-center'>

              <h2 className="fw-bold mb-5">Sign up now</h2>

              <MDBRow>
                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4' label='First name' id='form1' type='text'/>
                </MDBCol>

                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4' label='Last name' id='form2' type='text'/>
                </MDBCol>
              </MDBRow>
              

              <MDBInput wrapperClass='mb-4' label='Phone number' id='form3' type='number'/>
              <MDBInput wrapperClass='mb-4' label='Email' id='form3' type='email' value={email} onChange={e => setEmail(e.target.value)}/>

              <MDBInput wrapperClass='mb-4' label='Password' id='form4' type='password'/>

              <Link to="/test">
               <MDBBtn className='w-100 mb-4' size='md'>sign up</MDBBtn>
               </Link>

               {isValid ? <p> Valid email</p> : <p>Invalid email</p>}
              <div className="text-center">


                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='facebook-f' size="sm"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='twitter' size="sm"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='google' size="sm"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='github' size="sm"/>
                </MDBBtn>

              </div>

            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol col='6'>
          <img src={carpool} className="w-100 rounded-4 shadow-4"
            alt="" fluid/>
        </MDBCol>

      </MDBRow>

    </MDBContainer>      </form> </div>


  );
}

export default SignUp;