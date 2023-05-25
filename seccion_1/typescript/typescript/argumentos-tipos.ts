(function() {
    
    //orden: obligatorios, opcionales, por defecto
    function activar(   quien: string,
                        momento?: string,
                        objeto: string = 'Batiseñal'){

        if (momento){
            console.log(`${quien} activó la ${objeto} en la ${momento}.`)
        }else{
            console.log(`${quien} activó la ${objeto}.`)
        }
    }

    activar('Gordon', 'batiseñal', 'tarde')

})();


