// Logica

// Genera numeros aleatorios
let getRandomNumber = paso => {
    return Math.floor(Math.random() * paso);
}


// Distrancia entre puntos
let getDistance = (e, target) => {
    let diffX = e.offsetX - target.x;
    let diffY = e.offsetY - target.y;
    return Math.sqrt((diffX * diffX) + (diffY * diffY));
}

// Devuelve return dependiendo de la distancia 
let getDistanceHint = distance => {
    if (distance < 30) {
        return "Ardiendo!";
    } else if (distance < 40) {
        return "Muy Caliente";
    } else if (distance < 60) {
        return "Caliente";
    } else if (distance < 100) {
        return "Frio";
    } else if (distance < 180) {
        return "Muy Frio";
    } else if (distance < 360) {
        return "Demasiado Frio";
    } else {
        return "congelado!";
    }
}
// *******************
const WIDTH = 600;
const HEIGHT = 600;

let NumAleatorio = {
    x: getRandomNumber(WIDTH),
    y: getRandomNumber(HEIGHT)

};

let mapa = document.getElementById('mapa');
let distancia = document.getElementById('distancia');
let click = 0;
mapa.addEventListener('click', function (e) {
    click++;
    let distance = getDistance(e, NumAleatorio);
    let distanceHint = getDistanceHint(distance);
    distancia.innerHTML = distanceHint;

    if (distance < 20) {
        alert('Has encontrado al topo en ' + click + ' click');
        location.reload();
    }
});