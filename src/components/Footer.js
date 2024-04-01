import "./../App.css";
const Footer = () => {
  return (
    <div className="footer-details">
      <div className="contact" id="contact">
        <h3>Contact Me</h3>
        <ul>
          <li>
            <img
              className="phone"
              src="/my-portfolio/images/phone.png"
              alt="Phone"
            />
            <span>+91-8296858648</span>
          </li>
          <li>
            <img
              className="email"
              src="/my-portfolio/images/email.png"
              alt="Mail"
            />
            <a href="mailto:hemalatha.nhl@gmail.com">hemalatha.nhl@gmail.com</a>
          </li>
          <li>
            <img
              className="whatsapp"
              src="/my-portfolio/images/whatsapp.png"
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
