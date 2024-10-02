


function insertIfNotExists(array, item, position) {
    //si el item se encuentra en el array return lo imprime por pantalla array normal
    if(!array.includes(item)){
        //en caso de entrar comprobara la posicion si es true primer, false segundo
        if(position){
            array.unshift(item)
        }else{
            array.push(item)
        }
    }
    return array
}

//lista de arrys 
let array = ['pera', 'manzana']
insertIfNotExists(array, 'pera', false)
insertIfNotExists(array, 'melon', false)
insertIfNotExists(array, 'melocoton', true)

//imprime por pantalla el arry 
console.log(array);

insertIfNotExists();


// result = insertIfNotExists(array, 'melón', false)
// assert.deepStrictEqual(result, ['pera', 'manzana', 'melón'])

// result = insertIfNotExists(array, 'melocotón', true)
// assert.deepStrictEqual(result, ['melocotón', 'pera', 'manzana', 'melón'])

