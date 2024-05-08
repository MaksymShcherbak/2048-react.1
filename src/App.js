import "./App.css";
import { useState } from "react";

function App() {
  const [nums, setNums] = useState([
    [2, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ]);
  const [score, setScore] = useState(0);

  function randomNum(nums) {
    const indexes = nums
      .flat()
      .map((x, index) => {
        if (x === 0) return index;
      })
      .filter((item) => item !== undefined); // делает масив индексов которые = 0
    if (indexes.length == 0) {
      return nums;
    } else {
      const index = indexes[Math.floor(Math.random() * indexes.length)];
      const i = Math.floor(index / 4);
      const j = index % 4;
      const newNums = JSON.parse(JSON.stringify(nums));
      newNums[i][j] = Math.random() < 0.5 ? 2 : 4;
      return newNums;
    }
  }

  function goLeft() {
    let newNums = JSON.parse(JSON.stringify(nums)); // сделать копию масива nums
    let newScore = score;
    for (let block = 0; block <= 2; block++) {
      for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 3; j++) {
          if (newNums[i][j] == 0) {
            newNums[i][j] = newNums[i][j + 1];
            newNums[i][j + 1] = 0;
          }
          if (newNums[i][j] == newNums[i][j + 1]) {
            newNums[i][j] = newNums[i][j + 1] + newNums[i][j];
            newScore += newNums[i][j];
            newNums[i][j + 1] = 0;
          }
        }
      }
    }
    setScore(newScore);

    newNums = randomNum(newNums);
    setNums(newNums);
  }

  function goRight() {
    let newNums = JSON.parse(JSON.stringify(nums)); // сделать копию масива nums
    let newScore = score;
    for (let block = 0; block <= 2; block++) {
      for (let i = 0; i < 4; i++) {
        for (let j = 3; j > 0; j--) {
          if (newNums[i][j] == 0) {
            newNums[i][j] = newNums[i][j - 1];
            newNums[i][j - 1] = 0;
          }
          if (newNums[i][j] == newNums[i][j - 1]) {
            newNums[i][j] = newNums[i][j - 1] + newNums[i][j];
            newScore += newNums[i][j];
            newNums[i][j - 1] = 0;
          }
        }
      }
    }
    setScore(newScore);

    newNums = randomNum(newNums);
    setNums(newNums);
  }

  function goUp() {
    let newNums = JSON.parse(JSON.stringify(nums)); // сделать копию масива nums

    let newScore = score;
    for (let block = 0; block <= 2; block++) {
      for (let j = 3; j >= 0; j--) {
        for (let i = 0; i <= 2; i++) {
          if (newNums[i][j] == 0) {
            newNums[i][j] = newNums[i + 1][j];
            newNums[i + 1][j] = 0;
          }
          if (newNums[i][j] == newNums[i + 1][j]) {
            newNums[i][j] = newNums[i + 1][j] + newNums[i][j];
            newScore += newNums[i][j];
            newNums[i + 1][j] = 0;
          }
        }
      }
    }
    setScore(newScore);

    newNums = randomNum(newNums);
    setNums(newNums);
  }

  function goDown() {
    let newNums = JSON.parse(JSON.stringify(nums)); // сделать копию масива nums

    let newScore = score;
    for (let block = 0; block <= 2; block++) {
      for (let j = 3; j >= 0; j--) {
        for (let i = 3; i >= 1; i--) {
          if (newNums[i][j] == 0) {
            newNums[i][j] = newNums[i - 1][j];
            newNums[i - 1][j] = 0;
          }
          if (newNums[i][j] == newNums[i - 1][j]) {
            newNums[i][j] = newNums[i - 1][j] + newNums[i][j];
            newScore += newNums[i][j];
            newNums[i - 1][j] = 0;
          }
        }
      }
    }
    setScore(newScore);

    newNums = randomNum(newNums);
    setNums(newNums);
  }

  function handleKeyDown(event) {
    if (event.key == "w") {
      goUp();
    }
    if (event.key == "s") {
      goDown();
    }
    if (event.key == "d") {
      goRight();
    }
    if (event.key == "a") {
      goLeft();
    }

    if (event.key == "ArrowUp") {
      goUp();
    }
    if (event.key == "ArrowDown") {
      goDown();
    }
    if (event.key == "ArrowRight") {
      goRight();
    }
    if (event.key == "ArrowLeft") {
      goLeft();
    }
  }

  return (
    <div className="container" tabIndex="0" onKeyDown={handleKeyDown}>
      <div className="panel-title">
        <h1>2048</h1>
        <button>Новая игра</button>
      </div>
      <div className="panel-scores">
        <div>
          <h2>Очки</h2>
          <h1>{score}</h1>
        </div>
        <div>
          <h2>Рекорд</h2>
          <h1>0</h1>
        </div>
      </div>
      <div className="game">
        <div className="game-bg">
          <div className="game-bg-tile">&nbsp;</div>
          <div className="game-bg-tile">&nbsp;</div>
          <div className="game-bg-tile">&nbsp;</div>
          <div className="game-bg-tile">&nbsp;</div>
          <div className="game-bg-tile">&nbsp;</div>
          <div className="game-bg-tile">&nbsp;</div>
          <div className="game-bg-tile">&nbsp;</div>
          <div className="game-bg-tile">&nbsp;</div>
          <div className="game-bg-tile">&nbsp;</div>
          <div className="game-bg-tile">&nbsp;</div>
          <div className="game-bg-tile">&nbsp;</div>
          <div className="game-bg-tile">&nbsp;</div>
          <div className="game-bg-tile">&nbsp;</div>
          <div className="game-bg-tile">&nbsp;</div>
          <div className="game-bg-tile">&nbsp;</div>
          <div className="game-bg-tile">&nbsp;</div>
        </div>
        <div className="game-all">
          {nums.flat().map((num, index) => (
            <div className={"num-" + num} key={index}>
              {num == 0 ? <p>&nbsp;</p> : <p>{num}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
