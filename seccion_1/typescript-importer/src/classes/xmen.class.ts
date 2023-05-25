function imprimirConsola(constructorClase: Function) {
    console.log(constructorClase);
}

//decorador de clase
@imprimirConsola
export class Xmen {
    constructor(
        public nombre: string, 
        public clave: string
    ) {}

    imprimir() {
        console.log(`Nombre: ${this.nombre} - Clave: ${this.clave}`);
        
    }
}