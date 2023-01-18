import React, {useState, useEffect} from "react"
function Meme() {
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "", 
        randomImage: "https://i.imgflip.com/30b1gx.jpg"

    })
    const [allMemes, setAllMemes] = useState([])
    
    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemes(data.data.memes))

    })
    function toggle() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prevState => ({
            ...prevState,
            randomImage: url
        }))
    }
    function handleChange(event) {
        const [name, value] = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }
    return(
        <main>
            <div className="meme-form">
                <input 
                type="text"
                name="topText"
                className="form-input"
                placeholder="Top text"
                value={meme.topText}
                onChange={handleChange}
                />
                        
                <input 
                type="text"
                name="bottomText"
                className="form-input"
                placeholder="Bottom text"
                value={meme.bottomText}
                onChange={handleChange}
                />
                <button className="btn-btn" onClick={toggle}>Get a new meme image  🖼</button>

                      
           </div>
           <div className="meme-container">
            <img src={meme.randomImage} className="meme-image" />
            <h2 className="meme-text top">{meme.topText}</h2>
            <h2 className="meme-text bottom">{meme.bottomText}</h2>
           </div>
        </main>
        
    )
}
export default Meme