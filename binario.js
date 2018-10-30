// Binario a texto
$('#binario').on('change keyup paste input',function(){
   $('#texto').val('');
   var str = $('#binario').val()
   str = str.trim();
   str = str.split(' ');
   str.forEach(function(i){
      var char = String.fromCharCode(parseInt(i,2));
      var oldText = $('#texto').val();
      $('#texto').val(oldText + char);
   });
   $('#copiar').text('Copiar');
});

// Texto a binario
$('#convertir').click(function(){
  var text = $('#texto').val();
  text = text.split('');
  var binary = '';
  text.forEach(function(i) {
    binary = binary + i.charCodeAt().toString(2) + ' ';
  });
  $('#binario').val(binary);
});

$('#copiar').click(function(){
    clipboard.writeText($('#texto').val());
    $('#copiar').text('Copiado !');
});