document.addEventListener('DOMContentLoaded', function() {

  let gridSize = 2000
  let container = document.querySelector('.container')
  let grid = document.querySelector('.grid')
  let colorSelect = "black"

  for (let i = 0; i < gridSize; i++) {
    let tile = document.createElement("div")
    tile.classList.add('pixel')
    grid.appendChild(tile)
  }

  //click area begins

  document.addEventListener("click", function() {
    let pixel = document.getElementsByClassName('.pixel')
    if (event.target.className === 'red') {
      colorSelect = 'red'
    }
    if (event.target.className === 'blue') {
      colorSelect = 'blue'
    }
    if (event.target.className === 'green') {
      colorSelect = 'green'
    }
    if (event.target.className === 'yellow') {
      colorSelect = 'yellow'
    }
    if (event.target.className === 'purple') {
      colorSelect = 'purple'
    }
    if (event.target.className === 'black') {
      colorSelect = 'black'
    }
    if (event.target.className === 'orange') {
      colorSelect = 'orange'
    }
    if (event.target.className === 'silver') {
      colorSelect = 'silver'
    }
    if (event.target.className === 'clear') {
      pixel.style.backgroundColor = 'white'
    }


    console.log(event.target)
    if (event.target.className === 'pixel') {
      //this is where we click the pixel to place the color
      event.target.style.backgroundColor = colorSelect
    }
  })
  //click area ends









})
