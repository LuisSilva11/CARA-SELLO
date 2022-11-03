let respuesta = document.getElementById("aws")
let boton = document.getElementById("jugar")
let botonSalir = document.getElementById("salir")
let contador = 0
let total = 0
let continuar = true

function carasello() {

    let dinero = document.getElementById("diner").value
    dinero = parseInt(dinero)
    let moneda = document.getElementById("sele").value
    moneda = parseInt(moneda)
    let aleatorio = 1 + parseInt((Math.random() * 2))

    do {
        
        if (moneda == aleatorio) {
            contador = contador + 1
            total += dinero + dinero
            respuesta.innerHTML = `<p>Has ganado la cantidad de dinero que has acomulado es de ${total}</p>`
        }

        else {
            contador = contador + 1
            total = dinero - dinero
            respuesta.innerHTML = `<p>Has perdido la cantidad de dinero que llevas en este momento es ${total}</p>`
        }

        continuar = false

    }

    while (continuar != false)

}

boton.addEventListener('click', carasello)

function salida() {

    respuesta.innerHTML = `<p> El total de dinero ganado fue ${total} en ${contador} partidas</p>`

}

botonSalir.addEventListener('click', salida)