export default class Cl_market {
    constructor() {
        this.articulos = [];
    }

    agregarArticulo(articulo) {
        this.articulos.push(articulo);
    }

    aPagarDetal(tipoEsp, porcIncremento) {
        let total = 0;
        let detalles = document.getElementById("detal");
       this.articulos.forEach(articulo => {
            const precio = articulo.precio(tipoEsp, porcIncremento);
            detalles.innerHTML += `<p>${articulo.codigo}, ${articulo.tipo},
             ${articulo.nombre}, ${articulo.costo} -> precio ${precio.toFixed(2)}</p>`;
             //Tranquila que no va a salir con ese salto de linea, sino que van a estar
             //todo pegado y cada cosa en una línea aparte. 
             //Lo divido así por legibilidad
            total += precio;
        });
return total;
    }

    aPagarMayor(cantCadaArt) {
        let total = 0;
        let detalles = document.getElementById("mayor");
        this.articulos.forEach(articulo => {
            const precio = articulo.precioCantidad(cantCadaArt);
            console.log(precio);
            detalles.innerHTML +=  `<p>${articulo.codigo}, ${articulo.tipo}, 
            ${articulo.nombre}, ${articulo.costo} -> precio ${precio.toFixed(2)}</p>`;
            total += precio;
        });
        return total;
    }


}

