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


    console.log(`caracter ${i + 1}`)
    for (let key in caracter) {

        console.log(`${key}: ${caracter[key]}`)
        //console.log(caracter[key])
    }


    /* <ul id="dragonball">
        <li class="caracter">
            <div class="img">img</div>
            <h3 class="name">nome</h3>
            <p class="forza">forza</p>
        </li>
    </ul> */

    const ulContainer = document.getElementById('dragonball')
    for (let i = 0; i < dragonball.length; i++) {
        const caracter = dragonball[i];

        const liElement = 
        `<li class="caracter">
        <div class="img">${caracter.foto}</div>
        <h3 class="name">${caracter.nome}</h3>
        <p class="forza">${caracter.forza}</p>
        </li>`
        ulContainer.innerHTML+=liElement

    }
}
