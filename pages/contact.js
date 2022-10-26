import Image from 'next/image'
import Link from 'next/link'




function Contact() {

  return (
    <div className='contact-page'>

        <h1 className='contact-page-title'>Get in Touch</h1>
        <div className='orange-line anim' data-direction={false} data-delay={true}></div>

        <form className='contact-form'>
            <div className='yourname-container'>
                <label htmlFor="yourname"><h4>Your Name</h4></label>
                <input type="text" id="yourname" name="yourname" className='contact-top-field-input'/>
            </div>
            <div className='service-container'>
                <label htmlFor="service"><h4>Service</h4></label>
                <input type="text" id="service" name="service" className='contact-top-field-input'/>
            </div>
            <div className='emailAddress-container'>
                <label htmlFor="emailAddress"><h4>Email Address</h4></label>
                <input type="text" id="emailAddress" name="emailAddress" className='contact-top-field-input'/>
            </div>
            <div className='budget-container'>
                <label htmlFor="budget"><h4>Budget</h4></label>
                <input type="text" id="budget" name="budget" className='contact-top-field-input'/>
            </div>
            <div className='message-container'>
                <label htmlFor="message"><h4>Message</h4></label>
                <input type="text" id="message" name="message" />
            </div>
        </form>

    </div>
  )
}



export default Contact;