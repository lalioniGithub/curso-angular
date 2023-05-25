(function() {
    
    // const miFuncion = function(a: string) {
    //     return a.toUpperCase();
    // }

    // function funcion2(a: string) {
    //     return a.toUpperCase();
    // }

    // const miFuncionF = (a: string) => a.toUpperCase();

    // console.log(miFuncion('normal'));
    // console.log(miFuncionF('flecha'));

    // const sumarN = function(a: number, b: number) {
    //     return a + b;
    // }

    // const sumarF = (a: number, b: number) => a + b;

    // console.log(sumarN(15, 41));
    // console.log(sumarF(4, 9));

    const hulk = {
        nombre: 'Hulk',
        smash(){

            //este "this" NO apunta al objeto actual y lo toma como tipo any
            // setTimeout(function(){
            //     console.log(`${this.nombre}, SMASH!`);
            // }, 1000);

            setTimeout(() => {
                console.log(`${this.nombre}, SMASH!`);
            }, 1000);

        }
    }

    hulk.smash();

})();


