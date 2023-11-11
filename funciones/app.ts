// Funciones Básicas
function sumar( a: number, b: number ): number{
  return a + b;
}

const contar = ( heroes: string[] ): number => {
  return heroes.length;
}
const superHeroes: string[] = ["Flash", "Arrow", "Superman", "Linterna Verde"];
contar(superHeroes);

//Parametros por defecto
const llamarBatman = ( llamar: boolean ): void => {
  if( llamar ){
    console.log("Batiseñal activada");
  }
}

llamarBatman( true );

// Rest?
const unirheroes = ( ...personas: string [] ): string => {
  return personas.join(", ");
}


// Tipo funcion
const noHaceNada = ( numero: number, texto: string, booleano: boolean, arreglo: string[] )=>{}

// Crear el tipo de funcion que acepte la funcion "noHaceNada"
let noHaceNadaTampoco: (n:number, s:string, b:boolean, a:string[]) => void;
noHaceNadaTampoco = noHaceNada

//Las estructuras de datos son una forma de organizar los datos en la computadora,
// de tal manera que nos permita realizar unas operaciones con
// ellas de forma muy eficiente.

//En ciencias de la computación, una estructura de datos​ es una forma
//particular de organizar datos en una computadora para que puedan ser utilizados
//de manera eficiente.​​​ Diferentes tipos de estructuras de datos son adecuados
// para diferentes tipos de aplicaciones, y algunos son altamente especializados
// para tareas específicas.

//Las estructuras de datos son colecciones o grupos de datos organizados de tal forma
// que tengan asociados un conjunto de operaciones para poder manipularlos.
// En programación, una estructura de datos es una forma de organizar un conjunto de datos
// elementales con el objetivo de facilitar la manipulación de estos datos como un todo
// y/o individualmente. Las estructuras de datos es una rama de las ciencias
// de la computación que estudia y aplica diferentes formas de organizar información
// dentro de una aplicación, para manipular, buscar e insertar estos datos de manera eficiente.
