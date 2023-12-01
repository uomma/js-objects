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


    //template literal**************************************

    /* const ulContainer = document.getElementById('dragonball')
    for (let i = 0; i < dragonball.length; i++) {
        const caracter = dragonball[i];

        const liElement = 
        `<li class="caracter">
        <div class="img">${caracter.foto}</div>
        <h3 class="name">${caracter.nome}</h3>
        <p class="forza">${caracter.forza}</p>
        </li>`
        ulContainer.innerHTML+=liElement 
        
        *******************************************************/



    // create element*************************************************
    /* */
    const ulContainer = document.getElementById('dragonball')
    for (let i = 0; i < dragonball.length; i++) {
        const caracter = dragonball[i];

        const liElement = document.createElement('li');
        liElement.classList.add('caracter');


        const imageContainer = document.createElement('div');
        imageContainer.classList.add('img');
        imageContainer.innerHTML = caracter.foto;
        liElement.append(imageContainer);


        const nameContainer = document.createElement('h3');
        nameContainer.classList.add('name');
        nameContainer.innerHTML = caracter.nome;
        liElement.append(nameContainer);

        const forzaContainer = document.createElement('p');
        forzaContainer.classList.add('forza');
        forzaContainer.innerHTML = caracter.forza;
        liElement.append(forzaContainer);

        ulContainer.append(liElement)


        /*  
         `<li class="caracter">
         <div class="img">${caracter.foto}</div>
         <h3 class="name">${caracter.nome}</h3>
         <p class="forza">${caracter.forza}</p>
         </li>` */


    }


}
