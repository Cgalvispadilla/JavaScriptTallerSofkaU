import { Electrodomestico } from "./Electrodomesticos.js";
class Televisor extends Electrodomestico {
  constructor(consumo, procedencia, numeroPulgadas, tieneTDT) {
    super(consumo, procedencia);
    this.numeroPulgadas = numeroPulgadas;
    this.tieneTDT = tieneTDT;
  }
  get numeroPulgadas() {
    return this.numeroPulgadas;
  }
  set numeroPulgadas(numeroPulgadas) {
    this.numeroPulgadas = numeroPulgadas;
  }
  get tieneTDT() {
    return this.tieneTDT;
  }
  set tieneTDT(tieneTDT) {
    this.tieneTDT = tieneTDT;
  }
  calcularCostoTotal() {
    precioAcumulado = super.calcularCostoTotal();
    if (getNumeroPulgadas() > 40) {
      precioAcumulado += precioAcumulado * 0.3;
    }
    if (this.tieneTDT) {
      precioAcumulado += 250000;
    }
    return precioAcumulado;
  }
}
export { Televisor };
