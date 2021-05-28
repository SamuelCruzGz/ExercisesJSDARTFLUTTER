let arreglo = []
let myDiv = document.getElementById('myDiv')
let suma = 0
function valRandom (){
    let aleat = document.getElementById('aleatorio').value
    let limite = document.getElementById('limite').value
    
    for (let i = 0; i<aleat; i ++){
        let num = Math.round(Math.random()*limite+1)
        let addNum = document.createElement('p')
        arreglo.push(num)
        addNum.textContent = `Se añadio el numero : ${num}`
        myDiv.appendChild(addNum)
        suma += arreglo[i]
        
        
        if (arreglo.length==aleat){
            let arr = document.createElement('p')
            arr.textContent = `El arreglo esta conformado por: ${arreglo}`
            myDiv.appendChild(arr)
            let res = document.createElement('p')
            console.log(suma);
            res.textContent = `El resultado de la suma es: ${suma}`
            myDiv.appendChild(res)
            let mayorMenor = document.createElement ('p')
            let tot = arreglo.sort()
            mayorMenor.textContent = `El arreglo de mayor a menos es: ${tot}`
            myDiv.appendChild(mayorMenor)
        }
    }
    

}


