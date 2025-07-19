/* Operadores lógicos.
&& conjunção
|| disjunção
! negação
*/

let idade = 30

//conjunção
resultado = (idade > 20 && idade <40)
console.log(`${resultado}`)

//disjunção
resultado = (idade === 30 || idade === 45)
console.log(`${resultado}`)

//negação
resultado = !(idade === 65)
console.log(`${resultado}`)