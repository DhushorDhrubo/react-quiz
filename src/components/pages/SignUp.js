import React from 'react';
import '../../styles/SignUp.css';
import Button from '../Button';
import Checkbox from '../Checkbox';
import Form from '../Form';
import Illustration from '../Illustration';
import TextInput from '../TextInput';

function SignUp() {
    return (
        <>
             <h1>Create an account</h1> 
             <div className="column">
             <Illustration/>
            <Form className="signup"> 

            <TextInput type='text' placeholder='Enter name' icon='person'/>

            <TextInput type='text' placeholder='Enter email' icon='alternate_email'/>

            <TextInput type='password' placeholder='Enter Password' icon='lock'/>

            <TextInput type='password' placeholder='Confirm Password' icon='lock_clock'/>

            <Checkbox text='I agree to the Terms & Conditions'/>

            <Button>
                <span> Submit Now </span> 
            </Button>

            <div className="info">
              Already have an account? <a href="login.html">Login</a> instead.
            </div>

            </Form>
             </div>
        </>
    )
}

export default SignUp
