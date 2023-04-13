let firkant = document.getElementById('firkant');
let posX = window.innerWidth / 2 - firkant.offsetWidth / 2;
let posY = window.innerHeight / 2 - firkant.offsetHeight / 2;
firkant.style.left = posX + 'px';
firkant.style.top = posY + 'px';

function bevegOpp() {
  if (posY > 0) {  // check if the square has reached the top of the screen
    posY -= 10;
    firkant.style.top = posY + 'px';
  }
}

function bevegNed() {
  if (posY < window.innerHeight - firkant.offsetHeight) {  // check if the square has reached the bottom of the screen
    posY += 10;
    firkant.style.top = posY + 'px';
  }
}

function bevegVenstre() {
  if (posX > 0) {  // check if the square has reached the left edge of the screen
    posX -= 10;
    firkant.style.left = posX + 'px';
  }
}

function bevegHoyre() {
  if (posX < window.innerWidth - firkant.offsetWidth) {  // check if the square has reached the right edge of the screen
    posX += 10;
    firkant.style.left = posX + 'px';
  }
}

document.addEventListener('keydown', function(event) {
  if (event.key === 'ArrowUp' || event.key === 'w') {
    bevegOpp();
  } else if (event.key === 'ArrowDown' || event.key === 's') {
    bevegNed();
  } else if (event.key === 'ArrowLeft' || event.key === 'a') {
    bevegVenstre();
  } else if (event.key === 'ArrowRight' || event.key === 'd') {
    bevegHoyre();
  }
});
