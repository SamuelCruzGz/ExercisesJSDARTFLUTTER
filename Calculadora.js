let myDiv = document.getElementById('myDiv')

class Calculadora{

    suma(a,b){

        let titulo = document.createElement('h4')
        titulo.textContent = 'Suma'
        let suma = document.createElement('p')
        
        suma.textContent = `${parseInt(a)+parseInt(b)}`
        myDiv.appendChild(titulo)
        myDiv.appendChild(suma)
    }

    resta (a,b){

        let titulo = document.createElement('h4')
        titulo.textContent = 'Resta'
        let resta = document.createElement('p')
        
        resta.textContent = `${parseInt(a)-parseInt(b)}`
        myDiv.appendChild(titulo)
        myDiv.appendChild(resta)
    }

    producto (a,b){

        let titulo = document.createElement('h4')
        titulo.textContent = 'Producto'
        let producto = document.createElement('p')
        
        producto.textContent = `${parseInt(a)*parseInt(b)}`
        myDiv.appendChild(titulo)
        myDiv.appendChild(producto)
    }

    division (a,b){

        let titulo = document.createElement('h4')
        titulo.textContent = 'Division'
        let division = document.createElement('p')
        
        division.textContent = `${parseInt(a)/parseInt(b)}`
        myDiv.appendChild(titulo)
        myDiv.appendChild(division)
    }

}

var calcu = new Calculadora ()

function Sumar (){
    var a = document.getElementById('num1').value
    var b = document.getElementById('num2').value
    
    calcu.suma(a,b)
}

function Restar (){
    var a = document.getElementById('num1').value
    var b = document.getElementById('num2').value
    
    calcu.resta(a,b)
}

function Multiplicar (){
    var a = document.getElementById('num1').value
    var b = document.getElementById('num2').value
    
    calcu.producto(a,b)
}

function Dividir (){
    var a = document.getElementById('num1').value
    var b = document.getElementById('num2').value
    
    calcu.division(a,b)
}
