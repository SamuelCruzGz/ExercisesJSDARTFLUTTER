let miDiv = document.getElementById('myDiv')

class Fibonacci {

    
serie (num){
        let inicio = 1, num1 = 0, num2= 1
        const titulo = document.createElement('h1')
        titulo.textContent = 'Serie Fibonacci'
        miDiv.appendChild(titulo)
        for (let i = 0; i<num ; i++){
            
            const texto = document.createElement('p')
            texto.textContent = `${inicio}`
            
            miDiv.appendChild(texto)
            inicio = num1 + num2
            num1 = num2
            num2 = inicio
        }
        
    }

}


let num = prompt ("Ingresa el numero de tu serie: ")

let fibo = new Fibonacci()

fibo.serie(num)