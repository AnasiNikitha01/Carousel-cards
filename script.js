const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const card = document.getElementsByClassName('card');


const three = document.getElementById('three');

three.addEventListener('mouseover',()=>{
    const section = document.querySelector('#three>section');
    section.style.display = 'block';
})
three.addEventListener('mouseout',()=>{
    const section = document.querySelector('#three>section');
    section.style.display = 'none';
})



prev.addEventListener('click', (event) => {
    event.preventDefault();


    for (let i = 0; i < card.length; i++) {
        const computedValue = window.getComputedStyle(card[i]);
        const zIndex = computedValue.getPropertyValue('z-index');
        if (i != 0 && zIndex == 2) {
            card[i].classList.add('animations');
            card[i].addEventListener('animationend', () => {
                card[i].classList.remove('animations');
            });

            let temp1 = card[card.length - 1].innerHTML;
            let temp = card[i].innerHTML;
            let temp2 = card[0].innerHTML
            card[i].innerHTML = card[i - 1].innerHTML;
            card[i + 1].innerHTML = temp;
            card[0].innerHTML = temp1;
            card[i - 1].innerHTML = temp2;
        }
    }

});

next.addEventListener('click', (event) => {
    event.preventDefault();

    for (let i = 0; i < card.length; i++) {
        const computedValue = window.getComputedStyle(card[i]);
        const zIndex = computedValue.getPropertyValue('z-index');
        console.log(zIndex);
        if (i != 0 && zIndex == 2) {
            card[i].classList.add('animations');
            card[i].addEventListener('animationend', () => {
                card[i].classList.remove('animations');
            });
            let temp = card[i].innerHTML;
            let temp1 = card[i - 1].innerHTML;
            let temp2 = card[0].innerHTML;
            card[i].innerHTML = card[i + 1].innerHTML;
            card[i - 1].innerHTML = temp;
            card[0].innerHTML = temp1;
            card[i + 1].innerHTML = temp2;
        }
    }
})