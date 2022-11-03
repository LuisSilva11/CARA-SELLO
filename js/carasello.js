let carasello, op, apuesta, pierdes
let dinero=0, total=0, contador=0 
let num=1 + (int)(Math.random() * 2)
dinero = parseInt(dinero)
total = parseInt(total)
contador = parseInt(contador)
num = parseInt(num)
function juego() {
    do {

        apuesta=prompt("Digite la cantidad que desea apostar: ")
        alert("El dinero que va a apostar es: " + apuesta);

        carasello=prompt("Digite cara o sello");

        if (carasello.equalsIgnoreCase("cara") && num == 1) {
            alert("Has ganado");
            alert("Salió cara");
            dinero = dinero + apuesta;
            contador = contador + 1;
            System.out.println("El dinero que tiene en total es: " + dinero);
            System.out.println("La cantidad de veces que apostaste fueron: " + contador);
        }

        else if (carasello.equalsIgnoreCase("sello") && num == 2) {
            System.out.println("Has ganado :)");
            System.out.println("Salió sello");
            dinero = dinero + apuesta;
            contador = contador + 1;
            System.out.println("El dinero que tiene en total es: " + dinero);
            System.out.println("La cantidad de veces que apostaste fueron: " + contador);
        }

        else {
            pierdes = total - apuesta;
            System.out.println("Has perdido :( " + pierdes);
            dinero = dinero - apuesta;
            contador = contador + 1;
            System.out.println("El dinero que tiene en total es: " + dinero);
            System.out.println("La cantidad de veces que apostaste fueron: " + contador);

        }


        System.out.println("Si quieres volver a apostar escribe si, de lo contrario escribe no");
        op = lectura.nextLine();

    } while (op.equalsIgnoreCase("si"));
}