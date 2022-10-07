import "./App.css";
// import Imagess from "./image";
import hemo1 from "./images/hemo.jpg";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function App() {
  return (
    <div className="App">
      <img className="user1" src={hemo1} alt={"Ibrahim Jarrah"} />
      <p className="name">Ibrahim Jarrah</p>
      <p className="job">Full Stack Developer</p>
      <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJvkXlqjGncvBWPvHMqZnGjsWMFLsXNGsbKfgPwvNcSjwNQndfGKzQkQrjTLdsClmvLRQxV">
        <button className="btn1">Email</button>
      </a>
      <a href="https://www.linkedin.com/in/ibrahim-jarrah-995b56153">
        <button className="btn2">LinkedIn</button>
      </a>
      <p className="about">
        <h1 className="first"> About</h1>
        <p className="bdy">
          Ibrahim Jarrah recently earned masters degree in computer and
          communication engineering, with development skills especially in
          ReactJs,NodeJs,CSS,HTML,and JS. Seeking an entry level position to
          gain experience and be a part of your company.
        </p>
      </p>
      <p className="skills">
        <h1 className="seconed">Skills</h1>
        <p className="bdy1">
          <ul>
            <li>Work under presssure</li>
            <li>Team player and leader</li>
            <li>Loyal,and creative</li>
            <li>Time Management</li>
          </ul>
        </p>
      </p>
      <footer className="aboutMe">
        <a href="https://www.facebook.com/ibrahim.jarrah.3">
          <FaFacebook className="icon1" />
        </a>

        <a href="https://www.linkedin.com/in/ibrahim-jarrah-995b56153">
          <FaLinkedin className="icon2" />
        </a>
      </footer>
    </div>
  );
}

export default App;
