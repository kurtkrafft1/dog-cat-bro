import winnerWinner from "./winnerTest.js";
let counter=1
const DOMManager = {
    renderXO: (id) => {
     
      if(counter%2===0){
          const box = document.getElementById(`box-${id}`)
          box.innerHTML= '<img src="https://www.stickpng.com/assets/images/5845e1677733c3558233c0ee.png" id="cat" width="140px" height="auto">'
          counter ++
          winnerWinner.updateObject('cat',id)
          setTimeout(winnerWinner.checkforwinner(), 3000)
      } else {
        const box = document.getElementById(`box-${id}`)
        box.innerHTML= '<img src="https://www.stickpng.com/assets/images/5845e770fb0b0755fa99d7f4.png" id="dog" width="150px" height="auto">'
        counter ++
        winnerWinner.updateObject('dog',id)
        setTimeout(winnerWinner.checkforwinner(), 3000)
      }
    }
}
export default DOMManager;