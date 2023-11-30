'use strict'

const dragonball = [

    {
        nome: 'Goku',
        forza: '10000',
        foto: 'goku.img',
    },
    {
        nome: 'Vegeta',
        forza: '9500',
        foto: 'vegeta.img ',

    },
    {
        nome: 'Crilin',
        forza: '2000',
        foto: 'crilin.img',

    },
    {
        nome: 'Gohan',
        forza: '8000',
        foto: 'Gohan.img',

    },
    {
        nome: 'Majin Boo',
        forza: '8500',
        foto: 'majin boo.img',

    },
    {
        nome: 'Trunks',
        forza: '7400',
        foto: 'trunks.img',

    },

]

for (let i = 0; i < dragonball.length; i++) {

    const caracter = dragonball[i];


    console.log(`caracter ${i+1}`)
    for (let key in caracter) {

        console.log(`${key}: ${caracter[key]}`)
        //console.log(caracter[key])
    }

    console.log('---');









    /*  document.getElementById('sis').innerHTML = dragonball[0].nome

        document.getElementById('tot').innerHTML = caracter[key] */
}

