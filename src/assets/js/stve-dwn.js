// 13/06/2022
console.clear();

// const $ = elemento => document.querySelector(elemento);

// const $name = $('#nombre');
// const $email = $('#email');
// const $submit = $('#submitx');

// $name.addEventListener('input', e =>{
//     console.log(e.target.value);
// })

console.log('123s');


const $name = document.querySelector('#nombre');
const $email = document.querySelector('#email');
const $submit = document.querySelector('#submit');

$submit.addEventListener('submit', (e)=>{
    e.preventDefault();

    if (e.target.value === ''){
        console.log("Favor introduce los campos");
    }else{
        const nombreEmpresa = $name.value;
        const emailEmp = email.value;
    }
 
});


    
// class emprSEGURIDAD {
//     constructor(nombre,rif,ciudad,persContacto,tel,email,exp,areaTecn){
//         this.nombre = nombre,
//         this.rif = rif,
//         this.ciudad = ciudad,
//         this.persContacto = persContacto,
//         this.tel = tel,
//         this.email =email,
//         this.exp = exp,
//         this.areaTecn = areaTecn
//     };

//     fechaRegistro(){
//        this.fechaRegist = new Date().toJSON();
//     }

//     log() {
//         this.fechaRegistro();
//         console.log(this.nombre,this.rif,this.email,this.ciudad,this.tel,this.exp,this.areaTecn,this.persContacto,this.fechaRegist);
//     };
// }




