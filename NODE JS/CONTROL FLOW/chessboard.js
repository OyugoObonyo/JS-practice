for(let i = 1;i < 9;i++){
    let line = ""
    for(let j=1;j < 9;j++){
        let sum = i + j
        if((sum % 2) !== 0){
            line = line + " "
        }
        else if((sum % 2) === 0){
            line = line + "#"
        }
    }
    console.log(`${line}`)
}
