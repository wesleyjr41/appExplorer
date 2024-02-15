// Función para mostrar los sonidos correspondientes al sonido seleccionado
function mostrarCancion(sonido) {
    // Mapa de los sonidos correspondientes según las reglas dadas
    var sonidosCorrespondientes = {
        "brr": ["fiu", "cric-cric", "brrah"],
        "birip": ["trri-trri", "croac"],
        "plop": ["cric-cric", "brrah"],
        "croac": [],
        "brrah": []
    };

    // Obtener el elemento donde se mostrarán los sonidos correspondientes
    var songContainer = document.getElementById("song");

    // Restablecer el contenido del contenedor de los sonidos correspondientes
    songContainer.innerHTML = '';

    // Obtener los sonidos correspondientes al sonido seleccionado
    var sonidos = sonidosCorrespondientes[sonido];

    // Mostrar los sonidos correspondientes si existen
    if (sonidos && sonidos.length > 0) {
        var sonidosCaja = sonidos.map(function(sound) {
            return '<div class="sound-box">' + sound + '</div>';
        }).join('');

        songContainer.innerHTML = '<h1><strong>Canciones:</strong></h1> ' + sonidosCaja;
    }
}
