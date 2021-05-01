var alfabeto = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','Ñ','O','P','Q','R','S','T','U','V','W','X','Y','Z']
function incrementaPatentes() {
    
    patentes = new Array(1);

    //patentes[0]= '1234 BBB'
    //patentes[1]= '9999 BBZ'
    //patentes[2]= '9999 BBN'
    //patentes[3]= '9999 ZZZ'

    for (var i = 0 ; i <patentes.length; i++) {
        var v;
        v = prompt ('Ingrese una patente: ');
        patentes[i] = v.toUpperCase();
    }

    for (var z = 0; z < patentes.length; z++) {
        var patente = patentes[z]
        if (patente == "9999 ZZZ"){
            break
        }
        console.log('---- PROCESANDO: Entrada - ' + patente + '----')
        var num = patente.split(" ")[0]
        var text = patente.split(" ")[1]

        var nuevaPatente = ""
        var nuevoNum = "0000"
        if (parseInt(num) < 9999) {
            nuevoNum = parseInt(num) + 1
            nuevoNumText = "0000" + nuevoNum
            nuevaPatente = nuevoNumText.slice(-4) + " " + text
        } else {
            var nuevoText = ""
            nuevoTexto = incrementarTerceraLetra(text)

            var nuevaPatente = String(nuevoNum) + " " + nuevoTexto
        }
        
        document.write(nuevaPatente + "<br>")

    }
}

function validarLetraExcluidas(letra){
    var letrasInvalidas = ["A","E","I","O","U","Ñ"]
    if (letrasInvalidas.includes(letra)){
        return proximaLetra(letra)
    } else {
        return letra
    }
}

function incrementarTerceraLetra(text){
    if (text[2] == "Z"){
        return incrementarSegundaLetra(text)      
    } else {
        var nuevaLetra = proximaLetra(text[2])
        nuevoTexto = text[0] + text[1] + nuevaLetra
        return nuevoTexto
    }
}

function incrementarSegundaLetra(text){
    if (text[1] == "Z"){
        return incrementarPrimeraLetra(text)      
    } else {
        var nuevaLetra = proximaLetra(text[1])
        var nuevoTexto = text[0] + nuevaLetra + "B"
        return nuevoTexto
       
    }
}

function incrementarPrimeraLetra(text){
        var nuevaLetra = proximaLetra(text[0])
        var nuevoTexto = nuevaLetra + "BB"
        return nuevoTexto
}

function proximaLetra(letra){
    var nuevaLetra = alfabeto[alfabeto.indexOf(letra)+1]
    return validarLetraExcluidas(nuevaLetra)
}




document.write(incrementaPatentes());