const btnBg = document.getElementById('bgBtn')
const btnTxt = document.getElementById('textBtn')
const btnBoth = document.getElementById('bothBtn')
const btnLig = document.getElementById('ligBtn')
const btnDrk = document.getElementById('drkBtn')
const btnRes = document.getElementById('resBtn')



btnBg.addEventListener('click', () => {
    const randomNumber = Math.floor(Math.random() * 360)
    document.body.style.backgroundColor = `hsl(${randomNumber}, 58%, 35%)`
});


btnTxt.addEventListener('click', () => {
    const randomNumber = Math.floor(Math.random() * 360)
    document.body.style.color = `hsl(${randomNumber}, 58%, 35%)`
})

btnBoth.addEventListener('click', () => {
    const randomNumber = Math.floor(Math.random() * 360)
    document.body.style.backgroundColor = `hsl(${randomNumber}, 58%, 35%)`

})


btnBoth.addEventListener('click', () => {
    const randomNumber = Math.floor(Math.random() * 360);
    document.body.style.color = `hsl(${randomNumber}, 58%, 35%)`;
});

btnLig.addEventListener('click', () => {
    document.body.style.backgroundColor = '#ccc'
    document.body.style.color = 'black'
})

btnDrk.addEventListener('click', () => {
    document.body.style.backgroundColor = '#333'
    document.body.style.color = '#aaa'
})

btnRes.addEventListener('click', () => {
    document.body.style.backgroundColor = 'hsl(271, 58%, 35%)'
    document.body.style.color = '#f3e6ff'
})


// another option to style the body with a variable "body"
// const body = document.querySelector('body');
// btnTxt.addEventListener('click', () => {
//     const randomNumber = Math.floor(Math.random() * 360)
//     body.style.color = `hsl(${randomNumber}, 58%, 35%)`
// })