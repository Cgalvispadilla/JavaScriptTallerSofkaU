import { Electrodomestico } from "./Electrodomesticos.js";
import { Nevera } from "./Nevera.js";
import { Televisor } from "./Televisor.js";

const menu =
  "1. Ingresar Electrodomesticos al inventario\n 2. Ingresar Neveras al inventario\n 3. ingresar TV´s al inventario\n 4. Crear factura\n 5. Ver Inventario\n 6. salir";

let salir = false;
let misElectrodomesticos = [];
const esPermitido = (consumo, tipoConsumo, procedencia, tipoProcedencia) => {
  if (
    consumo.toLocaleUpperCase() === tipoConsumo &&
    procedencia.toLocaleUpperCase() === tipoProcedencia.toLocaleUpperCase()
  ) {
    return true;
  }
  return false;
};

let contElectrodomesticosConsumoBNacionales = 0;
let contElectrodomesticosConsumoAInternacionales = 0;
let contNeverasConsumoANacionales = 0;
let contTvsConsumoCInternacionales = 0;
let contTvsConsumoBInternacionales = 0;
let contTvsConsumoANacionales = 0;

function arrayRemove(arr, value) {
  return arr.filter(function (ele) {
    return ele != value;
  });
}
const facturaElectrodomesticos = (misElectrodomesticos) => {
  let aux = 0;
  let contElectrodomesticos = 0;
  for (const e of misElectrodomesticos) {
    if (e instanceof Electrodomestico) {
      if (contElectrodomesticos < 5) {
        if (
          e.getConsumo == "B" &&
          e.getProcedencia.toLocaleUpperCase() == "NACIONAL"
        ) {
          aux += e.calcularCostoTotal();
          contElectrodomesticos++;
          misElectrodomesticos = arrayRemove(misElectrodomesticos, e);
        }
      }
    }
  }
  return aux;
};
const facturaNeveras = (misElectrodomesticos) => {
  let aux = 0;
  let contElectrodomesticos = 0;
  for (const e of misElectrodomesticos) {
    if (e instanceof Nevera) {
      if (contElectrodomesticos < 2) {
        if (
          e.getConsumo() == "C" &&
          e.getProcedencia().toLocaleUpperCase() == "IMPORTADO"
        ) {
          aux += e.calcularCostoTotal();
          contElectrodomesticos++;
          misElectrodomesticos = arrayRemove(misElectrodomesticos, e);
        }
      }
    }
  }
  return aux;
};
const facturaTvs = (misElectrodomesticos) => {
  let aux = 0;
  let contElectrodomesticos = 0;
  for (const e of misElectrodomesticos) {
    if (e instanceof Televisor) {
      if (contElectrodomesticos < 1) {
        if (
          e.getConsumo() == "B" &&
          e.getProcedencia().toLocaleUpperCase() == "IMPORTADO"
        ) {
          aux += e.calcularCostoTotal();
          contElectrodomesticos++;
          misElectrodomesticos = arrayRemove(misElectrodomesticos, e);
        }
      }
    }
  }
  return aux;
};

while (!salir) {
  let opcion = prompt(menu);
  switch (opcion) {
    case "1":
      const consumo = prompt("Ingresa el consumo del electrodomestico (A-B-C)");
      const procedencia = prompt(
        "Ingresa la procendencia del electrodomestico (Nacional - Importado) "
      );
      const miElectrodomestico = new Electrodomestico(
        consumo.toLocaleUpperCase(),
        procedencia.toLocaleUpperCase()
      );
      if (esPermitido(consumo, "A", procedencia, "IMPORTADO")) {
        if (contElectrodomesticosConsumoAInternacionales < 8) {
          contElectrodomesticosConsumoAInternacionales++;
          misElectrodomesticos.push(miElectrodomestico);
          console.log("Se agrego correctamente");
          break;
        } else {
          console.log("Ya agrego los 8 de consumo A Internacionales");
          break;
        }
      }
      if (esPermitido(consumo, "B", procedencia, "Nacional")) {
        if (contElectrodomesticosConsumoBNacionales < 5) {
          contElectrodomesticosConsumoBNacionales++;
          console.log("Se agrego correctamente");
          misElectrodomesticos.push(miElectrodomestico);
          break;
        } else {
          console.log("ya agrego los 5 de consumo B Nacionales");
          break;
        }
      }
      console.log("No es posible ingresar al inventario el electrodomestico");
      break;
    case "2":
      const consumo2 = prompt("Ingresa el consumo del Nevera (A-B-C)");
      const procedencia2 = prompt(
        "Ingresa la procendencia de la nevera (Nacional - Importado) "
      );
      const capacidad = parseInt(
        prompt("Ingresa la capacidad de la nevera en Kg")
      );
      const miNevera = new Nevera(consumo2, procedencia2, capacidad);

      if (esPermitido(consumo2, "A", procedencia2, "nacional")) {
        if (contNeverasConsumoANacionales < 10) {
          contNeverasConsumoANacionales++;
          misElectrodomesticos.push(miNevera);
          console.log("Se agrego correctamente");
          break;
        } else {
          console.log("Ya ingreso 10 neveras de consumo A nacionales");
          break;
        }
      }
      if (esPermitido(consumo2, "C", procedencia2, "Importado")) {
        if (contNeverasConsumoANacionales < 12) {
          contNeverasConsumoANacionales++;
          misElectrodomesticos.push(miNevera);
          console.log("Se agrego correctamente");
          break;
        } else {
          console.log("Ya ingreso 12 neveras de consumo C internaciones");
          break;
        }
      }
      console.log("No es posible ingresar al inventario la nevera ingresada");
      break;
    case "3":
      let miTv;
      const consumo3 = prompt("Ingresa el consumo del Nevera (A-B-C)");
      const procedencia3 = prompt(
        "Ingresa la procendencia de la nevera (Nacional - Importado) "
      );
      const numPulgadas = parseInt(
        prompt("Ingrese el numero de pulgadas del televisor")
      );

      const tieneTDT = prompt(
        '¿El televisor tiene TDT? por favor ingrese "Si" o "No"'
      );

      if (tieneTDT == "Si") {
        miTv = new Televisor(consumo3, procedencia3, numPulgadas, true);
      } else {
        miTv = new Televisor(consumo3, procedencia3, numPulgadas, false);
      }

      if (esPermitido(consumo3, "C", procedencia3, "Importado")) {
        if (contTvsConsumoCInternacionales < 7) {
          contTvsConsumoCInternacionales++;
          misElectrodomesticos.push(miTv);
          console.log("Se agrego correctamente");
          break;
        } else {
          console.log(
            "No se puede ingresar más de 7 Tvs de consumo C Internacional"
          );
          break;
        }
      }
      if (esPermitido(consumo3, "B", procedencia3, "Importado")) {
        if (contTvsConsumoBInternacionales < 13) {
          contTvsConsumoBInternacionales++;
          misElectrodomesticos.push(miTv);
          console.log("Se agrego correctamente");
          break;
        } else {
          console.log(
            "No se puede ingresar más de 13 Tvs de consumo B Internacional"
          );
          break;
        }
      }
      if (esPermitido(consumo3, "A", procedencia3, "nacional")) {
        if (contTvsConsumoANacionales < 3) {
          contTvsConsumoANacionales++;
          misElectrodomesticos.push(miTv);
          console.log("Se agrego correctamente");
          break;
        } else {
          console.log(
            "No se puede ingresar más de 3 Tvs de consumo A Nacionales"
          );
          break;
        }
      }
      console.log("No es posible ingresar al inventario el tv ingresado");
      break;

    case "4":
      let realizarFactura = 0;
      realizarFactura += facturaElectrodomesticos(misElectrodomesticos);
      realizarFactura += facturaNeveras(misElectrodomesticos);
      realizarFactura += facturaTvs(misElectrodomesticos);
      console.log("la cuenta de su factura es: " + realizarFactura);
      break;
    case "5":
      if (misElectrodomesticos.length > 0) {
        for (const iterator of misElectrodomesticos) {
          console.log(iterator);
        }
      } else {
        console.log("No hay aun electrodomesticos");
      }
      break;
    case "6":
      salir = true;
      break;
  }
}
