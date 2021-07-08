var colorBici = 0;

function cambiarImagen(){
    foto = document.getElementById("cambiaFoto");
    var boton = this.id;
    if (boton === "botonNegro") {
            foto.src = "IMAGENES/bici_cuadro_negro.png";
            colorBici="negra";
            actualizar()
        } else if (boton === "botonBlanco") {
            foto.src = "IMAGENES/bici_cuadro_blanco.png";
            colorBici="Blanca";
            actualizar()
        }
        else if (boton === "botonRojo") {
            foto.src = "IMAGENES/bici_cuadro_rojo.png";
            colorBici="Roja";
            actualizar()
        }
        else if (boton === "botonVerde") {
            foto.src = "IMAGENES/bici_cuadro_verde.png";
            colorBici="Verde";
            actualizar()
        }
        else if (boton === "botonAzul") {
            foto.src = "IMAGENES/bici_cuadro_azul.png";
            colorBici="Azul";
            actualizar()
        }
    }

$("#botonNegro").click(cambiarImagen);
$("#botonBlanco").click(cambiarImagen);
$("#botonRojo").click(cambiarImagen);
$("#botonVerde").click(cambiarImagen);
$("#botonAzul").click(cambiarImagen);


let transmision = $("#transmision");
transmision.change(actualizar);
let ruedaDel = $("#RuedaDel");
ruedaDel.change(actualizar);
let ruedaTras = $("#RuedaTras");
ruedaTras.change(actualizar);


function actualizar(){
    var transmisionElegida= $("#transmision").val();
    var ruedaDelElegida= $("#RuedaDel").val();
    var ruedaTrasElegida=$("#RuedaTras").val();
    $("#resultado").html("Cotizaremos una bicicleta " + transmisionElegida + " de color " +colorBici+", con una rueda delantera " + ruedaDelElegida + " y una rueda trasera " + ruedaTrasElegida);
    $("#cambios").fadeIn(500);
    $("#cambios").fadeOut(500);
    
}
//Declaramos la url que vamos a usar para el GET
const URLGET = "http://hp-api.herokuapp.com/api/characters"
//Agregamos un botón con jQuery
$("body").prepend('<button id="btn1">trae a harry y sus amiges</button>');
//Escuchamos el evento click del botón agregado
$("#btn1").click(() => { 
    $.get(URLGET, function (respuesta, estado) {
          if(estado === "success"){
            let misDatos = respuesta;
            for (const dato of misDatos) {
              $("#contenedorPersonajes").append(
                  `            <div class="col">
                  <div class="card"style="width:200px">
                  <img src="${dato.image}" class="card-img-top">  
                  <div class="card body">
                  <h5 class="card-title">${dato.name}</h5>
                  <p class="card-text">${dato.actor}</p>
                  </div>
                  </div>
                  </div>`);
            }  
          }
    });
});
