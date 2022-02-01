import Header from "./components/Header";
import "./App.css";
import "./utilities.css";
// images
import Node from "./images/logos/node.png"
import Python from "./images/logos/python.png"
import Csharp from "./images/logos/csharp.png"
import Ruby from "./images/logos/ruby.png"
import Php from "./images/logos/php.png"
import Scala from "./images/logos/scala.png"
import Clojure from "./images/logos/clojure.png"
import Cloud from "./images/cloud.png"
//fa Stats
import {FaServer} from "react-icons/fa";
import {FaUpload} from "react-icons/fa";
import {FaProjectDiagram} from "react-icons/fa";
//fa Footer
import {FaGithub} from "react-icons/fa";
import {FaFacebook} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
import {FaTwitter} from "react-icons/fa";



function App() {
  return (
    <div className="App">
      <div className="navbar">
        <div className="container flex">
            <h1 className="logo">Dojo Hosting.</h1>
            <nav>
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="features.html">Features</a></li>
                    <li><a href="docs.html">Docs</a></li>
                </ul>
            </nav>
        </div>
    </div>
    
    {/* <!-- Showcase --> */}
    <section className="showcase">
        <div className="container grid">
            <div className="showcase-text">
                <h1>Easier Deployment</h1>
                <p>Deploy web apps of all kinds, from large scale enterprise APIs to static websites for individuals. Fill out the form to try a demo of our platform</p>
                <a href="features.html" className="btn btn-outline">Read More</a>
            </div>

            <div className="showcase-form card">
                <h2>Request a Demo</h2>
                 <form>
                    <div className="form-control">
                        <input type="text" name="name" placeholder="Name" required />
                    </div>
                    <div className="form-control">
                        <input type="text" name="company" placeholder="Company Name" required />
                    </div>
                    <div className="form-control">
                        <input type="email" name="email" placeholder="Email" required />
                    </div>
                    <input type="submit" value="Send" className="btn btn-primary" />
                </form>
            </div>
        </div>
    </section>

    {/* <!-- Stats --> */}
    <section className="stats">
        <div className="container">
            <h3 className="stats-heading text-center my-1">
                Welcome to the best platform for building applications of all types with modern architecture and scaling
            </h3>

            <div className="grid grid-3 text-center my-4">
                <div>
                    <FaServer size ="4em" className="fas fa-3x"/>
                    <h3>10,349,405</h3>
                    <p className="text-secondary">Deployments</p>
                </div>
                <div>
                <FaUpload size ="4em"/>
                    <h3>987 TB</h3>
                    <p className="text-secondary">Published</p>
                </div>
                <div>
                <FaProjectDiagram size ="4em"/>
                    <h3>2,343,265</h3>
                    <p className="text-secondary">Projects</p>
                </div>
            </div>
        </div>
    </section>

    {/* <!-- Cli --> */}
    <section className="cli">
        <div className="container grid">
            <img src="./images/cli.png" alt=""/>
            <div className="card">
                <h3>Easy to use, cross platform CLI</h3>
            </div>
            <div className="card">
                <h3>Deploy in seconds</h3>
            </div>
        </div>
    </section>

    {/* <!-- Cloud --> */}
    <section className="cloud bg-primary my-2 py-2">
        <div className="container grid">
            <div className="text-center">
                <h2 className="lg">Extreme Cloud Hosting</h2>
                <p className="lead my-1">Cloud hosting like you've never seen. Fast, efficient and scalable</p>
                <a href="features.html" className="btn btn-dark">Read More</a>
            </div>
            <img src={Cloud} alt="" />
        </div>
    </section>

    {/* <!-- Languages --> */}
    <section className="languages">
        <h2 className="md text-center my-2">
            Supported Languages
        </h2>
        <div className="container flex">
            <div className="card">
                <h4>Node.js</h4>
                <img src={Node} alt="" />
            </div>
            <div className="card">
                <h4>Python</h4>
                <img src={Python} alt="" />
              </div>
              <div className="card">
                <h4>C#</h4>
                <img src={Csharp} alt="" />
              </div>
              <div className="card">
                <h4>Ruby</h4>
                <img src={Ruby} alt="" />
              </div>
              <div className="card">
                <h4>PHP</h4>
                <img src={Php} alt="" />
              </div>
              <div className="card">
                <h4>Scala</h4>
                <img src={Scala} alt=""/>
              </div>
              <div className="card">
                <h4>Clojure</h4>
                <img src={Clojure} alt=""/>
              </div>
        </div>
    </section>

    {/* <!-- Footer --> */}
    <footer className="footer bg-dark py-5">
        <div className="container grid grid-3">
            <div>
                <h1>Dojo hosting
                </h1>
                <p>Copyright &copy; 2022</p>
            </div>
            <nav>
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="features.html">Features</a></li>
                    <li><a href="docs.html">Docs</a></li>
                </ul>
            </nav>
            <div className="social">
                <a href="#"><FaGithub size ="2em" className="fas fa-3x"/></a>
                <a href="#"><FaFacebook size ="2em" className="fas fa-3x"/></a>
                <a href="#"><FaInstagram size ="2em" className="fas fa-3x"/></a>
                <a href="#"><FaTwitter size ="2em" className="fas fa-3x"/></a>
            </div>
        </div>
    </footer>
    </div>
  );
}

export default App;
