
var cell = document.querySelectorAll('.cell-container')
var cont = 0
cell[0].classList.add('selectedCell')

var play= document.querySelector('.play')
var stop= document.querySelector('.stop')

//Array from and this.cards.indexOf(this.selectCard), elemento clickeado en la grid (event.target), clidelement.classList.contains('.card')

play.addEventListener('click', function(){
    refreshIntervalId = setInterval(changeCell, 1000)
})

stop.addEventListener('click', function(){
    clearInterval(refreshIntervalId);
})

function changeCell(){
    if(cont<15){
        cell[cont++].classList.toggle('selectedCell')
        cell[cont].classList.toggle('selectedCell')
    }
}

var refreshIntervalId = setInterval(changeCell, 1000)

for (let index = 0; index < cell.length; index++) {
    cell[index].addEventListener('click', function(){
        cell[cont].classList.toggle('selectedCell')
        cell[index].classList.toggle('selectedCell')
        cont = index
        clearInterval(refreshIntervalId);
    })
}

