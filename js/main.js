
var cohete = $("#cohete");
var progreso = $(".progress-bar");
var volar = false;
//guardar coordenadas click anterior para calcular direccion cohete
var origenX = 0;
var origenY = 0;


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
    limpiarClassCohete();
    cohete.attr( "src", "./img/cohete.png" );
    volar = false;
  }
});


$("#universe").click(function( event ) {
  if(volar){
    //actualizar marcador numero de viajes del cohete
    var viajes = $("span:first");
    var n = parseInt( viajes.text(), 10 );
    viajes.text( n + 1 );

    //info planeta
    $( ".info" ).hide();//oculto todos los nombres
    var target = $( event.target );
    if ( target.is( "img" ) ) {
      target.next().show();//solo muestro el nombre del planeta donde he viajado actualmente
    }

    //posicionar cohete en nuevo destino
    cohete.animate({"left":event.pageX-50, "top": event.pageY-50}, 1000);
    limpiarClassCohete();
    if(event.pageX >= origenX){//derecha
      if(event.pageY >= origenY){//abajo
        cohete.addClass( "dirDerechaAbajo" );
      }else{//arriba
        cohete.addClass( "dirDerechaArriba" );
      }
    }else{//izquierda
      if(event.pageY >= origenY){//abajo
        cohete.addClass( "dirIzquierdaAbajo" );
      }else{//arriba
        cohete.addClass( "dirIzquierdaArriba" );
      }
    }
  }

  origenX = event.pageX;
  origenY = event.pageY;

});

function limpiarClassCohete(){
  cohete.removeClass( "dirDerechaAbajo" );
  cohete.removeClass( "dirDerechaArriba" );
  cohete.removeClass( "dirIzquierdaAbajo" );
  cohete.removeClass( "dirIzquierdaArriba" );
}

