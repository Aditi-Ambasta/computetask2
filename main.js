const holes = [...document.querySelectorAll('.hole')]
const scoreEl = document.querySelector('.score span')
let score = 0

function run(){
    const i = Math.floor(Math.random() * holes.length)
    const hole = holes[i]
    let timer = null

    const img = document.createElement('img')
    img.classList.add('mole')
    img.src = 'mole-removebg-preview.png'

    img.addEventListener('click', () => {
        score += 1
        scoreEl.textContent = score
        img.src = 'boom.png'
        clearTimeout(timer)
        setTimeout(() => {
            hole.removeChild(img)
            run()
        }, 500)
    })

    hole.appendChild(img)

    timer = setTimeout(() => {
        hole.removeChild(img)
        run()
    }, 1500)
}
run()

