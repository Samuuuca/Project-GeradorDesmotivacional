

function run() {

    const result = document.getElementById('Resultado')
        result.style.display = 'block'
    let { desmotivacional, demo2, fixo, sufixo } = arrays()
    
    let number = Math.floor(Math.random() * demo2.length)
        console.log(number);

    const number1 = Math.floor(Math.random() * fixo.length)
        console.info(number1)

    if (number == 0) {

    const number0 = desmotivacional[Math.floor(Math.random() * desmotivacional.length)]
        let frase = 'Você ' + demo2[0] +'um '+ number0;
    result.innerHTML = frase;
       
   } if (number == 1 && number1 == 0){

    const sufixo1 = sufixo[Math.floor(Math.random() * sufixo.length)];
        let frase = 'Você '+ demo2[1] + fixo[number1];
    result.innerHTML = frase;


   } if (number == 1 && number1 == 1) { //Se cair o serve
    
    const sufixo1 = sufixo[Math.floor(Math.random() * sufixo.length)];
        let frase = 'Você '+ demo2[1] + fixo[number1] + ' pra ' + sufixo1;
    result.innerHTML = frase;
       
   } else {
       console.error
   } 


   console.log('---------------------------------------')
    
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
    let fixo = [
        'presta',
        'serve',
    ]
    let sufixo =[
        'nada',
        'lavar uma louça',

    ]
    return { desmotivacional, demo2, fixo, sufixo }
}
