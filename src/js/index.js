console.clear();

// const body = document.querySelector('body');
//const submit = document.querySelector('.submit');
//console.log(body);
//e.preventDefault(); e.    

document.querySelector('form').addEventListener("submit", (e) => {
 e.preventDefault();
 console.log('Gozax mundo');
 
});

class empresaSeguridad{
    constructor(nombre,rif,ciudad,direcciones,telefono,areasTecnologias,personaContacto){
        this.nombre= nombre;
        this.rif = rif;
        this.ciudad = ciudad;
        this.direcciones = direcciones;
        this.telefono = telefono;
        this.areasTecnologias = areasTecnologias;
        this.personaContacto = personaContacto;  
}

areaTecnologias(areasTecnologias){
    for(let i=0;i < empresaBKD.areasTecnologias.length; i++)
    console.log(this.areasTecnologias[i]);
}

log(nombre,rif,ciudad,direcciones,telefono,areasTecnologias,personaContacto){
    console.log(this.nombre,this.rif,this.ciudad,this.direcciones,this.telefono,this.areasTecnologias,this.personaContacto);
    
}
}

const empresaBKD = new empresaSeguridad("BunkerDIGITAL","J40997990-6","Valencia",{calle:"Caracas",casa :"40"},"+584124363200",['CCTV','Cercos'],"Carlos Bravo");

empresaBKD.areaTecnologias();



