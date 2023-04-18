// Henter HTML-elementene vi skal jobbe med
let firkant = document.getElementById('firkant');
let fiende = document.getElementById('fiende');
let poeng = 0;
let poengElement = document.getElementById('poeng');

// Regner ut startposisjon for firkanten og fienden
let posX = window.innerWidth / 2 - firkant.offsetWidth / 2;
let posY = window.innerHeight / 2 - firkant.offsetHeight / 2;
let posX2 = Math.floor(Math.random() * window.innerWidth);
let posY2 = Math.floor(Math.random() * window.innerHeight);

// Setter startposisjon for firkanten og fienden
firkant.style.left = posX + 'px';
firkant.style.top = posY + 'px';
fiende.style.left = posX2 + 'px';
fiende.style.top = posY2 + 'px';

// Lagrer størrelsen på firkanten
let firkantBredde = fiende.offsetWidth;
let firkantHoyde = fiende.offsetHeight;

// Funksjon for å bevege firkanten oppover
function bevegOpp() {
  if (posY > 0) {  // Sjekker om firkanten har nådd toppen av skjermen
    posY -= 20;
    firkant.style.top = posY + 'px';
  }
}

// Funksjon for å bevege firkanten nedover
function bevegNed() {
  if (posY < window.innerHeight - firkant.offsetHeight) {  // Sjekker om firkanten har nådd bunnen av skjermen
    posY += 20;
    firkant.style.top = posY + 'px';
  }
}

// Funksjon for å bevege firkanten til venstre
function bevegVenstre() {
  if (posX > 0) {  // Sjekker om firkanten har nådd venstre kant av skjermen
    posX -= 20;
    firkant.style.left = posX + 'px';
  }
}

// Funksjon for å bevege firkanten til høyre
function bevegHoyre() {
  if (posX < window.innerWidth - firkant.offsetWidth) {  // Sjekker om firkanten har nådd høyre kant av skjermen
    posX += 20;
    firkant.style.left = posX + 'px';
  }
}

// Funksjon for å bevege fienden i en tilfeldig retning
function bevegRandom() {
  // Lager en liste med fire mulige retninger
  let directions = ['up', 'down', 'left', 'right'];
  // Velger en tilfeldig retning fra listen
  let randomDirection = directions[Math.floor(Math.random() * directions.length)];

  // Flytter fienden i den tilfeldige retningen
  let increment = 30; // Endre denne verdien for å justere hastigheten til fienden
  if (randomDirection === 'up' && posY2 > 0) {
    posY2 -= increment;
    fiende.style.top = posY2 + 'px';
  } else if (randomDirection === 'down' && posY2 < window.innerHeight - fiende.offsetHeight) {
    posY2 += increment;
    fiende.style.top = posY2 + 'px';
  } else if (randomDirection === 'left' && posX2 > 0) {
    posX2 -= increment;
    fiende.style.left = posX2 + 'px';
  } else if (randomDirection === 'right' && posX2 < window.innerWidth - fiende.offsetWidth) {
    posX2 += increment;
    fiende.style.left = posX2 + 'px';
  }
  
 } 
  function poengDa(){
  // Sjekker om du har kollidert med fienden
  if (posX + firkant.offsetWidth > posX2 && posX < posX2 + fiende.offsetWidth && posY + firkant.offsetHeight > posY2 && posY < posY2 + fiende.offsetHeight) {
    // Trekker fra 10 poeng for hvert sekund med kollisjon
    poeng -= 10;
  } else {
    // Legger til et poeng for hvert sekund uten kollisjon
    poeng++;
  }

  // Oppdaterer scoren som vises
  poengElement.innerHTML = poeng;
}

//Kaller funksjonen som beveger utifra tasten du trykker
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

//Funksjon som vokser fienden i bredde og høyde
function vokseFirkant() {
  firkantBredde *= 1.1;
  firkantHoyde *= 1.1;
  fiende.style.width = firkantBredde + 'px';
  fiende.style.height = firkantHoyde + 'px';
}

setInterval(vokseFirkant, 60 * 1000); // Kaller funksjonen vokseFirkant en gang i minuttet
setInterval(bevegRandom, 100); // Kaller funksjonen bevegRandom for å flytte fienden og justerer hastigheten
setInterval(poengDa, 1000); // Kaller funksjonen poengDa hvert sekund for å oppdatere poengene

