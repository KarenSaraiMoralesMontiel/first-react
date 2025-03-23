import { Routes, Route } from "react-router-dom";  // Ensure correct filename casing
import { useState, useEffect, useCallback } from "react";
import kittyService from './services/kittys/kittyService';
import About from "./pages/About";
import Header from "./components/Header"
import Footer from "./components/Footer"
import Content from "./pages/Content"
import './App.css'

function App() {
    const [randomKitty, setRandomKitty] = useState({});

    // Fetch random kitty and set state
    const randomKittyHook = (() => {
        kittyService
            .getRandomKitty()
            .then(initialRandomKitty => {
                setRandomKitty(() => initialRandomKitty); // Ensures latest state
            })
            .catch(error => console.error("Error fetching random kitty:", error));
    }, []);

    // Fetch a kitty when the app first loads
    useEffect(() => {
        randomKittyHook();
    }, [randomKittyHook]);

    // Button click handler to fetch a new kitty
    const handleRandomClick = () => {
        randomKittyHook();
    };

    return (
        <div className="App">
            <Header /> 
            <Routes>
                <Route path="/" 
                element={<Content 
                    randomKitty={randomKitty}  
                    handleRandomClick={handleRandomClick} />} />
                <Route path="/about" element={<About />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;