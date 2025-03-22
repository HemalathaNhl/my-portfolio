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
            This is <strong>Hema</strong>, with 12 years of work experience in
            front-end development.
          </p>
          <p>
            Initially, I was into front-end development using Flash and
            ActionScript. Afterwards, started working with JavaScript
            technologies.
          </p>
          <p>
            My current skill set majorly includes{" "}
            <strong>
              Web development using HTML5, CSS3, Sass, JavaScript, TypeScript,
              React.js and Responsive web design.
            </strong>
          </p>
          <p>
            I have had opportunities to work on projects from e-learning,
            set-top box, insurance domains.
          </p>
          <p>
            I look forward to working on enhancing projects and contribute to
            the growth of organisations.
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
