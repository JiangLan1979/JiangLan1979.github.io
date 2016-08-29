$(function (){
	afficher();
	function afficher (){
		// load the page htm to show the dialogue
		$('#messages').load('ac.htm');
	};

	// send the message to php then transfer to htm by php
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

	// clic on the send button
	$('#send').click(function (){
		envoyer();
	});
	// type "enter"
	$(document).keyup(function (e){
		if (e.which == 13) {
			envoyer();
		};
	});
	// update the dialogue every one second
	setInterval(afficher, 1000);
});

