$(document).ready(function () {

       //permette l'eliminazione dei libri letti in "letture recenti"
       $("#trash").click(function () {
              $(".libri1").remove(); 
        });

       // limita inserimento caratteri nel form "numero pagine"
       $(".onlyNumber").keypress(function(evt) {
              var charCode=(evt.which)?evt.which:event.keyCode;
              if (charCode>31 && (charCode<48 || charCode>57))
                     return false;
              return true;
       }); 
       
       //limita inserimento data
       $("#datepicker").datepicker({
              timepicker: false,
              dateFormat: "dd-mm-yy",
              maxDate: 'today'
       });

       //stampa output valori inseriti nel form
       $("#getValBtnID").click(function () {

              //recupero i valori inseriti nel form 
              var inputAutore = $("#inputAutore").val();
              var inputTitolo = $("#inputTitolo").val();
              var inputAnno = $("#datepicker").datepicker("getDate");
              var inputPagine = $(".onlyNumber").val();  
              
              //visualizzo div contenente nuovi libri
              $('.lista').removeAttr('hidden');
              //refresh del form afret submit
              $("form")[0].reset();

              //genero un div all'interno di "lista" contenente valori inseriti nel form 
              $(".lista").append('<div class="libri">' + '<h2>Nuovo libro inserito!</h2>' + '<p class="titolo" id="upper">Autore: ' +  inputAutore + '</p>' +  '<p class="titolo">Titolo: ' +  inputTitolo + '</p>' +  '<p class="titolo">Anno di pubblicazione: ' +  inputAnno + '</p>' + '<p class="titolo">Numero di pagine: ' +  inputPagine + '</p>' + 
                     '<button type="button" class="btn btn-primary delete" id="trash"><span class="bi bi-trash blue-color" id="elimina"></span></button>' + 
                     '<label for="toggleEsempio3b" class="toggle">' + 'Letto' + '<input type="checkbox" id="toggleEsempio3b">' + ' <span class="lever"></span>' + '</label>' + "</div>");

              //elimina, al click dell'icona, div contenente info libro
              $('.delete').on("click", function(){
                     $(this).closest(".libri").remove();
              });  
        });
});

