// buttons
const btnBg = document.getElementById('bgBtn')
const btnTxt = document.getElementById('textBtn')
const btnBoth = document.getElementById('bothBtn')
const btnLig = document.getElementById('ligBtn')
const btnDrk = document.getElementById('drkBtn')
const btnBlack = document.getElementById('drkBlack')
const btnWhite = document.getElementById('drkWhite')
const btnRes = document.getElementById('resBtn')
const btnSame = document.getElementById('sameBtn')

const addClassButton = document.getElementById('addClassBtn')
const removeClassButton = document.getElementById('removeClassBtn')
const toggleClassButton = document.getElementById('toggleClassBtn')


btnBg.addEventListener('click', () => {
    const randomNumber = Math.floor(Math.random() * 360)
    document.body.style.backgroundColor = `hsl(${randomNumber}, 58%, 35%)`
});


btnTxt.addEventListener('click', () => {
    const randomNumber = Math.floor(Math.random() * 360)
    document.body.style.color = `hsl(${randomNumber}, 58%, 35%)`
})

btnBoth.addEventListener('click', () => {
    const randomNumber = Math.floor(Math.random() * 360),
          rand = Math.floor(Math.random() * 360)
    document.body.style.backgroundColor = `hsl(${randomNumber}, 58%, 35%)`
    document.body.style.color = `hsl(${rand}, 58%, 35%)`;


})

// btnBoth.addEventListener('click', () => {
//     const randomNumber = Math.floor(Math.random() * 360);
//     document.body.style.color = `hsl(${randomNumber}, 58%, 35%)`;
// });

btnLig.addEventListener('click', () => {
    document.body.style.backgroundColor = '#ccc'
    document.body.style.color = 'black'
})

btnDrk.addEventListener('click', () => {
    document.body.style.backgroundColor = '#333'
    document.body.style.color = '#aaa'
})

btnBlack.addEventListener('click', () => {
    document.body.style.backgroundColor = '#000'
    document.body.style.color = '#fff'
})

btnWhite.addEventListener('click', () => {
    document.body.style.backgroundColor = '#fff'
    document.body.style.color = '#000'
})

btnRes.addEventListener('click', () => {
    document.body.style.backgroundColor = 'hsl(271, 58%, 35%)'
    document.body.style.color = '#f3e6ff'
})

btnSame.addEventListener('click', () => {
    document.body.style.backgroundColor = '#262626'
    document.body.style.color = '#262626'
})

// add/remove/toggle class
addClassButton.addEventListener('click', () => {
    // alert('test')

    const list = document.getElementById("addClassDiv").classList;
    list.add("addClassCss")
})

removeClassButton.addEventListener('click', () => {
        document.getElementById("addClassDiv").classList.remove("addClassCss")
})

toggleClassButton.addEventListener('click', () => {
        document.getElementById("addClassDiv").classList.toggle("addClassCss")
})


// another option to style the body with a variable "body"
// const body = document.querySelector('body');
// btnTxt.addEventListener('click', () => {
//     const randomNumber = Math.floor(Math.random() * 360)
//     body.style.color = `hsl(${randomNumber}, 58%, 35%)`
// })