import "./../App.css";
const Footer = () => {
  return (
    <div className="footer-details">
      <div className="contact" id="contact">
        <h3>Contact Me</h3>
        <ul>
          <li>
            <img className="phone" src="./images/phone.png" alt="Phone" />
            <span>+91-8296858648</span>
          </li>
          <li>
            <img className="email" src="./images/email.png" alt="Mail" />
            <a href="mailto:heman.techie@gmail.com">heman.techie@gmail.com</a>
          </li>
          <li>
            <img
              className="whatsapp"
              src="./images/whatsapp.png"
              alt="Whatsapp"
            />
            <span>+91-8296858648</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Footer;
