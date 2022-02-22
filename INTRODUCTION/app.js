console.log("Connecting Script with HTML document");
const age = prompt("What's your age ")
switch (age) {
    case '18':
        alert("Legal age");
        break;
    case '17':
        alert("close enough");
        break;
    case '19':
        alert("1 step ahead");
        break;
    default:
        alert("Age not recognized")
}