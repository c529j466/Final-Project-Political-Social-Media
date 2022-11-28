import React, { useState } from 'react';
import {
  MDBContainer,
  MDBBtn,
  MDBInput,
}
from 'mdb-react-ui-kit';

function VoterSignup() {

  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

          <MDBInput wrapperClass='mb-4' label='Username' id='form1' type='text'/>
          <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email'/>
          <MDBInput wrapperClass='mb-4' label='Password' id='form1' type='password'/>

          <MDBBtn className="mb-4 w-100">Sign up</MDBBtn>

    </MDBContainer>
  );
}

export default VoterSignup;