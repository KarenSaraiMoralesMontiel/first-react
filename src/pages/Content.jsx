import './styles/Content.css'

function Content({randomKitty, handleRandomClick}) {
    return (
        <div className="container">
            <div className="card">
                <img 
                    src={randomKitty.optimizedUrl }
                    alt="Kitty" 
                />
            </div>
            <div className="quote">
                <p>{randomKitty.quote}</p>
            </div>
            <button onClick={handleRandomClick}>Show another image</button>
        </div>
    )
}

export default Content;