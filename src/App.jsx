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
  
    // Simplified fetch function
    const fetchRandomKitty = useCallback(async () => {
        console.log("Enter?")
      try {
        const data = await kittyService.getRandomKitty();
        setRandomKitty(data);
      } catch (error) {
        console.error("Error fetching kitty:", error);
      }
    }, []);
  
    // Initial fetch
    useEffect(() => {
        console.log("app rendered")
      fetchRandomKitty();
    }, [fetchRandomKitty]);

    console.log(randomKitty)
  
    return (
      <div className="App">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <Content 
                randomKitty={randomKitty}  
                handleRandomClick={fetchRandomKitty} 
              />
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    );
  }

export default App