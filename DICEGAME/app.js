const randomNumber1 = Math.floor(Math.random() * 6) + 1
const randomNumber2 = Math.floor(Math.random() * 6) + 1

console.log(randomNumber1)
console.log(randomNumber2)
imgSrc1 = document.querySelector('.img1')
imgSrc2 = document.querySelector('.img2')

imgSrc1.setAttribute('src', `images/dice${randomNumber1}.png`)
imgSrc2.setAttribute('src', `images/dice${randomNumber2}.png`)

title = document.querySelector('h1')
if(randomNumber1 > randomNumber2){
    title.innerText = "🚩 Player 1 Wins!"
}
else if(randomNumber2 > randomNumber1) {
    title.innerText = "🚩 Player 2 Wins!"
}
else {
    title.innerText = "Draw!"
}