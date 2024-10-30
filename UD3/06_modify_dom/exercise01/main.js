window.onload = function(e) {
    console.log('documento cargado')

    document.getElementsByTagName('h1')[1].innerText = 'Changed from JS!!'
   
    

    const usernameElement = document.getElementById('username');
    console.log(usernameElement); 
    


    const allFirst = document.querySelectorAll('article .first')
    for (let item of allFirst) {
        item.computedStyleMap['background-color'] = 'green'
    }


    const liElement = document.querySelectorAll('li.item')
    console.log(liElement)


    const buttons = document.querySelectorAll('.buttons button')
    document.querySelectorAll('p')[0].style
    ['background-color'] = 'ffccff'


    for (let item of allButtons) {
        item.style.color = 'red'
    }


}