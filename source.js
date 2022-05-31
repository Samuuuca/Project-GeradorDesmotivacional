function run() {

    const result = document.getElementById('Resultado')
    let { desmotivacional, demo2, desmotivacional_not } = arrays()
    let number = Math.floor(Math.random() * demo2.length)
    console.log(number);

    
    if (number == 0) {

    const number0 = desmotivacional[Math.floor(Math.random() * desmotivacional.length)]
    let frase = 'Você ' + demo2[0] +'um '+ number0;
    result.innerHTML = frase;
       
   } if (number == 1) {
    const number1 = desmotivacional_not[Math.floor(Math.random() * desmotivacional_not.length)]
    let frase = 'Você '+ demo2[1] + number1;
    result.innerHTML = frase;
       
   } else {
       return
   } 

    
}

function arrays() {
    let desmotivacional = [
        'chato',
        'babaca',
        'inutil',
        'despresivel',
    ]
    let demo2 = [
        'é ',
        'não '
    ]
    let desmotivacional_not = [
        'presta',
        'serve',
    ]
    return { desmotivacional, demo2, desmotivacional_not }
}
