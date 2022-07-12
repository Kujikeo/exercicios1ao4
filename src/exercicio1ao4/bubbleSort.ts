interface IPercentual {
  number: number;
}

class BubbleSort {
  private vetor: number[];

  constructor(numberArray: number[]) {
    this.vetor = numberArray;
  }

  public bubbleSort(): void {
    for (let i = 0; i < this.vetor.length; i++) {
      for (let j = i + 1; j < this.vetor.length; j++) {
        if (this.vetor[i] > this.vetor[j]) {
          let aux = this.vetor[i];
          this.vetor[i] = this.vetor[j];
          this.vetor[j] = aux;
        }
      }
    }
    console.log(this.vetor);
  }
}

export { BubbleSort };
