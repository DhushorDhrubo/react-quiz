import React from 'react'
import Form from '../Form'
import Illustration from '../Illustration'
import TextInput from '../TextInput'
import Button from '../Button';

function LogIn() {
    return (
        <>
        <h1>Login to your account</h1> 
        <div className="column">
        <Illustration/>
       <Form className="login"> 


       <TextInput type='text' placeholder='Enter email' icon='alternate_email'/>

       <TextInput type='password' placeholder='Enter Password' icon='lock'/>

       <Button>
           <span> Submit Now </span>
       </Button>

       <div className="info">
       Don't have an account?<a href="signup.html">Signup</a> instead.
       </div>

       </Form>
        </div>
   </>
    )
}

export default LogIn
