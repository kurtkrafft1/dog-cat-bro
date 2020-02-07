import eventListenerManager from './eventmanager.js';

const boardContainer= document.querySelector('.board-container');
for(let i =1; i<10;i++){
    boardContainer.innerHTML+= `<div id="box-${i}" class="space"></div>`;
}

eventListenerManager.addBoardListener();
