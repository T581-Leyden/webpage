
$("#rowone").show(function(){
    $("#rowtwo").hide();
    $("#rowthree").hide();

$(function() {
    $( "#string" ).draggable();
    $( "#wood" ).draggable();
    $( "#corn" ).draggable();  
    $( "#cotton" ).draggable();
    $( "#bubble" ).draggable();
    $( "#cloth" ).draggable();
    $( "#shells").draggable();
    $( "#beads" ).draggable();
    $( "#dress" ).draggable();  
    $( "#hair" ).draggable();
    $( "#body" ).draggable();
});
});


/**Game**/
$("#bubble").click(function(){
    $("#speech").html("Round 2");
});


/**History**/
$("#string").click(function(){
    $("#text").html("text");
    $(this).css("border", "solid");
});

$("#cotton").click(function(){
    $("#text").html("text");
    $(this).css("border", "solid");
});

$("#corn").click(function(){
    $("#text").html("text");
    $(this).css("border", "solid");
});

$("#shells").click(function(){
    $("#text").html("text");
    $(this).css("border", "solid");
});
 
$("#beads").click(function(){
    $("#text").html("text");
    $(this).css("border", "solid");
});


$("#cloth").click(function(){
    $("#text").html("text");
    $(this).css("border", "solid");
});


  $(function() {
    $( "#draggable" ).draggable();
    $( "#droppable" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
            .html("");
      }
    });
  });
