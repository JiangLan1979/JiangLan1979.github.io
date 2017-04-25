$(function(){

// ===========================
//     Aperçu formulaire
// ===========================
	function apercu ( selecteur, affichage ){
		$('a[href="#myPopup"]').click( function (){
			var saisi = $(selecteur).val();
			$(affichage).html(saisi);
		});
	}

	apercu('input[name="nom"]', '.nom');
	apercu('input[name="prenom"]', '.prenom');
	apercu('input[name="sex"]:checked', '.sex');
	apercu('select[name="pays"]', '.pays');
	apercu('input[name="telephone"]', '.telephone');
	apercu('input[name="email"]', '.email');
	apercu('select[name="date"]', '.date');
	apercu('select[name="temps"]', '.temps');

	// checkbox
	$('a[href="#myPopup"]').click( function (){

		// ajouter chaque checkbox sélectionné dans le tableau 
		var val = [];
		$(':checkbox:checked').each(function (i){
		  val[i] = $(this).val();
		});

		myString = '';
		val.forEach(function (e){
			myString += '<div>' + e + '</div>';
		});
		$('.produit_type').html(myString);

	});
});