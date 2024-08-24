const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

/*La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"*/

function btnEncriptar(){
    const textEncriptado = encriptar(textArea.value);
    mensaje.value = textEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage="none";
}
function btnDesencriptar(){
    const textDesencriptado = desencriptar(textArea.value);
    mensaje.value = textDesencriptado;
    document.querySelector("texto-resultado").textContent=textDesencriptado;
    textArea.value = "";
    mensaje.style.backgroundImage="none";
}

function encriptar(stringEncriptado){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();

    for(let i=0; i< matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptado
}

function desencriptar(stringDesencriptado){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();

    for(let i=0; i< matrizCodigo.length; i++){
        if(stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
        }
    }
    return stringDesencriptado
}
const btnCopiar=document.querySelector(".btn-copiar");
    btnCopiar.addEventListener("click", ()=>{
        var contenido =mensaje.value;
        navigator.clipboard.writeText(contenido).then(()=>{
            console.log("Texto copiado:" , contenido);
        }).catch(err =>{
            console.error("Error al copiar el texto", err);
        });
        
    });
