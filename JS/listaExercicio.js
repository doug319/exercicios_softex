function calculadora(valor1, operacao, valor2){
    if (operacao == 1){
        resultado =  parseFloat(valor1) +  parseFloat(valor2)
    } else if (operacao == 2){
        resultado = valor1 - valor2 
    } else if (operacao == 3){
        resultado = valor1 * valor2 
    } else if (operacao == 4){
        resultado = valor1 / valor2 
    } else{
        resultado = 0
    }
    
    return resultado
}

num1 = prompt('Informe o primeiro valor: ')
operador = prompt('Informe a operação matemática conforme lista:' +  "\n"  +  '1- Soma' + "\n" + '2- Subtração' + "\n" + '3- Multiplicação' + "\n" + '4- Divisão: ')
num2 = prompt('Informe o segundo valor: ')

resultado = calculadora(num1, operador, num2)

document.write('O resultado é: ' + resultado)

