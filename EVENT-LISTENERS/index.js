buttons = document.querySelectorAll('button')
for (button of buttons ) {
    // Use anonymous functions
    button.addEventListener("click", function(){
        alert("Button was clicked!")
    })}
