function greeting(name){
    const date = new Date()
    const hours = date.getHours()

    let time;
    if(hours>=4&&hours<12){
        time="morning"
    }
    else if(hours>=12&&hours<17){
        time="afternoon"
    }
    else if(hours>=17&&hours<20){
        time="evening"
    }
    else{
        time="night"
    }

    // console.log("Good"+" "+time+" "+name)
    return `Good ${time} ${name} !`
}
console.log(greeting("Amey"))