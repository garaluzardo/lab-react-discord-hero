import logoWhite from "./assets/discord-logo-white.png";
import background from "./assets/discord-background.png";
import menuIcon from "./assets/menu-icon.png";
import './App.css'

function App() {
  return (
    <div className="App">

      <header className="header">
        <img src={logoWhite} alt="Discord Logo" className="logo" />
        <img src={menuIcon} alt="Menu Icon" className="menu-icon" />
      </header>

      <div className="section1">
        <h1>Imagine a place...</h1>
        <p>...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.</p>
        <div className="buttons">
          <button className="download-button">Download for Mac</button>
          <button className="open-button">Open Discord in your browser</button>
        </div>
      </div>
    </div>
  );
}

export default App
