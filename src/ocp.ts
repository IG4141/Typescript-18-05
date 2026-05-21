export interface Forma {
  calcularArea(): number;
}

export class Circulo implements Forma {
  constructor(public radio: number) {}

  calcularArea(): number {
    return 3.1416 * this.radio ** 2;
  }
}

export class Rectangulo implements Forma {
  constructor(public ancho: number, public alto: number) {}

  calcularArea(): number {
    return this.ancho * this.alto;
  }
}

export class Triangulo implements Forma {
  constructor(public base: number, public altura: number) {}

  calcularArea(): number {
    return (this.base * this.altura) / 2;
  }
}

export class CalculadoraArea {
  calcularAreaTotal(formas: Forma[]): number {
    return formas.reduce((total, forma) => total + forma.calcularArea(), 0);
  }
}

export function ejemploOCP(): void {
  const formas: Forma[] = [
    new Circulo(5),
    new Rectangulo(4, 6),
    new Triangulo(3, 8),
  ];
  const calculadora = new CalculadoraArea();
  console.log(`Área total: ${calculadora.calcularAreaTotal(formas)}`);
}
