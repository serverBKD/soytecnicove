/*** 25/01/2021 */
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyAK-WiGdtUxiyNxh9jOVe_xW_RydbSug9Y",
    authDomain: "xtracer-a2410.firebaseapp.com",
    projectId: "xtracer-a2410",
    storageBucket: "xtracer-a2410.appspot.com",
    messagingSenderId: "122511089825",
    appId: "1:122511089825:web:fb905926400308323e10e0",
    measurementId: "G-5CW465FZ87"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

var db = firebase.firestore();

const aver = document.getElementById('xtracerx')

aver.addEventListener('submit', valores);

function valores(e) {
    let name = document.getElementById('name').value; /** Nombre */
    let zona = document.getElementById('zona').value; /*** Zona*/
    let init = document.getElementById('init').value; /*** Fecha de inicio */
    let finit = document.getElementById('finit').value; /*** Fecha final */
    // let btnahora = document.getElementById('btnahora').value; /*** Fecha final */

    if (finit == "") {
        var fecha = new Date();
        finit = fecha.toLocaleString()
    } else {
        console.log("mierda")
    }

    if (init == "") {
        init = "Facturar 2 Horas minimo"
    } else {
        console.log("mierda")
    }

    // let system = document.getElementById('system').value; /** Sistema intervenido     */
    let sign = "Desde Pruebas Tracerxjs"

    var formx = document.forms["xtracerx"]
    const alarmas = formx["alarmas"].checked //&& 
    const cctv = formx["cctv"].checked
    const cercados = formx["cercado"].checked
    const redes = formx["redes"].checked
    const garantias = formx["garantia"].checked
    const outs = formx["3ero"].checked //&& cctv && cercados && redes && garantias && outs
    e.preventDefault();

    //Revisar cambiar por Radius bottom _ 26ENE2021
    let facturar = {}

    if (garantias == true) {
        facturar = {
            nofacturar: "Es servicio tecnico de garantía"
        }
        outs = false
    }
    if (outs == true) {
        facturar = {
            nofacturar: "Servicio B2B Tercerizado"
        }
        garantias = false
    } else {
        facturar = {
            nofacturar: "Facturar 2 Horas minimo"
        }
        garantias = false
        outs = false
    }

    const system = {
        facturar,
        alarmas,
        cctv,
        cercados,
        redes,
        garantias,
        outs,
    }

    e.preventDefault();

    db.collection("xtracer").add({
            name,
            zona,
            init,
            finit,
            system,
            sign,
        })
        .then(function(docRef) {
            console.log("Dato igresado: ", docRef.name);
        })
        .catch(function(error) {
            console.error("Error : ", error);
        });
};