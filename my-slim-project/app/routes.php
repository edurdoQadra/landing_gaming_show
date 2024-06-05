<?php

declare(strict_types=1);

use App\Application\Actions\User\ListUsersAction;
use App\Application\Actions\User\ViewUserAction;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\App;
use Slim\Interfaces\RouteCollectorProxyInterface as Group;

// Cargar variables de entorno desde archivo .env
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__ . '/../');
$dotenv->load();

return function (App $app) {
    $app->options('/{routes:.*}', function (Request $request, Response $response) {
        // CORS Pre-Flight OPTIONS Request Handler
        return $response;
    });

    $app->get('/', function (Request $request, Response $response) {
        $response->getBody()->write('Hello world!');
        return $response;
    });

    $app->group('/users', function (Group $group) {
        $group->get('', ListUsersAction::class);
        $group->get('/{id}', ViewUserAction::class);
    });
     // Ruta para verificar el estado de la conexión a la base de datos
     $app->get('/check-db-connection', function (Request $request, Response $response) {
        // Obtener la conexión a la base de datos desde las variables de entorno
        $dbHost = $_ENV['DB_HOST'];
        $dbName = $_ENV['DB_NAME'];
        $dbUser = $_ENV['DB_USER'];
        $dbPass = $_ENV['DB_PASS'];
        
        try {
            // Intenta establecer la conexión a la base de datos
            $db = new PDO("mysql:host=$dbHost;dbname=$dbName", $dbUser, $dbPass);
            // Realiza una consulta simple para verificar la conexión
            $db->query('SELECT 1');
            $status = "Conexión exitosa";
        } catch (PDOException $e) {
            // Captura cualquier excepción que pueda ocurrir
            $status = "Error al conectar a la base de datos: " . $e->getMessage();
        }
        
        // Devuelve el estado de la conexión como respuesta
        $response->getBody()->write($status);
        return $response->withHeader('Content-Type', 'text/plain');
    });
    
};
