function entrada_persona () {
    let persona = {}
    persona.Nombre = prompt ("Ingrese el nombre de la persona: ")
    persona.Edad= prompt ("Edad de la persona: ")
    let signo = prompt ("casa sodiacal:")
    persona.signo = Number (signo)
    return persona
}

let numero_de_casa_sodiacal = []

while (true){
    numero_de_casa_sodiacal.push (entrada_persona ())
    if (prompt ("Desea ingresar los datos de otra presona? y/n")==="n"){
        break
    }
}


console.log (`Tenemos ${numero_de_casa_sodiacal.length}  casas sodiacales :`)
console.table (numero_de_casa_sodiacal)

//Con el siguiente valor ordenare por el numero de casa sodiacal

let casa_mayor = 0;

for (let i=0; i<numero_de_casa_sodiacal.length;i++){ //Aqui determino qual o valor máximo de títulos que algum time alguma vez atingiu
    if(numero_de_casa_sodiacal[i].signo>casa_mayor){
        casa_mayor=numero_de_casa_sodiacal[i].signo
    }
}

let casas_altas = []; //se colomban las casas con mayores valores

for (let i=0; i<numero_de_casa_sodiacal.length;i++){ 
    if(numero_de_casa_sodiacal[i].signo===casa_mayor){
        casas_altas.push (numero_de_casa_sodiacal[i].Nome)
    }
}

// se imprime los resultados
let lista_casas= ""

if(casas_altas.length===1){
    console.log (`O time com mais títulos é ${casas_altas[0]} com ${casa_mayor} títulos`) //Só um time
}
else{
    for (let i=0; i<casas_altas.length-1;i++){
    lista_casas= lista_casas+ `${casas_altas[i]}, ` //poderia imprimir aqui, mas vou arrumar para que se veja melhor
    }
}

    //Arrumadinha para visualização final:
    if ((casas_altas.length>1)){
    lista_casas= lista_casas.slice(0, -2) + ` y ${casas_altas[casas_altas.length-1]}` 
    //se retira espacion  innecesarios
    console.log (`Las personas con las casas más altas son: `+lista_casas+ ` con ${casa_mayor} casa`)
    }

    //Mensajes para html

    function solicitud_html () {
    var Mensajes = document.querySelector ('div')
    var Mensaje1 = document.createElement ('p')
    Mensaje1.textContent = `Tenemos este numero  ${numero_de_casa_sodiacal.length} ellas son :`
    Mensajes.appendChild (Mensaje1)
    
    //Lista de personas
    var Mensajes_personas = document.createElement ('p')
    let lista_de_personas = ""
    for (let i=0; i<numero_de_casa_sodiacal.length-1;i++){
    lista_de_personas = lista_de_personas + `${numero_de_casa_sodiacal[i].Nombre}, `
    }
    lista_de_personas = lista_de_personas.slice(0, -2) + ` y ${numero_de_casa_sodiacal[numero_de_casa_sodiacal.length-1].Nombre}` //ultimo item
    Mensajes_personas.textContent = lista_de_personas
    Mensajes.appendChild (Mensajes_personas)

    //Lista de casas mas altas
    if (lista_casas.length===1){ //solo un sodiaco
        var Mensaje3 = document.createElement ('p')
        Mensaje3.textContent = `La persona con el sodicaco mas alto es ${lista_de_personas[0]} con ${casa_mayor} del Sodiaco`
        Mensajes.appendChild (Mensaje3) 
    }
    else{
        var Mensaje4 = document.createElement ('p')
        Mensaje4.textContent = `las personas con las casas mas altas son: `+lista_casas+ ` con ${casa_mayor} del sodiaco`
        Mensajes.appendChild (Mensaje4) 
    }
           
    }