let encriptarButton = document.querySelector(".encriptarButton");
let desencriptarButton = document.querySelector(".desencriptarButton");
let copyButton = document.querySelector(".copyButton");
let divPresentation = document.querySelector(".contentPresentation");
let divResultado = document.querySelector(".contentResult");



function generateKey(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+{}|:"<>?';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

function encrypt(text) {
    const key = "La clave puede ser generada aleatoriamente"; // Clave para el algoritmo de encriptación
    
    let encryptedText = '';
    for (let i = 0; i < text.length; i++) {
        encryptedText += String.fromCharCode(text.charCodeAt(i) + key.charCodeAt(i % key.length));
    }
    return encryptedText;
}

function decrypt(encryptedText) {
    let key = "La clave puede ser generada aleatoriamente" // Clave para el algoritmo de desencriptación debe ser la misma que la de encriptacion
    let decryptedText = '';
    for (let i = 0; i < encryptedText.length; i++) {
        decryptedText += String.fromCharCode(encryptedText.charCodeAt(i) - key.charCodeAt(i % key.length));
    }
    return decryptedText;
}
function encriptarMensaje() {
    divResultado.style.display = "flex";
    divPresentation.style.display = "none";
    let texto = document.querySelector(".textToEncriptar").value;
    let encryptedText = encrypt(texto);
    document.querySelector(".textResult").value = encryptedText;
}

function desencriptarMensaje() {
    let textoEncriptado = document.querySelector(".textToEncriptar").value;
    let textoDesencriptado = decrypt(textoEncriptado);
    document.querySelector(".textResult").value = textoDesencriptado;
}

function copiarTexto() {
    var textarea = document.querySelector(".textResult");
    textarea.select();
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    let imagen = document.createElement("img");
    imagen.src = "images/check.png";
    imagen.style.width = "10%";
    imagen.style.height = "48%";
    copyButton.textContent = "";
    copyButton.appendChild(imagen);
    
    setTimeout(() => {
        // Elimina la imagen
        copyButton.removeChild(imagen);
        // Agrega un texto al botón
        copyButton.textContent = "Copiar";
    }, 1000); // 3000 milisegundos = 3 segundos
}

copyButton.addEventListener("click", copiarTexto);
desencriptarButton.addEventListener("click", desencriptarMensaje);
encriptarButton.addEventListener("click", encriptarMensaje)