let myDiv = document.getElementById('myDiv')

class Gelatina {

    sabor(sabor){
        let titulo = document.createElement('h4')
        titulo.textContent = "Tu gelatina es de sabor"
        let saborT = document.createElement('p')
        saborT.textContent = `${sabor}`
        myDiv.appendChild(titulo)
        myDiv.appendChild(saborT)
    }

    color(color){
        let titulo = document.createElement('h4')
        titulo.textContent = "Tu gelatina es de color"
        let colorT = document.createElement('p')
        colorT.textContent = `${color}`
        myDiv.appendChild(titulo)
        myDiv.appendChild(colorT)
    }
}

let gel = new Gelatina()

function crear(){
    let sabor = document.getElementById('sabor').value
    let color = document.getElementById('color').value
    gel.sabor(sabor)
    gel.color(color)
}