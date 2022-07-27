
import React, { useState } from 'react';

function Contact() {

  const regex = /^(([^<>()[].,;:s@"]+(.[^<>()[].,;:s@"]+)*)|(".+"))@(([^<>()[].,;:s@"]+.)+[^<>()[].,;:s@"]{2,})$/i;

const [email, setEmail] = useState('');
const [error, setError] = useState('');
const msg = useState('');
const email1 = '@';


  const checkEmail = (e) => {
    setEmail(e.target.value);

    if(regex.test(email)=== false){
      setError('Please enter valid email');
    }
    else{
      setError('');
      return true;
    }

  }

  const submit = () => {
    if(email.includes(email1)){
    alert(`Email Submitted! Thank you ` + email);
  }
  else{
    alert('Invalid email');
  }
}
  

  return (
    <div>
      <section id="hero">
        <div className="container">
          {/* <div className="logo">
          <img src="./img/computer.png" className="logo" alt = "" width=""/>
          </div> */}
        </div>
        <div className="hero2">
          <h1 className="hero-heading">Contact Us</h1>
        </div>
        <form>
          <div className ="input-group">
           <p className='label-text'>Name</p>
            <input type ="text" className ="name"/>
           
      </div>
       
          <div className ="input-group">
          <p className='label-text'>Phone Number</p>
            <input type ="text" className ="number"/>
      </div>
          <div className ="input-group">
          <p className='label-text'>Email</p>
            <input type ="email" className ="email" onChange = {checkEmail} />
            <p className='text-danger'>{error}</p>
      </div>
           <div className ="input-group">
           <p className='label-text'>Comments</p>
            <textarea id ="comments" row ="8"></textarea>
            </div>
             <input type="submit" className='btn-btn' onClick={submit}/>

             <p className='success'>{msg}</p>
        </form>
      </section>
    </div>
  )
}


export default Contact;

