import './App.css';

function App() {
  let nums = [[2, 4, 8, 16,],
              [32, 64, 128, 256,],
              [512, 1024, 2048, 0,],
              [0, 0, 0, 0],
             ];
  for(let i = 0; i < 4; i ++){
    for(let j = 0; j < 4; j ++){
        console.log(nums[i][j])
    }
  }

  function getClass(num) {
    return "num-" + num;
  }
function handleKeyDown(event){
  if(event.key == "w") {
    console.log(event.key)
  }
  if(event.key == "s") {
    console.log(event.key)
  }
  if(event.key == "d") {
    console.log(event.key)
  }
  if(event.key == "a") {
    console.log(event.key)
  }
  
  if(event.key == "ArrowUp") {
    console.log(event.key)
  }

  if(event.key == "ArrowDown") {
    console.log(event.key)
  }

  if(event.key == "ArrowRight") {
    
  }
  if(event.key == "ArrowLeft") {
    console.log(event.key)  
  }

}

  
  return (
<>
<div tabIndex="0" onKeyDown={handleKeyDown} id="all">
{nums.flat().map((num, index) => (<div className={getClass(num)} key={index}><p>{num}</p></div>))}
</div>
</>
  );
}

export default App;