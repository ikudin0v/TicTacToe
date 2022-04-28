function checkWin() {
    if ((field.playerX.includes('cell11') === true && field.playerX.includes('cell12') === true && field.playerX.includes('cell13') === true) ||
        (field.playerX.includes('cell21') === true && field.playerX.includes('cell22') === true && field.playerX.includes('cell23') === true) ||
        (field.playerX.includes('cell31') === true && field.playerX.includes('cell32') === true && field.playerX.includes('cell33') === true) ||
        (field.playerX.includes('cell11') === true && field.playerX.includes('cell21') === true && field.playerX.includes('cell31') === true) ||
        (field.playerX.includes('cell12') === true && field.playerX.includes('cell22') === true && field.playerX.includes('cell32') === true) ||
        (field.playerX.includes('cell13') === true && field.playerX.includes('cell23') === true && field.playerX.includes('cell33') === true) ||
        (field.playerX.includes('cell11') === true && field.playerX.includes('cell22') === true && field.playerX.includes('cell33') === true) ||
        (field.playerX.includes('cell31') === true && field.playerX.includes('cell22') === true && field.playerX.includes('cell13') === true)) {
        setTimeout(function() {
            alert(`Игрок Х выиграл!`)
            location.href=location.href
        }, 100)
    } else if ((field.playerO.includes('cell11') === true && field.playerO.includes('cell12') === true && field.playerO.includes('cell13') === true) ||
        (field.playerO.includes('cell21') === true && field.playerO.includes('cell22') === true && field.playerO.includes('cell23') === true) ||
        (field.playerO.includes('cell31') === true && field.playerO.includes('cell32') === true && field.playerO.includes('cell33') === true) ||
        (field.playerO.includes('cell11') === true && field.playerO.includes('cell21') === true && field.playerO.includes('cell31') === true) ||
        (field.playerO.includes('cell12') === true && field.playerO.includes('cell22') === true && field.playerO.includes('cell32') === true) ||
        (field.playerO.includes('cell13') === true && field.playerO.includes('cell23') === true && field.playerO.includes('cell33') === true) ||
        (field.playerO.includes('cell11') === true && field.playerO.includes('cell22') === true && field.playerO.includes('cell33') === true) ||
        (field.playerO.includes('cell31') === true && field.playerO.includes('cell22') === true && field.playerO.includes('cell13') === true)) {
        setTimeout(function() {
            alert(`Игрок O выиграл!`)
            location.href=location.href
        }, 100)
        return(1)
    } else if (field.playerX.length + field.playerO.length === 9) {setTimeout(function() {
        alert('Ничья!')
        location.href=location.href
    }, 100)}
}








const field = {
    'playerX':[],
    'playerO':[]
}
let player = 'X'

document.querySelector('.main').addEventListener('click', function(e) {
    if (field.playerX.includes(e.target.id) === false && field.playerO.includes(e.target.id) === false && e.target.id.includes('cell')) {
        if (player === 'X') {
            field.playerX.push(e.target.id)
            document.querySelector(`#${e.target.id}`).insertAdjacentHTML("afterBegin",  `<div class="X1"></div><div class="X2"></div>`)
            player = 'O'
        } else {
            field.playerO.push(e.target.id)
            document.querySelector(`#${e.target.id}`).insertAdjacentHTML("afterBegin",  `<div class="O"></div>`)
            player = 'X'
        }
        checkWin()
    }
    
})
