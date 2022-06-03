//27ABR22   v0.0.1

// import { emprSEGURIDAD } from 'empSeg.js';

const nombre = document.getElementById('nombre');
const rif = document.getElementById('rif');
const ciudad = document.getElementById('ciudad');
const persContacto = document.getElementById('persContacto');
const tel = document.getElementById('tel');
const email = document.getElementById('email');
const exp = document.getElementById('exp');
const areaTecn = document.getElementById('areaTecn');
const term = document.getElementById('term');
const submit = document.getElementById('submit');

submit.addEventListener('submit', (e)=>{
    e.preventDefault();

    if (nombre.value === ''){
        alert("Favor introduce el nombre de tu Company");
    }else{
        var nombreEmp = nombre.value;
    };
    if (rif.value == ''){
        alert("Favor introduce el RIF de tu Company");
    }else{
        var rifEmp = rif.value;
    }
    if (ciudad.value == ''){
        alert("Favor introduce el nombre de tu ciudad");
    }else{
        var ciudadEmp = ciudad.value;
    }
    if (persContacto.value == ''){
        alert("Favor introduce el persContacto de tu Company");
    }else{
        var persContactoEmp = persContacto.value;
    }
    if (tel.value == ''){
        alert("Favor introduce el Telefono valido de tu Company");
    }else{
        var telEmp = tel.value;
    }
    if (email.value == ''){
        alert("Favor introduce un email de tu Company");
    }else{
        var emailEmp = email.value;
    }
    if (exp.value == ''){
        alert("Favor introduce la experiencia de tu Company");
    }else{
        var expEmp = exp.value;
    }
    if (areaTecn.value == ''){
        alert("Favor introduce el area Tecnica de tu Company");
    }else{
        var areaTecnEmp = areaTecn.value;
    }

    if(!term.checked){
        alert('Favor lee los terminos y condiciones')
    }

    if(nombreEmp && rifEmp && ciudadEmp && persContactoEmp && telEmp && emailEmp && expEmp && areaTecnEmp && term.checked){
        var bkd = new emprSEGURIDAD(nombreEmp,rifEmp,ciudadEmp,persContactoEmp,telEmp,emailEmp,expEmp,areaTecnEmp);
    
        bkd.log()  
    }
    
  
});


    
class emprSEGURIDAD {
    constructor(nombre,rif,ciudad,persContacto,tel,email,exp,areaTecn){
        this.nombre = nombre,
        this.rif = rif,
        this.ciudad = ciudad,
        this.persContacto = persContacto,
        this.tel = tel,
        this.email =email,
        this.exp = exp,
        this.areaTecn = areaTecn
    };

    fechaRegistro(){
       this.fechaRegist = new Date().toJSON();
    }

    log() {
        this.fechaRegistro();
        console.log(this.nombre,this.rif,this.email,this.ciudad,this.tel,this.exp,this.areaTecn,this.persContacto,this.fechaRegist);
    };
}


