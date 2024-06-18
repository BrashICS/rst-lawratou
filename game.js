

let timer;
let ele = document.getElementById('time_div')


let sec = 0;
let min = 0;
timer = setInterval(()=>{
  ele.innerHTML = min +':'+sec;
  sec ++;
if (sec>= 60){
  sec = 0;
  min+= 1
}},1000)


let moves = 0;
let flippedCards = [];
let allmatches =8

function flipCard(card) {
  if (!card.classList.contains('flipped') && flippedCards.length < 2) {
    card.classList.add('flipped');
    flippedCards.push(card);
 if (flippedCards.length == 2) {
      moves++;
      document.getElementById('numb').textContent = moves;

  setTimeout(() => {
        checkMatch();
        flippedCards = [];
      }, 1000);
    }
  }
}

function checkMatch() {
  if (flippedCards[0].querySelector('.front').src == flippedCards[1].querySelector('.front').src) {
    flippedCards.forEach(card => {
      card.removeEventListener('click', flipCard);
    });
  } else {
    flippedCards.forEach(card => {
      card.classList.remove('flipped');
    });
  }
}


function match() {
if ( checkMatch == allmatches)
  console.log("All matches found")
}

