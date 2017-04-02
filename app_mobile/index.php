<?php

	date_default_timezone_set('Europe/Paris');

	$weekdays = array('星期天', '星期一', '星期二', '星期三', '星期四', '星期五','星期六');

	// définis le début et la fin de date, le lendemain et dans 5 mois
	$curDate = date('Y-m-d', strtotime('+1 day'));
	$endDate = date('Y-m-d', strtotime('+4 months +28 days'));

	$myArr = array();
	while ( $endDate >= $curDate)
	{
		// 'w' retourne le numéro de jour, dimanche = 0, lundi = 1 etc
		$indexJour = date('w', strtotime($curDate));
		
		if ($indexJour !== '0') {
			array_push($myArr, $curDate . ' ' . $weekdays[$indexJour]);
		}
		// ajouter un jour sur la date de début
		$curDate = date('Y-m-d', strtotime($curDate . '+1 day'));
	}

?>

<!doctype html>
<html>
<head>
	<meta charset="utf-8">
	<!-- Include meta tag to ensure proper rendering and touch zooming -->
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<!-- Include jQuery Mobile stylesheets -->
	<link rel="stylesheet" href="https://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.css">
	<!-- Include the jQuery library -->
	<script src="https://code.jquery.com/jquery-1.11.3.min.js"></script>
	<!-- Include the jQuery Mobile library -->
	<script src="https://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.js"></script>
	<title>Tutoriel Mobile</title>
</head>
<body>
  <div data-role="header">
    <h1>app mobile</h1>
  </div>

  <div data-role="main" class="ui-content">
  	<p>Liste de date du lendemain au 5 mois sans Dimanch jour en chinois</p>
	<form>
	  <fieldset class="ui-field-contain">
	    <label for="day">Select Day</label>
	    <select name="day" id="day">
	    	<option>请选择</option>
	    	<?php
				for ($i=0; $i < count($myArr); $i++) { ?>
					<option value="<?php echo $myArr[$i];?>"><?php echo $myArr[$i];?></option>
			<?php } ?>
	      
	    </select>
	  </fieldset>
	</form>
  </div>

  <div data-role="footer">
    <h1>Footer</h1>
  </div>


</body>
</html>