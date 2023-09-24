const caracteres = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789!#$%&"

function gerenadorContraseña(longitud){
    let mostrar = document.getElementById('mostrarRes')
    let resultado = ""
    for(let i = 0; i < longitud; i++){
        resultado += caracteres.charAt(Math.floor(Math.random() * caracteres.length))
    }
    mostrar.innerHTML = resultado 
}


