function convertirASegundos(tiempoEnSegundos) {
    let horas = Math.floor(tiempoEnSegundos / 3600);
    
    let minutos = Math.floor((tiempoEnSegundos % 3600) / 60);
    
    let segundos = tiempoEnSegundos % 60;
    
    console.log(`${horas} horas, ${minutos} minutos, ${segundos} segundos`);
}

let totalSegundos = 7265;
convertirASegundos(totalSegundos);