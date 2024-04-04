import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Copyright from "./components/Copyright";
function App() {
  return (
    <div>
      <h2 className="name">Hemalatha N</h2>
      <Header />
      <div className="bio">
        <div className="desc">
          <p>
            This is <strong>Hema</strong>, with 12 years of experience in
            Front-end development.
          </p>
          <p>
            Initially, I was into Front-end development using Flash and
            ActionScript. Later on, moved onto JavaScript technologies.
          </p>
          <p>
            My current skill set majorly includes{" "}
            <strong>
              Web development using HTML5, CSS3, Sass, JavaScript, TypeScript,
              React.js and Responsive web design.
            </strong>
          </p>
          <p>
            I have had an opportunity to work on projects from e-learning,
            set-top box, insurance domains.
          </p>
          <p>
            I'm looking forward to working on great projects for clients around
            globe.
          </p>
          <p>
            Reach out to me with your ideas and specifications. And, You shall
            have a great web application!!
          </p>
        </div>
        <img
          src="/my-portfolio/images/hema-solo-pp.png"
          alt="Hemalatha N"
          className="picture"
        />
      </div>
      <Footer />
      <Copyright />
    </div>
  );
}

export default App;
