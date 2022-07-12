class Multiplo {
  private numeroTres: number;
  private numeroCinco: number;
  private numeroPrincipal: number;

  constructor(numeroPrincipal: number) {
    this.numeroPrincipal = numeroPrincipal;
    this.numeroCinco = 5;
    this.numeroTres = 3;
  }

  public calcularMultiplos(): number | string {
    if (isNaN(this.numeroPrincipal)) {
      return "Não existe multiplo de texto.";
    }

    let total: number = 0;

    for (let i = 0; i < this.numeroPrincipal; i++) {
      if (i % 3 == 0 || i % 5 == 0) {
        total += i;
      }
    }

    return total;
  }
}

export { Multiplo };
