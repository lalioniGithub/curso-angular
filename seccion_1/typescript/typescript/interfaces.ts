(() => {
    
    interface Ixmen {
        nombre: string;
        edad: number;
        poder?: string;
    }

    // const enviarMision = ( xmen: {nombre: string} ) => {
    //     console.log(`Enviando a ${ xmen.nombre } a la misión.`);
    // }

    const enviarMision = ( xmen: Ixmen ) => {
        console.log(`Enviando a ${ xmen.nombre } a la misión.`);
    }

    const wolverine: Ixmen = {
        nombre: 'Logan',
        edad: 40
    }

    enviarMision( wolverine );

})();


