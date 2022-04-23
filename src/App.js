class Pelicula {
    constructor(nombre, director, duración, puntaje, notas) {
        this.nombre = nombre
        this.director = director
        this.duración = duración
        this.puntaje = puntaje
        this.notas = notas
    }
        
};

let usuarioDePelis; 
document.getElementById("form-user").addEventListener('submit', manejadorFormularUsuario);

function manejadorFormularUsuario(e) {
    e.preventDefault();
    usuarioDePelis = document.getElementById("user");
    
}