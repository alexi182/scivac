<?php

	/**
	 * Main access point to the app.
	 *
	 * $Id: index.php,v 1.13 2007/04/18 14:08:48 mr-russ Exp $
	 */

	// Include application functions
	
	$_no_db_connection = true;
	include_once('/srv/www/scivac.pr.informika.ru/releases/20170426072046/web/phppgadmin/libraries/lib.inc.php');
	$misc->printHeader('', null, true);
	$rtl = (strcasecmp($lang['applangdir'], 'rtl') == 0);
	
	$cols = $rtl ? '*,'.$conf['left_width'] : $conf['left_width'].',*';
	$mainframe = '<frame src="/phppgadmin/intro.php" name="detail" id="detail" frameborder="0" />'
	
?>
<frameset cols="<?php echo $cols ?>">

<?php if ($rtl) echo $mainframe; ?>

	<frame src="/phppgadmin/browser.php" name="browser" id="browser" frameborder="0" />

<?php if (!$rtl) echo $mainframe; ?>

	<noframes>
	<body>
		<?php echo $lang['strnoframes'] ?><br />
		<a href="/phppgadmin/intro.php"><?php echo $lang['strnoframeslink'] ?></a>
	</body>
	</noframes>

</frameset>

<?php
	$misc->printFooter(false);
?>
