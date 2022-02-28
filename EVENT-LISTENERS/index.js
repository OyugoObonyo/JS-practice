// Playing sound in JS
// using if else statements to acccess each button
buttons = document.querySelectorAll('.drum');
for(button of buttons ) {
    button.addEventListener('click', function() {
        this.style.color = "white"
        let action = this.innerHTML;
        console.log(action)
        if(action === 'w') {
            let audio = new Audio('sounds/tom-1.mp3')
            audio.play()
        }
        else if(action === 'a') {
            let audio = new Audio('sounds/tom-2.mp3')
            audio.play()
        }
        else if(action === 's') {
            let audio = new Audio('sounds/tom-3.mp3')
            audio.play()
        }
        else if(action === 'd') {
            let audio = new Audio('sounds/tom-4.mp3')
            audio.play()
        }
        else if(action === 'j') {
            let audio = new Audio('sounds/snare.mp3')
            audio.play()
        }
        else if(action === 'k') {
            let audio = new Audio('sounds/crash.mp3')
            audio.play()
        }
        else if(action === 'l') {
            let audio = new Audio('sounds/kick-bass.mp3')
            audio.play()
        }
    })
}
    



//    console.log(button)
//    button.addEventListener("click", function(){
//        console.log(button);
//    })}
