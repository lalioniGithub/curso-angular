(() => {
    
    // const avenger = {
    //     nombre: 'Steve',
    //     clave: 'Capitán América',
    //     poder: 'Droga'
    // }

    // const extraer = ( { nombre, poder }: any ) => {
        
    //     console.log(nombre);
    //     console.log(poder);
    // }

    //extraer(avenger);

    const avengers: string[] = ['Thor', 'IronMan', 'Spiderman'];

    // const [loki, , arana] = avengers;

    // console.log(loki);
    // console.log(arana);

    const extraerArr = ([tor, iron, spider]: string[]) => {
        console.log( tor );
        console.log( iron );
        console.log( spider );
    }

    // console.log( avengers[0] );
    // console.log( avengers[1] );
    // console.log( avengers[2] );

    extraerArr(avengers);

})();


