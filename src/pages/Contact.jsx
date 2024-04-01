import { useState } from 'react';

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleInputChange = (e) => {
        // Get the value and name of the input which triggered the change 
        const {target} = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType == 'name') {
            // Update the state of name 
            setName(inputValue);
        } else if (inputType == 'email') {
            const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

            setEmail(inputValue);

            if (regex.test(inputValue)) {
                // Update the state of email if a valid email address was entered 
                setEmail(inputValue);
                setError('');
            } else {
                // Notify the user if the email is invalid 
                setError('Oops! Please enter a valid email address');
            }
        } else {
            // Update the state of message 
            setMessage(inputValue);
        }
    
    }

    const validateFilled = (e) => {
        const {target} = e;
        const inputType = target.name;
        const inputValue = target.value;

        // Check if the inputValue is valid 
        if(!inputValue) {
            // Notify the user that the field is required
            setError(`The ${inputType} field is required!`);
        } else {
            setError('');
        }
    }

    const handleFormSubmit = (e) => {
        // Prevent the default behavior of the form submit, which is to refresh the page
        e.preventDefault();

        const formData = new FormData(e.target);

        fetch("https://getform.io/f/pbgxppxa", {
            method: "POST",
            body: formData,
            headers: {
                "Accept": "application/json",
            },
        })
        .then(response => console.log(response))
        .catch(error => console.log(error))

        // Reset states 
        setName('');
        setEmail('');
        setMessage('');
        setError('');
    }

    return (
        <section id="contact" className='section d-flex flex-column justify-content-center align-items-start'>
            <div>
                <h2 className='section-title type-animate'>Want to send me a message?</h2>
                <p>Fill out the fields below and submit the form to get in contact with me! </p>
            </div>
            <form className='form' onSubmit={handleFormSubmit}>
                <div className='form-field my-2'>
                    <input required value={name} name="name" onChange={handleInputChange} onBlur={validateFilled} type="text" size="75" placeholder="What's your name?"/>
                </div>
                <div className='form-field my-2'>
                    <input required value={email} name="email" onChange={handleInputChange} onBlur={validateFilled} type="email" size="75" placeholder="What email address can I reach you at?" />
                </div>
                <div className='form-field my-2'>
                    <textarea required value={message} name="message" onChange={handleInputChange} onBlur={validateFilled} cols="74" rows="10" placeholder='Write your message here!'></textarea>
                </div>
                {error && (
                    <div>
                        <p className="error-text">* {error} *</p>
                    </div>
                 )}
                <div className='my-2'>
                    <button className='form-submit-btn' type='submit'>Send!</button>
                </div>
            </form>
            
        </section>
    );
}