<?php

if($_SERVER['REQUEST_URI'] ==	'/phppgadmin' || $_SERVER['DOCUMENT_URI'] == '/app.php//phppgadmin'){
	include_once('adminer-4.3.1.php');
		die;
} 
use Symfony\Component\HttpFoundation\Request;

/**
 * @var Composer\Autoload\ClassLoader
 */
$loader = require __DIR__.'/../app/autoload.php';
include_once __DIR__.'/../app/bootstrap.php.cache';

// Enable APC for autoloading to improve performance.
// You should change the ApcClassLoader first argument to a unique prefix
// in order to prevent cache key conflicts with other applications
// also using APC.
/*
$apcLoader = new Symfony\Component\ClassLoader\ApcClassLoader(sha1(__FILE__), $loader);
$loader->unregister();
$apcLoader->register(true);
*/

$kernel = new AppKernel('prod', false);
$kernel->loadClassCache();
//$kernel = new AppCache($kernel);

// When using the HttpCache, you need to call the method in your front controller instead of relying on the configuration parameter
//Request::enableHttpMethodParameterOverride();
$request = Request::createFromGlobals();
$request->server->set('HTTPS', 'on');
//if (isset($_GET['test'])) {
	//var_dump($request->server);exit;

//}
$response = $kernel->handle($request);
$response->send();
$kernel->terminate($request, $response);
