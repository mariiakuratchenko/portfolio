import React, { useState } from 'react';
import './CSS/contact.css';

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
        </div>
    )
}

function ContactForm() {
    const [name, setName] = useState("");    
    const [surname, setSurname] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [selected_service, setSelected_service] = useState('general_programming');

    function handleNameChange(e) {
      setName(e.target.value);
    }
    
    function handleSurnameChange(e) {
      setSurname(e.target.value);
    }
    
    function handlePhoneChange(e) {
      setPhone(e.target.value);
    }
    
    function handleEmailChange(e) {
      setEmail(e.target.value);
    }
    
    function handleAddressChange(e) {
      setAddress(e.target.value);
    }
    
    function handleServiceChange(e) {
      setSelected_service(e.target.value);
    }
  
    function handleSubmit(e) {
      e.preventDefault();
      alert(name + " " + surname + " " + phone + " " + email + " " + address + " " + selected_service);
    }

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <label>Enter your name:
            <input
              type="text" 
              value={name}
              onChange={handleNameChange}
            />
          </label>
          <br />
          <label>Enter your surname:
            <input
              type="text" 
              value={surname}
              onChange={handleSurnameChange}
            />
          </label>
          <br />
          <label>Enter your phone:
            <input
              type="text" 
              value={phone}
              onChange={handlePhoneChange}
            />
          </label>
          <br />
          <label>Enter your email:
            <input
              type="email" 
              value={email}
              onChange={handleEmailChange}
            />
          </label>
          <br />
          <label>Enter your address:
            <input
              type="text" 
              value={address}
              onChange={handleAddressChange}
            />
          </label>  
          <br />
          <p>Select what service you interested in:</p>
          <label>
            <input 
              type="radio" 
              name="service" 
              value="general_programming" 
              checked={selected_service === 'general_programming'} 
              onChange={handleServiceChange} 
            /> General Programming
          </label>
          <br />
          <label>
            <input 
              type="radio" 
              name="service" 
              value="game_development" 
              checked={selected_service === 'game_development'} 
              onChange={handleServiceChange} 
            /> Game Development
          </label>
          <br />
          <label>
            <input 
              type="radio" 
              name="service" 
              value="software_development" 
              checked={selected_service === 'software_development'} 
              onChange={handleServiceChange} 
            /> Software Development
          </label>
          <br />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }

export default ContactPage;
