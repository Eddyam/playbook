// Ejemplo 4: Objeto con metodos
const pet = {
    name: "Skip",
    //Funcion que se guarda como propiedad
    sayHello: function(){
        console.log(`${this.name} te saluda en espanol!`)
    }
}

console.log("Ejemplo 4: Objeto con metodos")
pet.sayHello()