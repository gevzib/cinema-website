import React from 'react';
import { useState } from 'react';

//email address: elldancha@proton.me
//password: cinema-website

export default () => {
    let [subject, setSubject]= useState("");
    let [email, setEmail]= useState("");
    let [message, setMessage]= useState("");
    let test = {
        subject: 'no subject',
        email: 'no email',
        message: 'no message'
    };
    let [inputs, setInputs] = useState(test);

    function doInput(event) {
        if(event.target.name) {
            let newData = {...inputs};
            newData[event.target.name] = event.target.value;
            setInputs(newData);
        }
    }
    

    return (
        <div>
            <h1>Contact Us</h1>
            <form onInput={e=>{doInput(e)}}>
                <h3>Email</h3>
                <input name="email" placeholder='hello@example.com'></input>
                <h3>Subject</h3>
                <input name="subject"></input>
                <h3>Message</h3>
                <textarea name="message" placeholder="Let us know what's on your mind!"></textarea>
                <br />
                <input type="submit" value="Send" />
            </form>
        </div>
    )
};