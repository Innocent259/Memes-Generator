import troll from "../images/troll-face.png"

function Navbar() {
    return(
        <header className="navbar">
            <img src={troll} className="nav-image" />
            <h1 className="nav-title">Meme Generator</h1>
            <h2 className="nav-paragraph">React project</h2>
        </header>
    ) 
}
export default Navbar