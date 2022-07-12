interface IPercentual {
  number: number;
}

class Voto {
  private totalVotos: number;
  private validos: number;
  private votosBrancos: number;
  private votosNulos: number;

  constructor() {
    this.totalVotos = 1000;
    this.validos = 800;
    this.votosBrancos = 150;
    this.votosNulos = 50;
  }

  public percentualDeVotosValido(): void {
    const porcentagem = (this.validos / this.totalVotos) * 100;

    console.log(
      "Resultado do percentual de votos validos: " + porcentagem + "%"
    );
  }
  public percentualDeVotosBranco(): void {
    const porcentagemVotosBrancos = (this.votosBrancos / this.totalVotos) * 100;

    console.log(
      "Resultado do percentual de votos em branco: " +
        porcentagemVotosBrancos +
        "%"
    );
  }
  public percentualDeVotosNulo(): void {
    const porcentagemVotosNulos = (this.votosNulos / this.totalVotos) * 100;

    console.log(
      "Resultado do percentual de votos em branco: " +
        porcentagemVotosNulos +
        "%"
    );
  }
}

export { Voto };
