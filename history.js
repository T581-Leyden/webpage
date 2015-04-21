$("#rowone").show(function(){
    $("#rowtwo").hide();
    $("#rowthree").hide();

$(function() {
    $( "#string" ).draggable();
    $( "#wood" ).draggable();
    $( "#corn" ).draggable();  
    $( "#cotton" ).draggable();
    $( "#bubble" ).draggable();  
    $( "#shells" ).draggable();
    $( "#beads" ).draggable();
});
});

  $(function() {
    $( "#draggable" ).draggable();
    $( "#droppable" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
          .find( "p" )
            .html( "You have selected _______!" );
      }
    });
  });
