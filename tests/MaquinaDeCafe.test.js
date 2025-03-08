const MaquinaDeCafe = require("../src/MaquinaDeCafe");

describe("Máquina de Café", () => {
  let maquina;

  beforeEach(() => {
    maquina = new MaquinaDeCafe(10, 10, 10);
  });

  test("Debe permitir seleccionar un vaso pequeño de café", () => {
    expect(maquina.servirCafe("pequeño", 1)).toBe(
      "Café servido en vaso pequeño con 1 cucharada(s) de azúcar"
    );
  });

  test("Debe permitir seleccionar un vaso mediano de café", () => {
    expect(maquina.servirCafe("mediano", 2)).toBe(
      "Café servido en vaso mediano con 2 cucharada(s) de azúcar"
    );
  });

  test("Debe permitir seleccionar un vaso grande de café", () => {
    expect(maquina.servirCafe("grande", 3)).toBe(
      "Café servido en vaso grande con 3 cucharada(s) de azúcar"
    );
  });

  test("Debe mostrar un mensaje si no hay vasos disponibles", () => {
    maquina.vasos.cantidad = 0;
    expect(maquina.servirCafe("pequeño", 1)).toBe(
      "Error: No hay vasos disponibles"
    );
  });

  test("Debe mostrar un mensaje si no hay suficiente café", () => {
    maquina.cafetera.cantidadCafe = 2;
    expect(maquina.servirCafe("grande", 1)).toBe(
      "Error: No hay suficiente café"
    );
  });

  test("Debe mostrar un mensaje si no hay suficiente azúcar", () => {
    maquina.azucarero.cantidadAzucar = 1;
    expect(maquina.servirCafe("mediano", 2)).toBe(
      "Error: No hay suficiente azúcar"
    );
  });

  test("Debe mostrar un mensaje si se ingresa un tamaño inválido", () => {
    expect(maquina.servirCafe("extra grande", 1)).toBe(
      "Error: Tamaño inválido"
    );
  });
});
