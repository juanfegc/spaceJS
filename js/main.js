var cohete = $("#cohete");
var progreso = $(".progress-bar");
var volar = false;

$("#boton").click(function() {
  var btn = $(this);

  if(btn.hasClass("btn-primary")){//Boton Despegar cohete
    btn.html("<span class='glyphicon glyphicon-home'></span> Aterrizar");
    btn.removeClass("btn-primary");
    btn.addClass( "btn-danger" );
    //actualizar barra progreso
    progreso.css('width', '100%');
    //animar cohete
    cohete.attr( "src", "./img/cohete.gif" );
    volar = true;
  }else{//Boton Aterrizar
    btn.html("<span class='glyphicon glyphicon-send'></span> Despegar cohete");
    btn.removeClass("btn-danger");
    btn.addClass( "btn-primary" );
    //actualizar barra progreso
    progreso.css('width', '0%');
    //dejar de mover el cohete
    cohete.attr( "src", "./img/cohete.png" );
    volar = false;
  }
});

$("#universe").click(function( event ) {
  if(volar){
    cohete.animate({"left":event.pageX-50, "top": event.pageY-50});
    //actualizar marcador numero de viajes del cohete
    var viajes = $("span:first");
    var n = parseInt( viajes.text(), 10 );
    viajes.text( n + 1 );

    //info planeta
    $( ".info" ).hide();//oculto todos los nombres
    var target = $( event.target );
    if ( target.is( "img" ) ) {
      target.next().show();//solo muestro el nombre del planeta donde he ido
    }
  }
});

