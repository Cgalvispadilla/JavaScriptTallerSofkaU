import { Electrodomestico } from "./Electrodomesticos.js";
class Nevera extends Electrodomestico {
  constructor(consumo, procedencia, capacidad) {
    super(consumo, procedencia);
    this.capacidad = capacidad;
  }
  get getCapacidad() {
    return this.capacidad;
  }
  set setCapacidad(capacidad) {
    this.capacidad = capacidad;
  }

  cantidadLitrosExtras() {
    capTemp = 0;
    if (this.capacidad > 120) {
      capTemp = (this.capacidad - 120) / 10;
    }
    return capTemp;
  }

  calcularCostoTotal() {
    if (this.cantidadLitrosExtras() > 0) {
      porcentaje = this.cantidadLitrosExtras() * 0.05;
      return (
        super.calcularCostoTotal() + super.calcularCostoTotal() * porcentaje
      );
    } else {
      return super.calcularCostoTotal();
    }
  }
}
export { Nevera };
