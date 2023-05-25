(function() {
    
    function getEdad(edad: number){
        return edad + 50;
    }

    const nombre = 'Fernando';
    const apellido = 'Herrera';
    const edad = 30;

    // Fernando Herrera (Edad: 33)
    // const salida = nombre + " " + apellido + " (Edad: " + edad + ")";

    const salida = `${nombre} \n${apellido} \t(Edad: ${getEdad(edad)})`;


    console.log(salida);

})();


