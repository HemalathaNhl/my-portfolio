import "./../App.css";
const Header = () => {
  return (
    <div className="header-details">
      <div className="services">
        <h3>Services</h3>
        <ul>
          <li>Web development</li>
        </ul>
      </div>
      <div className="technologies">
        <h3>Technologies</h3>
        <ul>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>Sass</li>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>React.js</li>
          <li>Responsive web design</li>
        </ul>
      </div>
      <div>
        <a href="#contact">
          <h3>Contact</h3>
        </a>
      </div>
    </div>
  );
};
export default Header;
