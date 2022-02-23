// exploring the this keyword
const hen = {
    name : "Helen",
    eggCount : 0,
    layAnEgg() {
        this.eggCount += 1
    }
}