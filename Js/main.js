import { Electrodomestico } from "./Electrodomesticos.js";
import { Nevera } from "./Nevera.js";
import { Televisor } from "./Televisor.js";

const menu =
  "1. Ingresar Electrodomesticos al inventario\n2. Ingresar Neveras al inventario\n3. ingresar TV´s al inventario\n4. Crear factura\n5. Ver factura\n6. Ver Inventario\n7. salir";

let salir = false;
let misElectrodomesticosGenerales = [];
let misNeveras = [];
let misTelevisores = [];
let factura = [];

function arrayRemove(arr, value) {
  return arr.filter(function (ele) {
    return ele != value;
  });
}

while (!salir) {
  let opcion = prompt(menu);
  switch (opcion) {
    case "1":
      const consumo = prompt(
        "Ingresa el consumo del electrodomestico (A-B-C)"
      ).toUpperCase();
      const procedencia = prompt(
        "Ingresa la procendencia del electrodomestico (Nacional - Importado) "
      ).toUpperCase();
      const miElectrodomestico = new Electrodomestico(consumo, procedencia);
      misElectrodomesticosGenerales.push(miElectrodomestico);
      console.log("Se agrego correctamente");
      break;
    case "2":
      const consumo2 = prompt(
        "Ingresa el consumo del Nevera (A-B-C)"
      ).toUpperCase();
      const procedencia2 = prompt(
        "Ingresa la procendencia de la nevera (Nacional - Importado) "
      ).toUpperCase();
      const capacidad = parseInt(
        prompt("Ingresa la capacidad de la nevera en Kg")
      );
      const miNevera = new Nevera(consumo2, procedencia2, capacidad);
      misNeveras.push(miNevera);
      console.log("Se agrego correctamente");
      break;

    case "3":
      let miTv;
      const consumo3 = prompt(
        "Ingresa el consumo del Televisor (A-B-C)"
      ).toUpperCase();
      const procedencia3 = prompt(
        "Ingresa la procendencia del televisor (Nacional - Importado) "
      ).toUpperCase();
      const numPulgadas = parseInt(
        prompt("Ingrese el numero de pulgadas del televisor")
      );

      const tieneTDT = prompt(
        '¿El televisor tiene TDT? por favor ingrese "Si" o "No"'
      );

      if (tieneTDT.toUpperCase() == "SI") {
        miTv = new Televisor(consumo3, procedencia3, numPulgadas, "SI");
      } else {
        miTv = new Televisor(consumo3, procedencia3, numPulgadas, "NO");
      }
      misTelevisores.push(miTv);
      console.log("Se agrego correctamente");
      break;

    case "4":
      const tipoProducto = prompt(
        "Que Electrodomestico desea agregar a la factura (general, televisor o nevera)"
      ).toUpperCase();
      const cantidad = prompt("Ingrese la cantidad de electrodomesticos");
      const tipoConsumo = prompt(
        "Ingresa el consumo del electrodomestico (A-B-C)"
      ).toUpperCase();
      const nacion = prompt(
        "Ingresa la procendencia del electrodomestico (Nacional - Importado)"
      ).toUpperCase();
      if (tipoProducto == "NEVERA") {
        if (cantidad <= misNeveras.length) {
          for (let iterator = 0; iterator < misNeveras.length; iterator++) {
            if (iterator == cantidad) {
              break;
            }
            if (
              misNeveras[iterator].consumo == tipoConsumo &&
              misNeveras[iterator].procedencia == nacion
            ) {
              factura.push(misNeveras[iterator]);
              misNeveras = arrayRemove(misNeveras, misNeveras[iterator]);
            }
          }
        }
      } else if (tipoProducto == "TELEVISOR") {
        if (cantidad <= misTelevisores.length) {
          for (let iterator = 0; iterator < misTelevisores.length; iterator++) {
            if (
              misTelevisores[iterator].consumo == tipoConsumo &&
              misTelevisores[iterator].procedencia == nacion
            ) {
              factura.push(misTelevisores[iterator]);
              misTelevisores = arrayRemove(
                misTelevisores,
                misTelevisores[iterator]
              );
            }
          }
        }
      } else {
        if (cantidad <= misElectrodomesticosGenerales.length) {
          for (
            let iterator = 0;
            iterator < misElectrodomesticosGenerales.length;
            iterator++
          ) {
            if (iterator == cantidad) {
              break;
            }
            if (
              misElectrodomesticosGenerales[iterator].consumo === tipoConsumo &&
              misElectrodomesticosGenerales[iterator].procedencia === nacion
            ) {
              factura.push(misElectrodomesticosGenerales[iterator]);
              misElectrodomesticosGenerales = arrayRemove(
                misElectrodomesticosGenerales,
                misElectrodomesticosGenerales[iterator]
              );
            }
          }
        } else {
          console.log("No hay la cantidad requerida");
        }
      }
      break;
    case "5":
      if (factura.length > 0) {
        let costoTotal = 0;
        for (const iterator of factura) {
          costoTotal += iterator.calcularCostoTotal();
        }
        console.log(costoTotal);
      } else {
        console.log("No tiene electrodomesticos agregado en la factura");
      }
      break;
    case "6":
      if (misElectrodomesticosGenerales.length > 0) {
        for (const iterator of misElectrodomesticosGenerales) {
          console.log(iterator);
        }
      } else {
        console.log("No hay aun electrodomesticos");
      }
      if (misNeveras.length > 0) {
        for (const iterator of misNeveras) {
          console.log(iterator);
        }
      } else {
        console.log("No hay aun neveras");
      }
      if (misTelevisores.length > 0) {
        for (const iterator of misTelevisores) {
          console.log(iterator);
        }
      } else {
        console.log("No hay aun televisores");
      }
      break;
    case "7":
      salir = true;
      break;
  }
}
