function cargarSelect() {
	$(document).ready(function(){
        $.getJSON("https://raw.githubusercontent.com/dariosus/jsonProvincias/master/provincias.json", function(result){
            $.each(result, function(i, field){
                $('#provincia').append($('<option>', { 
        			value: field.state,
        			text : field.state 
    				}));
            	});
        });
    });
};
    
function borrar() {
	$(":input").val('');
}
	
function calcular() {
	$('#totalAPagar').val(
			parseFloat($('#importe').val()) + parseFloat(($('#tazaInteres').val() * ($('#importe').val() / 100)))
	);
	$('#cuotaMensual').val(
			$('#totalAPagar').val() / 12
	);
}
