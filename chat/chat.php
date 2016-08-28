<?php

//On récupère le pseudo et on le stocke dans une variable
$nom = $_POST['nom'];
//On fait de même avec le message
$message = $_POST['message'];
//Le message est créé
$ligne = '<div class="ligne"><span class="nom">'.$nom.' : </span><span class="message">'.$message.'</span></div>';
//On lit le fichier ac.htm et on stocke la réponse dans une variable (de type tableau)
$leFichier = file('ac.htm');
//On ajoute le texte calculé dans la ligne précédente au début du tableau
array_unshift($leFichier, $ligne);
//On écrit le contenu du tableau $leFichier dans le fichier ac.htm
file_put_contents('ac.htm', $leFichier);

?>
