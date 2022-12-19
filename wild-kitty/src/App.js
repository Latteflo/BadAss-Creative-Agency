import "./App.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import {
  faBars,
  faMagnifyingGlass,
  faPhone,
  faBookmark,
  faGlobe,
  faHashtag,
  faExclamationCircle,
} from "@fortawesome/free-solid-svg-icons"

library.add(
  faMagnifyingGlass,
  faPhone,
  faBars,
  faBookmark,
  faGlobe,
  faHashtag,
  faExclamationCircle
)

function App() {
  return (
    <>
      <div className="white-bg"></div>
      <div className="big-cat ukiyo"></div>
      <div className="red-bg"></div>
      <div className="container"></div>
      <div className="search-bar">
        <input
          className="search-input"
          type="text"
          name="search"
          placeholder="Search"
        />
        <button className="search">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
      <div className="hero">
        <div className="sidebar right">
          <ul>
            <li>
              <h2>01</h2>
            </li>
            <li>
              <h2>02</h2>
            </li>
            <li>
              <h2>03</h2>
            </li>
            <li>
              <h2>04</h2>
            </li>
          </ul>
        </div>
        <div className="slider">
          <h2 className="black">BADASS </h2>
          <h2 className="white">+</h2>
          <h2 className="red"> CREATIVE</h2>
        </div>
        <div className="contact">
          <button className="contact-btn">
            <FontAwesomeIcon icon={faPhone} />
          </button>
          <button className="menu-btn">
            <FontAwesomeIcon icon={faBars} />
          </button>
          <h3>Hit me up</h3>
          <h3 className="vertical">Menu</h3>
        </div>
        <div className="hero-text">
          <h1>
            <span>We are</span>
            BadAss+
            <br />
            Creative Agency
          </h1>
          <button>
            Show me what you've got <hr />
          </button>
        </div>
        <div className="sidebar left">
          <ul>
            <li>
              <FontAwesomeIcon icon={faBookmark} />{" "}
            </li>
            <li>
              <FontAwesomeIcon icon={faGlobe} />{" "}
            </li>
            <li>
              <FontAwesomeIcon icon={faHashtag} />{" "}
            </li>
            <li>
              <FontAwesomeIcon icon={faExclamationCircle} />{" "}
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default App
