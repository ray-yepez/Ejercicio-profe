/*El Market de la esquina procesa los artículos de las facturas para calcular el
 precio a pagar.

Un diseñador de APPs logra el siguiente diseño de clases:

Cl_articulo
 - codigo
 - nombre 
 - tipo
 - costo
 +constructor(cod, nomb, cost)
 +precio(tipo, porcIncremento)
 +precioCantidad(cantidad)

Especificaciones:
+precio(tipo, porcIncremento): retorna el costo con un 10% incremento, o con 
porcIncremento si el artículo es del tipo que viene por argumento.
+precioCantidad(cantidad): retorna el costo por cantidad, más un 5%

Cl_market
 -articulos: array[Cl_articulo]
+constructor()
+agregarArticulo(cod, nomb, tipo, costo)
+aPagarDetal(tipoEsp, porcIncremento)
+aPagarMayor(cantCadaArt)

Especificaciones:
+aPagarDetal(tipoEsp, porcIncremento): calcula el precio total de la factura 
considerando que el tipoEsp lleva el porcIncremento indicado
+aPagarMayor(cantCadaArt): calcula el monto de la factura considerando que se 
venden cantCadaArt por igual para todos los artículos

Se requiere un programa que procese los artículos de una factura,  y reporte el 
precio tanto de la factura al detal como de la factura al mayor 

El programa principal carga la instancia de la clase Market, con los datos de 
varios artículos. Luego pregunta el tipo de artículo especial, el % incremento 
y la cantidad de artículos para una venta al mayor.

El programa reporta el precio a pagar tanto como si fuera venta al detal como 
venta al mayor.

Ej. Suponiendo los artículos: 
111, 1, jabón, 10
222, 3, crema, 20
333, 1, pasta, 40
444, 2, harina, 30

Y también sabiendo que el artículo especial es tipo 1, el porcIncremento es 20 y 
la cantCadaArt es 3, entonces las facturas serían asi:

Al detal: 
111, 1, jabón, 10 -> precio 12
222, 3, crema, 20 -> precio 22
333, 1, pasta, 40 -> precio 48
444, 2, harina, 30 -> precio 33

aPagarDetal= 115

Al mayor: 
111, 1, jabón, 10 -> precio 10.5x3 = 31.5
222, 3, crema, 20 -> precio 21x3 = 63
333, 1, pasta, 40 -> precio 42x3 = 126
444, 2, harina, 30 -> precio 31.5x3 = 94.5

aPagarMayor = 314.5 (de hechon 315, error del profe*/

import Cl_market from "./Cl_market.js";
import Cl_articulo from "./Cl_articulo.js";
import Dt_articulo from "./Dt_articulo.js";

const market = new Cl_market();

Dt_articulo.forEach((articulo) => 
    market.agregarArticulo(
         new Cl_articulo( articulo.codigo, articulo.nombre, articulo.tipo, articulo.costo)
     )
);

let tipoEsp = prompt("Ingrese el tipo especial: ");

let porcIncremento = prompt("Ingrese el porcentaje de incremento: ");

let cantCadaArt = prompt(
    "Ingrese la cantidad a comprar para cada artículo al mayor"
);

alert (
    `Precio a pagar al detal: ${market.aPagarDetal(tipoEsp, +porcIncremento)}`
);

alert (
    `Precio a pagar al mayor: ${market.aPagarMayor(+cantCadaArt)}`
);