export interface Forma {
  calcularArea(): number;
}

export class Rectangulo implements Forma {
  constructor(public ancho: number, public alto: number) {}

  calcularArea(): number {
    return this.ancho * this.alto;
  }
}

export class Cuadrado implements Forma {
  constructor(public lado: number) {}

  calcularArea(): number {
    return this.lado ** 2;
  }
}

export function calcularAreaTotal(formas: Forma[]): number {
  return formas.reduce((total, forma) => total + forma.calcularArea(), 0);
}

export function ejemploLSP(): void {
  const formas: Forma[] = [new Rectangulo(5, 4), new Cuadrado(3)];
  console.log(`Área total: ${calcularAreaTotal(formas)}`);
}
