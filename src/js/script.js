
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


function selectCarouselItem(selectedButtonElement){
     const selecteidItem = selectedButtonElement.id;
     const carousel = document.querySelector('.cards-carousel');
     const transform = carousel.style.transform;
     const rotateY = transform.match(/rotateY\((-?\d+deg)\)/i);
     const rotateYDeg = -120 * (Number(selecteidItem) - 1);
     const newTtransform = transform.replace(rotateY[0], `rotatey(${rotateYDeg}deg)`);
     
     carousel.style.transform = newTtransform;

     const activeButtonElement = document.querySelector('.controller-button-active');
     activeButtonElement.classList.remove('controller-button-active');
     selectedButtonElement.classList.add('controller-button-active');
}