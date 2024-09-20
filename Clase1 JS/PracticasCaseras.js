let X = null;
console.log(X);

let W;
console.log(W);

let cantidadDisponible = 30;
console.log(cantidadDisponible);
console.log(typeof cantidadDisponible);

let b = new Date(2003, 12, 26);
console.log(b);
console.log(typeof b);
console.log(b.constructor);

let colores = ["amarillo", "verde", "rojo"];
console.log(colores[1]);

colores.push("lila");
colores.unshift("marron");
colores.sort();
console.log(colores);

function sumar(a, b) {
  return a + b;
}

let a = sumar(2, 6);

let persona = { nombre: "Luciano", apellido: "Paglino" };
console.log(persona);
