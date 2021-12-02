// Desafio 1
function desafio1() {
  // Se pide el primer numero
  var num1 = prompt( 'Ingrese el primer número mayor a 0' );

  // Comprobar si es un numero
  if ( num1 != Number(num1) ) {
    // En que caso de que no lo sea, salir de la funcion
    return alert( 'No es un número válido' );
  }
  // Transformar a numero
  num1 = Number(num1);
  
  // Se pide el segundo numero
  var num2 = prompt( 'Ingrese el segundo número' );

  // Comprobar si es un numero
  if ( num2 != Number(num2) ) {
    // En que caso de que no lo sea, salir de la funcion
    return alert( 'No es un número válido' );
  }
  // Transformar a numero
  num2 = Number(num2);

  // Se imprimen los resultados de las operaciones
  alert( `La suma entre ${ num1 } y ${ num2 } es ${ num1 + num2 }` );
  alert( `La resta entre ${ num1 } y ${ num2 } es ${ num1 - num2 }` );
  alert( `La división entre ${ num1 } y ${ num2 } es ${ num1 / num2 }` );
  alert( `La multiplicación entre ${ num1 } y ${ num2 } es ${ num1 * num2 }` );
  alert( `El módulo entre ${ num1 } y ${ num2 } es ${ num1 % num2 }` );
}
// ----------------------------------------------------------------------

// Desafio 2
function desafio2() {
  // Se pide ingresar temperatura en grados celcius
  var gradosC = prompt( 'Ingrese la temperatura en celcius' );

  // Comprobar si es un numero
  if ( gradosC != Number(gradosC) ) {
    // En que caso de que no lo sea, salir de la funcion
    return alert( 'No es un valor válido' );
  }
  // Transformar a numero
  gradosC = Number(gradosC);

  // Transformar a Kelvin
  const gradosK = gradosC + 273.15;

  // Transformar a Fahrenheit
  const gradosF = ( gradosC * (9/5) ) + 32;

  // Se muestran los resultados
  alert( `${ gradosC }° Celcius equivalen a ${ gradosK }° Kelvin y a ${ gradosF}° Fahrenheit` );
}




















// Desafio 3
function desafio3() {
  alert( 'Hola 3' );
}
// ----------------------------------------------------------------------

// Desafio 4
function desafio4() {
  alert( 'Hola 4' );
}
// ----------------------------------------------------------------------



