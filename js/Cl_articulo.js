export default class Cl_articulo {
    constructor(codigo, nombre, tipo, costo) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.tipo = tipo;
        this.costo = costo;
    }

    set codigo (codigo) {
    this._codigo = +codigo;
    }

    get codigo () {
        return this._codigo;
    }

    set nombre (nombre) {
        this._nombre = nombre;
    }   
    get nombre () {
        return this._nombre;
    }

    set tipo(tipo) { 
        this._tipo = tipo;
    }   
    get tipo() {
        return this._tipo;
    }   

    set costo (costo) {    
        this._costo = +costo;
    }   
    get costo() {
        return this._costo;
    }



    precio(tipo, porcIncremento) {
        if (this.tipo == tipo) {
            return this.costo + (this.costo * porcIncremento / 100);
        } else {
            return this.costo + (this.costo * 0.10); 
            // 10% de incremento
        }
    }
// Método para calcular el precio por cantidad
    precioCantidad(cantidad) {
    return (this.costo *  cantidad) + (this.costo * cantidad *  0.05); 
    // 5% adicional
   }  
}