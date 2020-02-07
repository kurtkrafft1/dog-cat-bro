const board = {
    1: 'a' ,
    2: 'b',
    3: 'c',
    4:'d',
    5:'e',
    6:'f',
    7:'g',
    8:'h',
    9:'i'
}

const winnerWinner = {
    updateObject: (pet, id) => {
     
        if(pet==='cat'){
            board[id] = 'cat'
        } else {
            board[id]='dog'
        }
     console.log(board)
    },

    checkforwinner: () => {
        if(board[1]===board[2]&&board[1]===board[3]){
            const playAgain = prompt('AHH YEAH BRO YOU WON!! Want to play again? (y/n): ');
            if (playAgain==='y'){
                location.reload();
            } else {
                alert('okay!')
            }
        } else if(board[4]===board[5]&&board[4]===board[6]){
            const playAgain = prompt('AHH YEAH BRO YOU WON!! Want to play again? (y/n): ');
            if (playAgain==='y'){
                location.reload();
            }else {
                alert('okay!')
            }
        }else if(board[7]===board[8]&&board[7]===board[9]){
            const playAgain = prompt('AHH YEAH BRO YOU WON!! Want to play again? (y/n): ');
            if (playAgain==='y'){
                location.reload();
            }else {
                alert('okay!')
            }
        } else if(board[1]===board[4]&&board[1]===board[7]){
            const playAgain = prompt('AHH YEAH BRO YOU WON!! Want to play again? (y/n): ');
            if (playAgain==='y'){
                location.reload();
            }else {
                alert('okay!')
            }
        } else if(board[2]===board[5]&&board[2]===board[8]){
            const playAgain = prompt('AHH YEAH BRO YOU WON!! Want to play again? (y/n): ');
            if (playAgain==='y'){
                location.reload();
            }else {
                alert('okay!')
            }
        } else if(board[3]===board[6]&&board[3]===board[9]){
            const playAgain = prompt('AHH YEAH BRO YOU WON!! Want to play again? (y/n): ');
            if (playAgain==='y'){
                location.reload();
            }else {
                alert('okay!')
            }
        } else if(board[1]===board[5]&&board[1]===board[9]){
            const playAgain = prompt('AHH YEAH BRO YOU WON!! Want to play again? (y/n): ');
            if (playAgain==='y'){
                location.reload();
            }else {
                alert('okay!')
            }
        }else if(board[3]===board[5]&&board[3]===board[7]){
            const playAgain = prompt('AHH YEAH BRO YOU WON!! Want to play again? (y/n): ');
            if (playAgain==='y'){
                location.reload();
            }else {
                alert('okay!')
            }
        } else if (board[1]!== 'a'&& board[2]!== 'b'&& board[3]!== 'c'&& board[4]!== 'd'&& board[5]!== 'e'&& board[6]!== 'f'&& board[7]!== 'g'&& board[8]!== 'h'&& board[9]!== 'i') {
            const playAgain = prompt('Seems like it was a draw :( Want to play again? (y/n):')
            if (playAgain === 'y'){
                location.reload();
            }
    
        } 
    }
}
export default winnerWinner