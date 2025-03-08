class Vasos {
  constructor(cantidad) {
    this.cantidad = cantidad;
  }
  usarVaso() {
    if (this.cantidad > 0) {
      this.cantidad--;
      return true;
    }
    return false;
  }
}

class Cafetera {
  constructor(cantidadCafe) {
    this.cantidadCafe = cantidadCafe;
  }
  servirCafe(cantidad) {
    if (this.cantidadCafe >= cantidad) {
      this.cantidadCafe -= cantidad;
      return true;
    }
    return false;
  }
}

class Azucarero {
  constructor(cantidadAzucar) {
    this.cantidadAzucar = cantidadAzucar;
  }
  usarAzucar(cantidad) {
    if (this.cantidadAzucar >= cantidad) {
      this.cantidadAzucar -= cantidad;
      return true;
    }
    return false;
  }
}

class MaquinaDeCafe {
  constructor(vasos, cafe, azucar) {
    this.vasos = new Vasos(vasos);
    this.cafetera = new Cafetera(cafe);
    this.azucarero = new Azucarero(azucar);
  }

  servirCafe(tamano, cantidadAzucar) {
    const tamanos = { pequeño: 3, mediano: 5, grande: 7 };

    if (!tamanos[tamano]) {
      return "Error: Tamaño inválido";
    }
    if (!this.vasos.usarVaso()) {
      return "Error: No hay vasos disponibles";
    }
    if (!this.cafetera.servirCafe(tamanos[tamano])) {
      return "Error: No hay suficiente café";
    }
    if (!this.azucarero.usarAzucar(cantidadAzucar)) {
      return "Error: No hay suficiente azúcar";
    }

    return `Café servido en vaso ${tamano} con ${cantidadAzucar} cucharada(s) de azúcar`;
  }
}

module.exports = MaquinaDeCafe;
