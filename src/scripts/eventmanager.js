import DOMManager from './DOMmanager.js';
const boardContainer = document.querySelector('.board-container');
const eventListenerManager ={ 
addBoardListener: () => {
    boardContainer.addEventListener('click', () => {
        if(event.target.id.startsWith('box-')){
            const id = event.target.id.split('-')[1];
            DOMManager.renderXO(id);
        }
      })
}

}


export default eventListenerManager;