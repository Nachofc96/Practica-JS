const estudiantes = [
    { nombre: "Juan", edad: 20, notas: [85, 98, 78, 88, 90] },
    { nombre: "María", edad: 21, notas: [75, 80, 92, 89, 78] },
    { nombre: "Carlos", edad: 22, notas: [95, 88, 76, 92, 84] },
    { nombre: "Pedro", edad: 21, notas: [80, 82, 70, 90, 85] },
    { nombre: "Daniel", edad: 21, notas: [85, 80, 61, 90, 82] }
];



let acumulador = 0
let contador = 0
let notaMin = Infinity
let estudianteNotaMasBaja
let notaMax = -Infinity
let estudianteNotaMasAlta

for (let i = 0; i < estudiantes.length; i++) {
    const estudiante = estudiantes[i]
    const notas = estudiante.notas

    for (let j = 0; j < notas.length; j++) {

        //promedio general de la clase
        const nota = notas[j]
        acumulador = acumulador + nota
        contador = contador + 1


        //estudiante con la nota mas baja
        if (nota <= notaMin) {
            notaMin = nota
            estudianteNotaMasBaja = estudiante.nombre
        }

        //estudiante con la nota mas alta
        if (nota >= notaMax) {
            notaMax = nota
            estudianteNotaMasAlta = estudiante.nombre
        }

    }
}

console.log('Promedio general:', acumulador / contador)
console.log(`El estudiante con la nota mas baja: ${estudianteNotaMasBaja} y su nota es: ${notaMin}`)
console.log(`El estudiante con la nota mas alta: ${estudianteNotaMasAlta} y su nota es: ${notaMax}`)