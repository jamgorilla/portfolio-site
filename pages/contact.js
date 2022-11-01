import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react';
//import ReCAPTCHA from "react-google-recaptcha";


function Contact() {

    const [values, setValues] = useState({
        yourname: "",
        service: "",
        emailAddress: "",
        budget: "",
        message: ""
    });

    const [submitted, setSubmitted] = useState(false);
    const [valid, setValid] = useState(false);

    const handleYourNameInputChange = (event) => {
        setValues({...values, yourname: event.target.value})
    }
    const handleServiceInputChange = (event) => {
        setValues({...values, service: event.target.value})
    }
    const handleEmailAddressInputChange = (event) => {
        setValues({...values, emailAddress: event.target.value})
    }
    const handleBudgetInputChange = (event) => {
        setValues({...values, budget: event.target.value})
    }
    const handleMessageInputChange = (event) => {
        setValues({...values, message: event.target.value})
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();

        if (values.yourname && values.service && values.emailAddress && values.budget && values.message) {
            setValid(true);
            //this is where make API call
            console.log(values)
            fetch('/api/mail', {
                method: 'post',
                body: JSON.stringify( values )
            })
        }

        setSubmitted(true);

    }

    function onSubmit(token) {
        document.getElementById("demo-form").submit();
      }


  return (
    <div className='contact-page'>

        <h1 className='contact-page-title'>Get in Touch</h1>
        <div className='orange-line anim' data-direction={false} data-delay={true}></div>

        <form className='contact-form' onSubmit={ handleFormSubmit }>
            { submitted && valid ? <div className="success-message">Success! Thank you for getting in contact.</div> : null}
            <div className='yourname-container'>
                <label htmlFor="yourname"><h4>Your Name</h4></label>
                <input 
                    type="text" 
                    id="yourname" 
                    onChange={ handleYourNameInputChange }
                    value={ values.yourname } 
                    name="yourname" 
                    className='contact-top-field-input'/>
                    { submitted && !values.yourname ? <span>Please enter a name</span> : null }
            </div>
            <div className='service-container'>
                <label htmlFor="service"><h4>Service</h4></label>
                <input 
                    type="text" 
                    id="service" 
                    onChange={ handleServiceInputChange }
                    value={ values.service } 
                    name="service" 
                    className='contact-top-field-input'/>
                    { submitted && !values.service ? <span>Please enter a service</span> : null }

            </div>
            <div className='emailAddress-container'>
                <label htmlFor="emailAddress"><h4>Email Address</h4></label>
                <input 
                    type="text" 
                    id="emailAddress"  
                    onChange={ handleEmailAddressInputChange }
                    value={ values.emailAddress } 
                    name="emailAddress" 
                    className='contact-top-field-input'/>
                    { submitted && !values.emailAddress ? <span>Please enter an email address</span> : null }
            </div>
            <div className='budget-container'>
                <label htmlFor="budget"><h4>Budget</h4></label>
                <input 
                    type="text" 
                    id="budget"  
                    onChange={ handleBudgetInputChange }
                    value={ values.budget } 
                    name="budget" 
                    className='contact-top-field-input'/>
                    { submitted && !values.budget ? <span>Please enter a budget for the project</span> : null }

            </div>
            <div className='message-container'>
                <label htmlFor="message"><h4>Message</h4></label>
                <textarea 
                    id="message"  
                    onChange={ handleMessageInputChange }
                    value={ values.message } 
                    name="message" />
                    { submitted && !values.message ? <span>Please enter a message describing the project</span> : null }

            </div>

            {/* <button className="g-recaptcha" 
                data-sitekey="reCAPTCHA_site_key" 
                data-callback='onSubmit' 
                data-action='submit'>Submit</button> */}

            <button className="contact-form-submit-button" type="submit"><h4>Submit</h4></button>
        </form>

    </div>
  )
}



export default Contact;