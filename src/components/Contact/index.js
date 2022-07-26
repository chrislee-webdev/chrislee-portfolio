// Contact-Component

import React, { useState } from "react";
import { validateEmail } from '../../utils/helpers';

function ContactForm() {

    const [errorMessage, setErrorMessage] = useState('')

    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message:''
    });

    const { name, email, message } = formState;

    function handleChange(e) {

        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);

            if (!isValid) {
                setErrorMessage('Your email is invalid');
            } else {
                setErrorMessage('');
            } 
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required`);
            } else {
                setErrorMessage('');
            }            
        }

        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
          }

        // console.log('errorMessage', errorMessage);
    }

    // console.log(formState);

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

   return (
    <section className="my-5">
    <h2>Contact me</h2>
    <form id="contact-form" onSubmit={handleSubmit}>
        <div>
            <label htmlFor="name">Name:</label> <br></br>
            <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
        </div>

        <div>
            <label htmlFor="email">Email address:</label> <br></br>
            <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
        </div>

        <div>
            <label htmlFor="message">Message:</label><br></br>
            <textarea name="message" row="10" defaultValue={message} onBlur={handleChange} />
        </div>

        {errorMessage && (
            <div>
                <p className="error-text">{errorMessage}</p>
            </div>
        )}

        <button type="submit">Submit</button>
    </form>
    </section>
   )
};

export default ContactForm;