const modalBtns = document.querySelectorAll('.booking');// кнопка booking
const modal = document.querySelector('.modal');// модальное окно с изначально поставленным классом modal__hidden

for(let modalBtn of modalBtns) {
    modalBtn.addEventListener('click', () => {
        console.log('hello');
        modal.classList.remove('modal__hidden');
    })
    modal.addEventListener('click', (event) => {
        const target = event.target;// получает элемент в модальном окне на который кликнули мышью
        if(target.classList.contains('overlay') || target.classList.contains('modal__close')) { // при клике на элемент с классом overlay или modal__close...
            modal.classList.add('modal__hidden');// модальное окно скрывается
        }
    })
}