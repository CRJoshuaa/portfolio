import React, { useRef, useState } from 'react'
import "./index.scss"
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import EmailIcon from '@mui/icons-material/Email';
import emailjs from '@emailjs/browser';

const Contact = () => {
   

    const formRef=useRef();
    const [done,setDone]=useState(false)

    //UNCOMMENT SECTIONS FOR EMAIL SERVER
    // const handleSubmit=(e)=>{
    //     e.preventDefault()
    //     emailjs.sendForm('service_iemvdyq', 
    //                     'template_zoid26j', 
    //                     formRef.current, 
    //                     process.env.REACT_APP_EMAILJS_PUB_KEY)
    //             .then((result) => {
    //                 console.log(result.text);
    //                 setDone(true)
    //             }, (error) => {
    //                 console.log(error.text);
            
    //             });
    // }

    return (
        <div className='contact'>
            <div className="contact-bg"></div>
            <div className="contact-wrapper">
                <div className="contact-left">
                    <h1 className="contact-title">Let's have a chat</h1>
                    <div className="contact-info">
                        <div className="contact-info-item">
                            <ContactPhoneIcon className='contact-info-item-icon'/>
        
                            +6017-8897-953
                        </div>
                        <div className="contact-info-item">
                            <EmailIcon className='contact-info-item-icon'/>
                            joshuaa.chales@gmail.com
                        </div>
                    </div>
                </div>
                <div className="contact-right">
                    <p className="contact-description">
                        <b>What can I do for you?</b>  You get an addition in workforce, I
                        get a growth in experience. If you're interested, let's link up.
                    </p>
                    {/* <form ref={formRef} onSubmit={handleSubmit}>
                        <input type="text" placeholder='Name' name="user_name" />
                        <input type="text" placeholder='Subject' name="user_subject" />
                        <input type="text" placeholder='Email' name="user_email" />
                        <textarea rows="5" placeholder='Message' name="message" ></textarea>
                        <button>Submit</button>

                        {done && 
                        <div>
                            Thank you for reaching out!
                        </div>}
                    </form> */}
                </div>
            </div>
        </div>
    )
}

export default Contact