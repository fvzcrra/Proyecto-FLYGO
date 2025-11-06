const accordion = document.querySelector('.accordion__content');
const accordionItem = document.querySelector('.accordion__item');

let height = 0;

accordionItem.addEventListener('click', ()=>{
    if(!height){
        height = accordion.scrollHeight;
    }else{
        height = 0;
    }

    accordion.style.height = '${height}px';
});

function requestNotification(){
    Notification.requestPermission()
    .then(permission => {
        if(permission === "granted"){
            new Notification("¿Seguro que quieres salir de esta pagina web?")
        }
    })
}