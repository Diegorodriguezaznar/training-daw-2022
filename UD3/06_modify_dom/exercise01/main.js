window.onload = function(e) {
    console.log('documento cargado');
    document.getElementsByTagName('h2')[1].innerText = 'Changed from JS!';
    const username = document.getElementById('username');
    console.log(username);
    const allFirst = document.querySelectorAll('article .first');

    for (let item of allFirst) {
        item.style['background-color'] = 'red';
    }
    const allLi = document.querySelectorAll('li.item');

    for (let item of allLi) {
    console.log(item);
    }

    const allButtons = document.querySelectorAll('.buttons button');

    document.querySelectorAll('p')[0].style['background-color'] = '#ffccff';

    for (let item of allButtons){
        item.style.color = 'red'
    }

    let firstArticle = document.querySelector('article')

    let node = document.createElement('p')
    node.innerText = 'Hola mundo añadiendo nodos en el árbol DOM'    
    node.style['background-color'] = 'yellow'
    node.title = 'Párrafo de ejemplo'

    let aNode = document.createElement('a')
    aNode.innerText = 'Enlace de ejemplo'
    aNode.href= 'https://www.google.es'

    node.appendChild(aNode)

    let fullNode = document.createElement('div')
    fullNode.innerHTML = `Esto es un div de ejemplo
    que lleva un link <a href="http://www.marca.es">Marca</a>`

    node.appendChild(fullNode)

    firstArticle.insertBefore(node, firstArticle.childNodes[2])


    // Borrar nodos
    firstArticle.removeChild(firstArticle.childNodes[1])

}