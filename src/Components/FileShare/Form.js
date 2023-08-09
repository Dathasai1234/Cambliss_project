import React, { useState } from 'react';
import axios from 'axios';
import Style from './Form.module.css';

const Form = () => {    
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [subject, setSubject] = useState('');
const [message, setMessage] = useState('');

const handleSubmit = async (e) => {
e.preventDefault();

const emailData = {
    to: 'dathasaichandu@gmail.com',
    from: email,
    subject,
    text: message,
    html: `<strong>${message}</strong>`,
};

try {
    await axios.post('/send-email', emailData);
    console.log('Email sent successfully');
} catch (error) {
    console.error('Error sending email:', error);
}
};

return (
<div className={Style.form}>
    <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

        <label>Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

        <label>Subject</label>
        <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} />

        <label>Message</label>
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} />

        <button type="submit">Send Email</button>
    </form>
</div>
);
};

export default Form;
