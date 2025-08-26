
export function addTwoNumbers(num1, num2){
  console.log(num1+num2)
}

// Suma de dos numeros
function sumTwoNumbers(num1, num2){
  console.log(num1+num2)
}

// Resta de dos numeros

function restTwoNumbers(num1, num2){
  console.log(num1-num2)
}

// prueba de resta

//restTwoNumbers(4,1)

//Division de dos numeros

function divideTwoNumbers(num1,num2){
  console.log(num1/num2);
}
//prueba division
// divideTwoNumbers(10,2)

//Suma de tres numeros

//function sumThreeNumbers(num1,num2,num3){
//  console.log(num1+num2+num3);
//}
// prueba suma de tres parametros
//sumThreeNumbers(5,5,5)
function multTwoNumbers(num1,num2){
  console.log(num1*num2); 
}

const option = +prompt("Hola, esto es una calculadora sencilla! \n seleccione una opcion escribiendo el número: \n 1.Suma \n 2.Resta \n 3.Multiplicación \n 4.División");
//Usé {} para cada case para así poder usar num1 y num2 y no tener que renombrar todas las variables
switch(option){
    case 1:{
      alert("Haz seleccionado Suma");
      const num1 = +prompt("Ingresa el primer numero a sumar:")
      const num2 = +prompt("Ingrese el segundo numero a sumar:")
      sumTwoNumbers(num1,num2)
      alert(num1+num2)
      break }
         
    case 2:{
      alert("Haz seleccionado Resta");
      const num1 = +prompt("Ingresa el primer numero a restar:")
      const num2 = +prompt("Ingrese el segundo numero a restar:")
      restTwoNumbers(num1,num2)
      alert(num1-num2)
      break }
    
    case 3:{
      alert("Haz seleccionado Multiplicación");
      const num1 = +prompt("Ingresa el primer numero a multiplicar:")
      const num2 = +prompt("Ingrese el segundo numero a multiplicar:")
      multTwoNumbers(num1,num2)
      alert(num1*num2)
      break }   
        
    case 4:{
      alert("Haz seleccionado División");
      const num1 = +prompt("Ingresa el primer numero a dividir:")
      const num2 = +prompt("Ingrese el segundo numero a dividir:")
      divideTwoNumbers(num1,num2)
      alert(num1/num2)
      break }
      
      
    default:
        alert("ingrese una opcion de las marcadas de favor (en numero)");
        
}