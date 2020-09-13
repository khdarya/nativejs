// 1. Что такое "событие". 
// 2. Обработчик события - функция (обработчик, listener, handler, подписчик, 
// subscriber), которая будет вызвана при наступлении этого события.
// 3. Вызывается обработчик не нами, а каким-то элементом

// function yo() {
//     return "yo";
// }

// const yo = () => {
//     return "yo";
// }

// console.log(yo());  //передача результата вызова ф-ии

const big = document.getElementById("big");

function onClickHandler(event) {
    console.dir(event.target); //всплытие с какого эл та событие началось
    console.dir(event.currentTarget); //эл -т кот содержит сведения с которым произошло событие
    //alert("yo!!!")  //объект который содержит сведения о произошедшем событии
}

//  big.onclick = onClickHandler;
//  big.onclick = null;

//big.onclick = () => { alert('hey') };

big.addEventListener("click", onClickHandler);
// big.removeEventListener("click", onClickHandler);




