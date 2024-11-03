window.onload = function(e) {
    console.log('documento cargado')

//Cambiar el titulo del segundo h2
    document.getElementsByTagName('h1')[1].innerText = 'Changed from JS!!'
   
    

// Seleccionar el elemento con id == username
    const usernameElement = document.getElementById('username');
    console.log(usernameElement); 
    


// Cambiar el color de todos los .first que estén dentro de un artículo
    const allFirst = document.querySelectorAll('article .first')
    for (let item of allFirst) {
        item.computedStyleMap['background-color'] = 'green'
    }


//Seleccionar todos los elementos li con class == item
    const liElement = document.querySelectorAll('li.item')
    console.log(liElement)


//Seleccionar todos los buttons dentro de class == buttons
    const buttons = document.querySelectorAll('.buttons button')
    document.querySelectorAll('p')[0].style
    ['background-color'] = 'ffccff'


//Cambiar el color de frente de los elementos buttons dentro de class == buttons
    for (let item of allButtons) {
        item.style.color = 'red'
    }

/////////////////////////////////////////////////

let firstArticle = document.querySelector('article')

    let node = document.createElement('p')
    node.innerText = 'Hola mundo añadiendo nodos en el árbol DOM'    
    node.style['background-color'] = 'grey'
    node.title = 'Párrafo de ejemplo'

    let aNode = document.createElement('a')
    aNode.innerText = 'Enlace de ejemplo'
    aNode.href= 'https://www.google.es'

    node.appendChild(aNode)

    let fullNode = document.createElement('div')
fullNode.innerHTML = `Esto es un div de ejemplo
    que lleva un link <a href="http://www.marca.es">Marca</a>`

    node.appendChild(fullNode)

    firstArticle.appendChild(node)
}
    