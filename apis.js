//Una vez que carga el documento ejecuto la función = ready()
$(document).ready(function () {
  $.ajax({
    url: "https://dog.ceo/api/breeds/list", //url
    method: "GET", //tipo de consulta
    dataType: "json", // formato que viene la info
    //Si recibe la respuesta correctamente, ocurre la función success
    success: function (data) {
      console.log(data);
      /* Recorre los datos, captura el div con clase #list-group y le agrega para cada enlace*/
      data.message.forEach((raza) => {
        $("#list-group").append(
          `<button type="button" onclick="imagenModal('${raza}')" data-bs-toggle="modal" data-bs-target="#modalButton" class="list-group-item list-group-item-action list-group-item-success" > ${raza} </button>`
        );
      });
    },
  });

  //Funcion para ver la imagen en el modal
  imagenModal = (raza) => {
    $.ajax({
      url: `https://dog.ceo/api/breed/${raza}/images/random`,
      method: "GET",
      success: function (data) {
        $("#titleModalLabel").html(`${raza}`); //htm => voy a pintar ese html
        $("#imagen").attr("src", data.message); //le agrego la direccion de la img
      },
    });
  };
});

/* Uso de data-bs-targety y data-bs-togglePor
--Alternar entre modales--
Alterne entre múltiples modales con una ubicación inteligente de los atributos data-bs-targety . data-bs-togglePor ejemplo, podría alternar un modal de restablecimiento de contraseña desde un modal de inicio de sesión ya abierto. Tenga en cuenta que no se pueden abrir múltiples modales al mismo tiempo ; este método simplemente alterna entre dos modales separados.
 */
