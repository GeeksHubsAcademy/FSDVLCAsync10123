
//EJEMPLO BLOQUEANTE.....
// const Sumar = (a,b) => {
//     return a + b;
// }

// console.log("hola");


// for(let i = 0; i < 1000000; i++){
//     console.log("i");
// }


// console.log("adios");

// Sumar(4,16);
/////////////////////////


//ASINCRONO Y NO BLOQUEANTE
// setTimeout(()=>{

//     console.log("Hola Marcos, que tal te encuentras hoy?");


// },2000);


// console.log("Ilko manda bro");

// for(let i = 0; i < 1000; i++){
//     console.log(i)
// }

// setTimeout(()=>{

//     console.log("Hola Alvaro");

//     setTimeout(()=>{
//         console.log("Hola Mario");

//         setTimeout(()=>{

//             console.log("Hola David");
//         },250);
//         console.log("Hola Corina");
//     },1200);

//     console.log("Hola Paula");

//     setTimeout(()=>{
//         console.log("Hola Ruben");

//         setTimeout(()=>{
//             console.log("Hola Ignacio")
//         },750)
//     },1200);
// },500);


// let mensaje = document.getElementById("mensajeRetardo");

// let tiempo = parseInt(prompt("Dime cuantos segundos para que tarde en aparecer.."));

// setTimeout(()=>{
//     mensaje.innerHTML = `Hola, he tardado ${tiempo} segundos en aparecer`;
// },tiempo * 1000);

// console.log("Ignacio odia madrugar estos días para venir a Wayco que es inaccesible");



// const operacionAsincrona = (funcion) => {
//     setTimeout(()=>{

//         funcion();
//     }, 2500);
//     console.log("Hoy lloverá????????");
// }

// const funcionPepito = () => {
//     console.log('Hola Mundo!!');
// }

// operacionAsincrona(funcionPepito);

// const Sumar = (a,b) => {
   
//     console.log(a + b)
// }

// setTimeout(()=>{
//     Sumar(2,3)
// },1234);


///////////

//Ejemplo de una promesa
// const Comprar = new Promise((resolve, reject) => {

//     if(5 < 3){
//         resolve("Ha ido todo bien")
//     } else {
//         reject("Maaaaaaaal")
//     }

// })

// Comprar
//     .then(
//         respuesta => console.log(respuesta)
//     )
//     .catch(error => console.log(error));


//Encadenando promesas....

const saludar = new Promise((resolve,reject) => {
    resolve('Hola');
});

saludar
    .then(respuesta => `${respuesta} Mundo`)
    .then(respuesta => `${respuesta}!!!`)
    .then(respuesta => console.log(respuesta))
    .catch(error => console.log(error));
    //.finally(console.log("Xe tira pa casa"));