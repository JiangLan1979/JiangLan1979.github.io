$(function (){
	afficher();
	function afficher (){
		// charger la page htm
		$('#messages').load('ac.htm');
	};

	// envoyer un message à la page php puis transferer à htm par php
	function envoyer (){
		var nom = $('#nom').val();
		var message = $('#message').val();
		$.post(
				'chat.php',
				{'nom' : nom, 'message' : message},
				afficher
			  );
		$('#message').val('').focus();
	}

	$('#send').click(function (){
		envoyer();
	});
	$(document).keyup(function (e){
		if (e.which == 13) {
			envoyer();
		};
	});
	setInterval(afficher, 1000);
});

