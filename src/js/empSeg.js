// 28/04/2022
export default(
    
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

);




