const numeri = document.querySelector('#numeri');
const pulsante1 = document.querySelector('#pulsante1');
const pulsante2 = document.querySelector('#pulsante2');

let valore = 0;
let timer = false;
let idInterval = 0;

pulsante1.onclick = () => {
    if(timer == false) {
        timer = true;
        idInterval = setInterval(()=>{
            valore++;
            numeri.innerHTML = valore;
        }, 1000);
    }
};

pulsante2.onclick = () => {
    if(timer) {
        timer = false;
        clearInterval(idInterval);
        valore = 0;
        numeri.innerHTML = valore;
    }
}