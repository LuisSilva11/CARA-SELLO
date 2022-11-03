let respuesta = document.getElementById("result")
let boton = document.getElementById("jugar")
let botonSalir = document.getElementById("salir")
let contador = 0
let total = 0
let continuar = true

function carasello() {

    let apuesta = document.getElementById("diner").value
    apuesta = parseInt(apuesta)
    let elige = document.getElementById("sele").value
    elige = parseInt(elige)
    let random = 1 + parseInt((Math.random() * 2))

    do {
        
        if (elige == random) {
            contador = contador + 1
            total += apuesta + apuesta
            respuesta.innerHTML = `<p>Has ganado, la cantidad de dinero que has acomulado es de ${total}</p>`
        }

        else {
            contador = contador + 1
            total = apuesta - apuesta
            respuesta.innerHTML = `<p>Has perdido, la cantidad de dinero que llevas en este momento es ${total}</p>`
        }

        continuar = false

    }

    while (continuar != false)

}

boton.addEventListener('click', carasello)

function resultado() {

    respuesta.innerHTML = `<p> El total de apuesta ganado fue ${total} en ${contador} partidas</p>`

}

botonSalir.addEventListener('click', resultado)