import "./App.css";
import social from "./assets/social-media.svg";
import avatar from "./assets/avatar.jpg";

function App() {
    return (
        <>
            <div className="banner">
                <img src={avatar} alt="Rohan Kumar" />
                <div className="description">
                    <h2>Rohan Kumar</h2>
                    <p>
                        👋 Hi there! I am a passionate software developer with
                        expertise across multiple platforms. My journey in the
                        tech world has led me to work with a diverse set of
                        languages, including JavaScript, Java, .NET, C#, Python,
                        and Go.
                    </p>
                </div>
            </div>
            <div className="socials">
                <h2>
                    <span>
                        <img src={social} width="50" alt="" />
                    </span>
                    My Socials
                </h2>
                <div className="wrapper">
                    <a href="https://www.linkedin.com/in/rohank05/">
                        <div className="icon linkedin">
                            <div className="tooltip">LinkedIn</div>
                            <span>
                                <i className="fab fa-linkedin"></i>
                            </span>
                        </div>
                    </a>

                    <a href="https://twitter.com/rohank05">
                        <div className="icon twitter">
                            <div className="tooltip">Twitter</div>
                            <span>
                                <i className="fab fa-twitter"></i>
                            </span>
                        </div>
                    </a>

                    <a href="https://www.instagram.com/rohank1251/">
                        <div className="icon instagram">
                            <div className="tooltip">Instagram</div>
                            <span>
                                <i className="fab fa-instagram"></i>
                            </span>
                        </div>
                    </a>

                    <a href="https://github.com/rohank05">
                        <div className="icon github">
                            <div className="tooltip">Github</div>
                            <span>
                                <i className="fab fa-github"></i>
                            </span>
                        </div>
                    </a>
                </div>
            </div>
        </>
    );
}

export default App;
