import "./App.css";
import { useState } from "react";

function App() {
  let [nums, setNums] = useState([
    [2, 4, 8, 16],
    [32, 64, 128, 256],
    [512, 1024, 2048, 0],
    [0, 0, 0, 0],
  ]);
  function getClass(num) {
    return "num-" + num;
  }
  function randomNum(){
    const indexes = nums.flat().map( (x,index) => { if(x === 0) return index}).filter(item => item !== undefined); //делает масив индексов которые = 0
    const index = indexes[Math.floor(Math.random() * indexes.length)];
    const i = Math.floor(index / 4);
    const j = index % 4;
    
  }
  function handleKeyDown(event) {
    if (event.key == "w") {
      console.log(event.key);
    }
    if (event.key == "s") {
      console.log(event.key);
    }
    if (event.key == "d") {
      const newNums = JSON.parse(JSON.stringify(nums)); // зделать копию масива nums
      console.log(event.key);
      for (let i = 0; i < 4; i++) {
        for (let j = 3; j > 0; j--) {
          if( newNums[i][j] == 0){
            newNums[i][j] = newNums[i][j - 1];
            newNums[i][j - 1] = 0;
          }
          if(newNums[i][j] == newNums[i][j - 1]){
            newNums[i][j] = newNums[i][j - 1] + newNums[i][j];
            newNums[i][j - 1] = 0;
         }
        }
      }
      setNums(newNums);
    }
    if (event.key == "a") {
      console.log(event.key);
      const newNums = JSON.parse(JSON.stringify(nums)); // зделать копию масива nums
      for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 3; j++) {
          if(newNums[i][j] == 0){
            newNums[i][j] = newNums[i][j + 1];
            newNums[i][j + 1] = 0;
          }
          if(newNums[i][j] == newNums[i][j + 1]){
             newNums[i][j] = newNums[i][j + 1] + newNums[i][j];
             newNums[i][j + 1] = 0;
          }
        }
      }
      setNums(newNums);
    }

    if (event.key == "ArrowUp") {
      console.log(event.key);
    }

    if (event.key == "ArrowDown") {
      console.log(event.key);
    }

    if (event.key == "ArrowRight") {
    }
    if (event.key == "ArrowLeft") {
      console.log(event.key);
    }
  }


  return (
    <>
      <div tabIndex="0" onKeyDown={handleKeyDown} id="all">
        {nums.flat().map((num, index) => (
          <div className={getClass(num)} key={index}>
            <p>{num}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
