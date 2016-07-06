
// __________________ création des fonctions génériques __________________

// fonction pour cacher les éléments et afficher le 1er élément
function begin(){
	$('#debut, #premierClic, #deuxemeClic, #troixemeClic, #quatremeClic, #cinquemeClic, #sixemeClic, #gift, #fin').css('opacity', '1').hide(); //remettre opacity à 1 pour le retour
	$('#debut').fadeIn(1000);	
};
// création de l'image papillon
var papillon = $('<img class="papillon" src="papillon.gif" alt="papillon" title="来抓我 catch me"/>');
// fonction pour clic et changer élément actuel
function clicToChange(btn1, btn2){
	$(btn1).on('click', function (){
		$(btn2).fadeIn().append(papillon);
		$(this).hide();
	});
};
// fonction pour afficher suivant
function clicToNext(btn1, btn2){	
	$(btn1).on('click', function (){
		$(btn2).fadeIn().append(papillon);
		$(this).css('opacity', '0.7');
	});
};


// __________________ appelle des fonctions __________________

begin();
clicToChange('#debut', '#premierClic');
clicToNext('#premierClic', '#deuxemeClic');
clicToNext('#deuxemeClic', '#troixemeClic');
clicToNext('#troixemeClic', '#quatremeClic');
clicToNext('#quatremeClic', '#cinquemeClic');
clicToNext('#cinquemeClic', '#sixemeClic');
clicToNext('#sixemeClic', '#gift');


// __________________ Personnaliser le dernier clic __________________

// création de dernier papillon
var papillonFin = $('<a href="#/"><img class="papillonFin" src="papillon.gif" alt="papillonFin" title="来抓我 catch me"/></a>');

$('#gift').on('click', function (){
	$('#fin').fadeIn().append(papillonFin);
	$(this).hide();
});

// clic sur le dernier papillon pour retourner au début
$(papillonFin).on('click', function (){
	begin();
});

// adaptation de l'écran différent
var $window = $(window);
var windowSize = $window.width();
if (windowSize > 600) {
	$('video').css('width', '640').css('height', '480');
};
