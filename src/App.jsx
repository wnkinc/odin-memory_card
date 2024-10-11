import { useState, useEffect } from "react";
import Structure from "./components/structure";
import "./App.css";

function App() {
  const [images, setImages] = useState([]);
  const [clickedCards, setClickedCards] = useState([]); // State to track clicked cards
  const [highScore, setHighScore] = useState(0); // State for high score

  // Fisher-Yates Shuffle function to randomize the array
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
  };

  useEffect(() => {
    const pokémon = [
      "pikachu",
      "ninetales",
      "mew",
      "totodile",
      "piplup",
      "lugia",
      "flygon",
      "typhlosion",
      "arcanine",
      "luxray",
      "snorlax",
      "rowlet",
    ];

    // Use Promise.all to fetch data for all Pokémon and set images once
    Promise.all(
      pokémon.map((poké) =>
        fetch(`https://pokeapi.co/api/v2/pokemon/${poké}`)
          .then((response) => response.json())
          .then((data) => ({
            name: poké, // Pokémon name
            imgUrl: data.sprites.front_default, // Image URL
          }))
      )
    )
      .then((fetchedPokémonData) => {
        const shuffledData = shuffleArray(fetchedPokémonData); // Shuffle the array
        setImages(shuffledData); // Set the shuffled array
      })
      .catch((error) => {
        console.error("Error fetching Pokémon data:", error);
      });
  }, []);

  const handleCardClick = (name) => {
    if (!clickedCards.includes(name)) {
      setClickedCards((prevClicked) => {
        const newClickedCards = [...prevClicked, name]; // Add the clicked Pokémon name to the array
        // Check if the new score is higher than the high score
        if (newClickedCards.length > highScore) {
          setHighScore(newClickedCards.length); // Update high score
        }
        return newClickedCards; // Return the updated array
      });
    } else {
      // Reset clicked cards if the same card is clicked again
      setClickedCards([]);
    }
    // Shuffle the images array each time a card is clicked
    shuffleArray(images);
  };

  return (
    <>
      <header>
        <div className="score">
          <div className="text">Score:</div>
          {clickedCards.length}
        </div>
        <div className="score">
          <div className="text">High Score:</div>
          {highScore}
        </div>
      </header>
      <h1>Pokémon Memory Card Game</h1>
      <p>
        Get points by clicking on an image but don&apos;t click on any more than
        once!
      </p>
      <Structure images={images} handleCardClick={handleCardClick} />
    </>
  );
}

export default App;
