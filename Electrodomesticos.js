class Electrodomestico {
  constructor(consumo, procedencia) {
    this.consumo = consumo;
    this.procedencia = procedencia;
  }

  get consumo() {
    return this.consumo;
  }
  set consumo(consumo) {
    this.consumo = consumo;
  }
  set procedencia(procedencia) {
    this.procedencia = procedencia;
  }

  get procedencia() {
    return this.procedencia;
  }

  consumoAFn() {
    return 450000;
  }
  consumoBFn() {
    return 350000;
  }
  consumoCFn() {
    return 250000;
  }
  ningunConsumo() {
    return -1;
  }

  calcularCostoSegunConsumo() {
    const tipoConsumos = {
      consumoA: consumoAFn,
      consumoB: consumoBFn,
      consumoC: consumoCFn,
    };
    if (tipoConsumos[this.consumo]) {
      return tipoConsumos[this.consumo]();
    } else {
      return ningunConsumo();
    }
  }

  calcularCostoSegunProcedencia() {
    if (this.procedencia == "Nacional") {
      return 250000;
    } else if (this.procedencia == "Importado") {
      return 350000;
    } else {
      return 1;
    }
  }

  calcularCostoTotal() {
    return this.calcularCostoSegunConsumo + this.calcularCostoSegunProcedencia;
  }
}
