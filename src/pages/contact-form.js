import React from 'react';
import Menu from "../components/menu/menu";

const ContactForm = (props) => {
    return (
        <div class='page contact-form-page'>
            <Menu/>
            <h1>Hello World from Contact Page</h1>
            <form method={'POST'}>
                <p>
                    <label for="name">Your name: </label>
                    <input type={'text'} name={'name'} placeholder={'Please enter your name'}/>
                </p>
                <p>
                    <label for="email">Your email: </label>
                    <input type={'email'} name={'email'} placeholder={'Please enter your email'}/>
                </p>
                <input type={'submit'} value={'Submit'}/>
            </form>
        </div>
    )
};

export default ContactForm;