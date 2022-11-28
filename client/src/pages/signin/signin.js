import React from 'react';
import {
  MDBContainer,
  MDBInput,
  MDBBtn,
}
from 'mdb-react-ui-kit';

function Signin() {
  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

      <MDBInput wrapperClass='mb-4' label='Username' id='form1' type='text'/>
      <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password'/>

      <MDBBtn className="mb-4">Sign in</MDBBtn>

    </MDBContainer>
  );
}

export default Signin;