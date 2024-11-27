
function handleMouseEnter() {
    this.classList.add('card-hovered');
    document.body.id = `${this.id}-hovered`;
}

function handleMouseLeave(){
    this.classList.remove('card-hovered');
    document.body.id = '';
}

function addEventListenersToCards() {
    const cardElementos = document.getElementsByClassName('card-estilo');
    
    for (let index = 0; index < cardElementos.length; index++){
        const card = cardElementos[index];
        card.addEventListener('mouseenter', handleMouseEnter);
        card.addEventListener('mouseleave', handleMouseLeave);
    }
}
document.addEventListener("DOMContentLoaded", addEventListenersToCards, false);
console.log('Ola MUndo');