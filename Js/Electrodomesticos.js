class Electrodomestico {
  constructor(consumo, procedencia) {
    this.consumo = consumo;
    this.procedencia = procedencia;
  }

  get getConsumo() {
    return this.consumo;
  }
  set setConsumo(consumo) {
    this.consumo = consumo;
  }
  set setProcedencia(procedencia) {
    this.procedencia = procedencia;
  }

  get getProcedencia() {
    return this.procedencia;
  }

  calcularCostoSegunConsumo() {
    switch (this.consumo) {
      case "A":
        return 450000;
      case "B":
        return 350000;
      case "C":
        return 250000;
    }
  }

  calcularCostoSegunProcedencia() {
    if (this.procedencia == "NACIONAL") {
      return 250000;
    } else if (this.procedencia == "IMPORTADO") {
      return 350000;
    }
  }

  calcularCostoTotal() {
    return (
      this.calcularCostoSegunConsumo() + this.calcularCostoSegunProcedencia()
    );
  }
}
export { Electrodomestico };
