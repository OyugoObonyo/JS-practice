// Change span color
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
const allSpans = document.querySelectorAll('span')
let i = 0
for(span of allSpans) {
    span.style.color = colors[i]
    i++
}
