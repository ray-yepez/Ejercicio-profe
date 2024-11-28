export default class Cl_market {
    constructor() {
        this.articulos = [];
    }

    agregarArticulo(articulo) {
        this.articulos.push(articulo);
    }

    aPagarDetal(tipoEsp, porcIncremento) {
        let total = 0;
        // let detalles = '';
       this.articulos.forEach(articulo => {
            const precio = articulo.precio(tipoEsp, porcIncremento);
            console.log(precio);
            // detalles = `${articulo.codigo}, ${articulo.tipo}, ${articulo.nombre}, ${articulo.costo} -> precio ${precio.toFixed(2)}`; 
            total += precio;
        });
return total;
    }

    aPagarMayor(cantCadaArt) {
        let total = 0;
        // let detalles = '';
        this.articulos.forEach(articulo => {
            const precio = articulo.precioCantidad(cantCadaArt);
            console.log(precio);
            // detalles ( `${articulo.codigo}, ${articulo.tipo}, ${articulo.nombre}, ${articulo.costo} -> precio ${precio.toFixed(2)}`);
            total += precio;
        });
        return total;
    }


}

