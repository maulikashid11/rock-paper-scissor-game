const main = document.querySelector('main')
const rules = document.querySelector('.rules')
const rulesPopup = document.querySelector('.rules-popup')
const closePopup = document.querySelector('.close-popup')
const round = document.querySelector('.round')
const rpsContainer = document.querySelector('.rock-paper-scissor-container')
const result = document.querySelector('.result')
const scoreNumber = document.querySelector('.score-number')
const [youIcon,houseIcon] = document.querySelectorAll('.round-icon')
const playAgain = document.querySelector('.play-again')

let rsp =['rock','scissor','paper']
let youChoose ,houseChoose
let score = localStorage.getItem('score') || 0

playAgain.addEventListener('click',()=>{
    main.classList.remove('round-starts')
    youIcon.classList.remove(youChoose)    
    houseIcon.classList.remove(houseChoose)
    round.classList.remove('result')    
})

rpsContainer.addEventListener('click',(e)=>{
    if(e.target.classList.contains('rock-paper-scissor-container')) return 
    console.log(e.target)
    youChoose = Array.from(e.target.classList)[0]
    houseChoose = rsp[Math.floor(Math.random()*3)]
    main.classList.add('round-starts')
    youIcon.classList.add(youChoose)    
    youIcon.firstElementChild.src = `./images/icon-${youChoose}.svg`;
    houseIcon.classList.add(houseChoose)
    houseIcon.firstElementChild.src = `./images/icon-${houseChoose}.svg`;

    const answer = getResult(youChoose,houseChoose)
    setTimeout(()=>{
        round.classList.add('result')
        result.innerText = answer
        if(answer === 'WIN'){
            score++
        }
        scoreNumber.innerText = score
        localStorage.setItem('score',score)
    },3000)
})
scoreNumber.innerText = score

function getResult(you,house){
    if(you == house){
        return 'DRAW'
    }else if(you === 'rock' && house === 'paper'){
        return 'LOSE'
    }else if(you === 'paper' && house === 'scissor'){
        return 'LOSE'
    }else if(you === 'scissor' && house === 'rock'){
        return 'LOSE'
    }else if(you === 'paper' && house === 'rock'){
        return 'WIN'
    }else if(you === 'scissor' && house === 'paper'){
        return 'WIN'
    }else if(you === 'rock' && house === 'scissor'){
        return 'WIN'
    }
}

function popup() {
    rules.addEventListener('click', () => {
        main.classList.add('show-rules')
    })
    rulesPopup.addEventListener('click', (e) => {
        e.stopPropagation()
        if (e.target.classList.contains('popup-container') || e.target.parentElement.classList.contains('popup-container') || e.target.parentElement.parentElement.classList.contains('popup-container')) {
            console.log('hii')
        } else {
            main.classList.remove('show-rules')
        }
    })
    closePopup.addEventListener('click', () => {
        main.classList.remove('show-rules')
    })
}
popup()