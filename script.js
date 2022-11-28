
const numberBtn = document.querySelectorAll('[data-number]')
const selected = document.querySelector('[data-rating]')
let submitBtn = document.querySelector('#submit-btn')
let thanks = document.querySelector('.thanks')
let box = document.querySelector('.box')

numberBtn.forEach(btn =>{
    btn.addEventListener('click', () =>{
        console.log(btn.innerText);
        selected.innerText = btn.innerText
    })
})

submitBtn.onclick = () =>{
    thanks.classList.toggle('active');
    box.classList.toggle('active');
}