import { useState, useEffect } from 'react'
import './App.css'

const App = () => {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);

  const choices = ["Rock", "Paper", "Scissors"];

  useEffect(() => {
    if (playerChoice !== null && computerChoice !== null) {
      if (playerChoice === "Rock") {
        if (computerChoice === "Scissors") {
          setResult("You Win!");
        } else if (computerChoice === "Paper") {
          setResult("You Lose!");
        } else {
          setResult("It's a Tie!");
        }
      }

      if (playerChoice === "Paper") {
        if (computerChoice === "Rock") {
          setResult("You Win!");
        } else if (computerChoice === "Scissors") {
          setResult("You Lose!");
        } else {
          setResult("It's a Tie!");
        }
      }

      if (playerChoice === "Scissors") {
        if (computerChoice === "Paper") {
          setResult("You Win!");
        } else if (computerChoice === "Rock") {
          setResult("You Lose!");
        } else {
          setResult("It's a Tie!");
        }
      }
    }
  }, [playerChoice, computerChoice]);

  const handleClick = (choice) => {
    setPlayerChoice(choice);
    const randomIndex = Math.floor(Math.random() * choices.length);
    setComputerChoice(choices[randomIndex]);
  };

  return (
    <div className="App">
      <h1>Rock, Paper, Scissors</h1>
      <div>
        {choices.map((choice) => (
          <button key={choice} onClick={() => handleClick(choice)}>
            {choice}
          </button>
        ))}
      </div>
      <div>
        <p>
          You chose: <strong>{playerChoice}</strong>
        </p>
        <p>
          Computer chose: <strong>{computerChoice}</strong>
        </p>
        <p>{result}</p>
      </div>
    </div>
  )
}

export default App;
