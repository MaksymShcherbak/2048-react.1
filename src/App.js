import "./App.css";
import { useState } from "react";

function App() {
  let [nums, setNums] = useState([
    [2, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ]);

  function getClass(num) {
    return "num-" + num;
  }
  const [score, setScore] = useState(0);

  function randomNum(nums) {
    const indexes = nums
      .flat()
      .map((x, index) => {
        if (x === 0) return index;
      })
      .filter((item) => item !== undefined); //делает масив индексов которые = 0
    if (indexes.length == 0) {
      console.log("Вы проиграли");
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
  function handleKeyDown(event) {
    if (event.key == "w") {
      console.log(event.key);
      let newNums = JSON.parse(JSON.stringify(nums)); // зделать копию масива nums
      console.log(event.key);
      for (let block = 0; block <= 2; block++) {
        for (let j = 3; j >= 0; j--) {
          for (let i = 0; i <= 2; i++) {
            if (newNums[i][j] == 0) {
              newNums[i][j] = newNums[i + 1][j];
              newNums[i + 1][j] = 0;
            }
            if (newNums[i][j] == newNums[i + 1][j]) {
              newNums[i][j] = newNums[i + 1][j] + newNums[i][j];
              const newScore = score + newNums[i][j];
              setScore(newScore);
              newNums[i + 1][j] = 0;
            }
          }
        }
      }

      newNums = randomNum(newNums);
      setNums(newNums);
    }

    if (event.key == "s") {
      console.log(event.key);
      let newNums = JSON.parse(JSON.stringify(nums)); // зделать копию масива nums
      console.log(event.key);
      for (let block = 0; block <= 2; block++) {
        for (let j = 3; j >= 0; j--) {
          for (let i = 3; i >= 1; i--) {
            if (newNums[i][j] == 0) {
              newNums[i][j] = newNums[i - 1][j];
              newNums[i - 1][j] = 0;
            }
            if (newNums[i][j] == newNums[i - 1][j]) {
              newNums[i][j] = newNums[i - 1][j] + newNums[i][j];
              const newScore = score + newNums[i][j];
              setScore(newScore);
              newNums[i - 1][j] = 0;
            }
          }
        }
      }

      newNums = randomNum(newNums);
      setNums(newNums);
    }
    if (event.key == "d") {
      let newNums = JSON.parse(JSON.stringify(nums)); // зделать копию масива nums
      console.log(event.key);
      for (let block = 0; block <= 2; block++) {
        for (let i = 0; i < 4; i++) {
          for (let j = 3; j > 0; j--) {
            if (newNums[i][j] == 0) {
              newNums[i][j] = newNums[i][j - 1];
              newNums[i][j - 1] = 0;
            }
            if (newNums[i][j] == newNums[i][j - 1]) {
              newNums[i][j] = newNums[i][j - 1] + newNums[i][j];
              const newScore = score + newNums[i][j];
              setScore(newScore);
              newNums[i][j - 1] = 0;
            }
          }
        }
      }
      newNums = randomNum(newNums);
      setNums(newNums);
    }
    if (event.key == "a") {
      console.log(event.key);
      let newNums = JSON.parse(JSON.stringify(nums)); // зделать копию масива nums
      for (let block = 0; block <= 2; block++) {
        for (let i = 0; i < 4; i++) {
          for (let j = 0; j < 3; j++) {
            if (newNums[i][j] == 0) {
              newNums[i][j] = newNums[i][j + 1];
              newNums[i][j + 1] = 0;
            }
            if (newNums[i][j] == newNums[i][j + 1]) {
              newNums[i][j] = newNums[i][j + 1] + newNums[i][j];
              const newScore = score + newNums[i][j];
              setScore(newScore);
              newNums[i][j + 1] = 0;
            }
          }
        }
      }
      newNums = randomNum(newNums);
      setNums(newNums);
    }

    if (event.key == "ArrowUp") {
      console.log(event.key);
      let newNums = JSON.parse(JSON.stringify(nums)); // зделать копию масива nums
      console.log(event.key);
      for (let block = 0; block <= 2; block++) {
        for (let j = 3; j >= 0; j--) {
          for (let i = 0; i <= 2; i++) {
            if (newNums[i][j] == 0) {
              newNums[i][j] = newNums[i + 1][j];
              newNums[i + 1][j] = 0;
            }
            if (newNums[i][j] == newNums[i + 1][j]) {
              newNums[i][j] = newNums[i + 1][j] + newNums[i][j];
              const newScore = score + newNums[i][j];
              setScore(newScore);
              newNums[i + 1][j] = 0;
            }
          }
        }
      }

      newNums = randomNum(newNums);
      setNums(newNums);
    }
    if (event.key == "ArrowDown") {
      console.log(event.key);
      let newNums = JSON.parse(JSON.stringify(nums)); // зделать копию масива nums
      console.log(event.key);
      for (let block = 0; block <= 2; block++) {
        for (let j = 3; j >= 0; j--) {
          for (let i = 3; i >= 1; i--) {
            if (newNums[i][j] == 0) {
              newNums[i][j] = newNums[i - 1][j];
              newNums[i - 1][j] = 0;
            }
            if (newNums[i][j] == newNums[i - 1][j]) {
              newNums[i][j] = newNums[i - 1][j] + newNums[i][j];
              const newScore = score + newNums[i][j];
              setScore(newScore);
              newNums[i - 1][j] = 0;
            }
          }
        }
      }

      newNums = randomNum(newNums);
      setNums(newNums);
    }
    if (event.key == "ArrowRight") {
      let newNums = JSON.parse(JSON.stringify(nums)); // зделать копию масива nums
      console.log(event.key);
      for (let block = 0; block <= 2; block++) {
        for (let i = 0; i < 4; i++) {
          for (let j = 3; j > 0; j--) {
            if (newNums[i][j] == 0) {
              newNums[i][j] = newNums[i][j - 1];
              newNums[i][j - 1] = 0;
            }
            if (newNums[i][j] == newNums[i][j - 1]) {
              newNums[i][j] = newNums[i][j - 1] + newNums[i][j];
              const newScore = score + newNums[i][j];
              setScore(newScore);
              newNums[i][j - 1] = 0;
            }
          }
        }
      }
      newNums = randomNum(newNums);
      setNums(newNums);
    }
    if (event.key == "ArrowLeft") {
      console.log(event.key);
      let newNums = JSON.parse(JSON.stringify(nums)); // зделать копию масива nums
      for (let block = 0; block <= 2; block++) {
        for (let i = 0; i < 4; i++) {
          for (let j = 0; j < 3; j++) {
            if (newNums[i][j] == 0) {
              newNums[i][j] = newNums[i][j + 1];
              newNums[i][j + 1] = 0;
            }
            if (newNums[i][j] == newNums[i][j + 1]) {
              newNums[i][j] = newNums[i][j + 1] + newNums[i][j];
              const newScore = score + newNums[i][j];
              setScore(newScore);
              newNums[i][j + 1] = 0;
            }
          }
        }
      }
      newNums = randomNum(newNums);
      setNums(newNums);
    }
  }

  return (
    <>
      <h2>
        SCORE
        {score}
      </h2>
      <h2>BEST</h2>
      <div tabIndex="0" onKeyDown={handleKeyDown} id="all">
        {nums.flat().map((num, index) => (
          <div className={getClass(num)} key={index}>
            <p>{num == 0 ? " " : num}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
