const inputInfo = document.querySelector("#info-entrada");
const inputInfo2 = document.querySelector("#info-edad");
const inputInfo3 = document.querySelector("#info-email");
const inputInfo4 = document.querySelector("#info-dni");

const pResultado1 = document.querySelector("#resultado-1");
const pResultado2 = document.querySelector("#resultado-2");
const pResultado3 = document.querySelector("#resultado-3");
const pResultado4 = document.querySelector("#resultado-4");
const pResultado5 = document.querySelector("#resultado-5");
const pResultado6 = document.querySelector("#resultado-6");
const pResultado7 = document.querySelector("#resultado-7");
const pResultado8 = document.querySelector("#resultado-clave-secreta");

const cuerpoPagina = document.querySelector("body");
const imagen1 = document.querySelector("#imagen1");
const imagen2 = document.querySelector("#imagen2");
const imagen3 = document.querySelector("#imagen3");

const inputInfo5 = document.querySelector("#clave-secreta");

const IMG_1 = "https://i.pinimg.com/564x/b5/74/20/b574202a2ff3932fa678512faa846a72.jpg"
const IMG_2 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3HgIs57VWCCfHKlkQKgavkwZhrZvLpEHK4Q&usqp=CAU";
const IMG_3 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaQvksoYj3v3J6HtIoCL8plFi54HlL7TtWDw&usqp=CAU";

const COLOR_FONDO = "#0d1117";
const TXT_PAGINA = "#e6edf3";
const TXT_FUENTE = "monospace";
const TXT_COLOR = "pink";
const IMG_TAM_1 = "300px";
const IMG_TAM_2 = "300px";

const MAYOR_EDAD = 18;
const CLAVE_SECRETA = "super";

let usuarioIngresado = "def usuario";
let edadIngresada = "def edad";
let emailIngresado = "def email";
let dniIngresado = "def dni";

let usuarioClaveSecreta = "def clave";

cuerpoPagina.style.backgroundColor = COLOR_FONDO;
cuerpoPagina.style.color = TXT_PAGINA;

function infoRecibida() {

    imagen1.src = IMG_1;
    imagen1.style.width = IMG_TAM_1;
    imagen1.style.higth = IMG_TAM_2;
    pResultado1.style.fontFamily = TXT_FUENTE;
    pResultado2.style.fontFamily = TXT_FUENTE;
    pResultado3.style.fontFamily = TXT_FUENTE;
    pResultado4.style.fontFamily = TXT_FUENTE;
    pResultado5.style.fontFamily = TXT_FUENTE;
    pResultado6.style.fontFamily = TXT_FUENTE;
    pResultado7.style.fontFamily = TXT_FUENTE;

    pResultado1.style.color = TXT_COLOR;
    pResultado2.style.color = TXT_COLOR;
    pResultado3.style.color = TXT_COLOR;
    pResultado4.style.color = TXT_COLOR;
    pResultado5.style.color = TXT_COLOR;
    pResultado6.style.color = TXT_COLOR;
    pResultado7.style.color = TXT_COLOR;


    usuarioIngresado = inputInfo.value;
    pResultado1.innerHTML = "Bienvenido(a): " + usuarioIngresado;
    edadIngresada = inputInfo2.value;
    pResultado2.innerHTML = "Edad: " + edadIngresada;
    emailIngresado = inputInfo3.value;
    pResultado3.innerHTML = "Email: " + emailIngresado;
    dniIngresado = inputInfo4.value;
    pResultado4.innerHTML = "Dni: " + dniIngresado;



    if ((edadIngresada >= MAYOR_EDAD)) {
        pResultado7.innerHTML = "Eres mayor de edad";

    } else {
        pResultado7.innerHTML = "Eres menor de edad";
    }
}
function infoRecibida2(){
    usuarioClaveSecreta = inputInfo5.value;
    
    if ( usuarioClaveSecreta == CLAVE_SECRETA) { 
    pResultado8.innerHTML = "Clave secreta (super) correcta";
    imagen2.src = IMG_2;
    
    } else {
        pResultado8.innerHTML = "Clave secreta icorrecta";
        pResultado8.style.color = "red";
        imagen3.src = IMG_3;
    }
}