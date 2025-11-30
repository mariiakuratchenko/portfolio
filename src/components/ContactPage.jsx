import React from 'react';
import { Link } from 'react-router-dom';
import './CSS/contact.css';
import ContactForm from "./ContactForm";

function ContactPage(){
    return(
        <div className="contact-container">
            <h2>My Contact Information</h2>
            <p>mariiakuratchenko@gmail.com</p>
            <p>+1 (437) 234-1331</p>
            <p>Toronto, Ontario, Canada</p>
            <a href="https://github.com/mariiakuratchenko">GitHub</a>
            <br/><br/>
            <h2>Leave Your Information</h2>
            <ContactForm />
            <br/>
            <Link 
                to="/contacts"
                style={{
                    padding: '10px 20px',
                    backgroundColor: '#007bff',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '4px',
                    display: 'inline-block',
                    marginTop: '20px'
                }}
            >
                View All Contacts
            </Link>
        </div>
    )
}

export default ContactPage;
