class Fatorial {
  private calcularFatorialRecursivamente(n): number {
    if (n === 1) {
      return 1;
    }

    return n * this.calcularFatorialRecursivamente(n - 1);
  }

  public calcularFatorial(fatorial): string | number {
    if (isNaN(fatorial)) {
      return "Não existe fatorial de um texto";
    }

    if (!Number.isInteger(fatorial) || fatorial < 0) {
      return "Não existe fatorial de um número não natural";
    }

    if (fatorial === 0 || fatorial === 1) {
      return 1;
    }

    return this.calcularFatorialRecursivamente(fatorial);
  }
}

export { Fatorial };
