import React from 'react'

export const Footer = () => {
  return (
    <div className ="footer-container">
      <div className ="footer">
        <div className ="footer-heading footer-1">
          <h2>Contact Us For Further Questions</h2>
          <a href="Contact.html">Email</a>
          <a href="Contact.html">Phone</a>
          <a href="Contact.html">Comments</a>
        </div>
         <div className ="footer-heading footer-2">
          <h2>Follow Our Social Medias!</h2>
          <a href="https://www.instagram.com/laurraaag/">Instagram</a>
          <a href="https://twitter.com/explore">Twitter</a>
          <a href="https://www.facebook.com/">Facebook</a>
          <a href="https://www.linkedin.com/login">LinkedIn</a>
        </div>
        <div className ="footer-email-form">
          <h2>Join Our Newsletter</h2>
          <input type="email" id="email"
            placeholder="Enter Email address" htmlFor="footer-email"/>
          <input type="submit" value="Sign Up" id="footer-email-btn"/>
        </div>
        </div>
      </div>
  )
}
export default Footer;
