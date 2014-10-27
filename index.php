<?php
require_once("config/constants.php");
require_once("config/database.php");

global $db_link;

$sql = "SELECT * FROM ".TBL_COLLECTIONS." ORDER BY `id` ASC";
$query = mysql_query($sql, $db_link) or die(mysql_error());

$collections = array();

while ($row = mysql_fetch_assoc($query)) {
	$new_coll = array();
	
	$new_coll["id"] = $row["id"];
	$new_coll["title"] = $row["title"];
	$new_coll["discription"] = $row["discription"];
}

$p_sql = "SELECT * FROM ". TBL_PICTURES." WHERE `is_cover`='1' AND `collection` ='".$row["id"]."' ORDER BY `id` ASC";
$p_query = mysql_query($p_sql, $db_link) or die(mysql_error());

$cover_photo = "";
while ($p_row = mysql_fetch_assoc($p_query)) {
	$cover_photo = DIR_IMG."/".$row["id"]."/".$p_row["filename"];
}

$new_coll["cover"] = $cover_photo;
$collections[] = $new_coll;

include "temp/header.php";
?>

<div id="frame">
	<div id="slider-container">
		<div id="image-text">
			<img src="img/right-arrow.png" id="prev" />

			<img src="img/left-arrow.png" id="next" />
		</div>
	</div>
</div>
<!--<div id="slider-dots-container"></div>-->

<div id="main-container-text">
	<p>
		We offer a wide range of flower arrangements fit for any occasion. We specialize in traditional, modern, and extravagant flower designs. Flower House guarantees the most beautiful, elegant, and fresh flower arrangements in town! Give us a call and out friendly customer service representative will be there to answer your questions and/or take your order.
	</p>
</div>

<?php
include "temp/footer.php"
?>

<script src="js/myscript.js"></script>

</body>
</html>