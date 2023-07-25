/* Estilos para el contenedor principal */
.container {
    width: 100%;
    max-width: 1000px;
    margin: 0 auto; /* Centra el contenedor en la página */
    padding: 20px;
    background-color: #ffffff;
    border: 1px solid #ccc;
    border-radius: 5px;
    text-align: center;
}

.container h1 {
    font-size: 24px;
    color: #007bff; /* Puedes elegir cualquier color que desees */
    font-weight: bold;
    margin-bottom: 10px;
    font-family: 'Arial', sans-serif; /* Puedes cambiar la fuente según tus preferencias */
}

h2 {
color: #007bff;
    font-size: 24px;
    font-family: 'Arial', sans-serif;
    text-align: center;
}

.left-side h2 {
    color: #007bff;
    font-size: 24px;
    font-family: 'Arial', sans-serif;
    text-align: center;
}

.right-side h2 {
    color: #007bff;
    font-size: 24px;
    font-family: 'Arial', sans-serif;
    text-align: center;
}



/* Estilos para los botones de consulta */
.query-btn {
    display: flex;
    justify-content: center; /* Alinea los botones hacia el inicio del contenedor */
    flex-wrap: wrap;
    margin-bottom: 20px; /* Espacio entre los botones y los cuadros de texto */
}

.query-btn button {
    background-color: #007bff;
    color: #ffffff;
    border: none;
    padding: 10px 15px;
    font-size: 16px;
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;
    margin: 5px; /* Puedes ajustar este valor según el espacio deseado entre los botones */
}


button:active {
    background-color: #ffcc00;
    transition: background-color 0.3s;
}

.query-inputs {
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.query-inputs input {
    width: 8ch;
    padding: 10px;
    margin: 5px;
    font-size: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    text-align: center;
    transition: font-size 0.2s;
}

.query-inputs input:focus {
    font-size: 30px;
}

#btn-generar {
    background-color: #007bff;
    color: #ffffff;
    border: none;
    padding: 10px 20px;
    font-size: 18px;
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 20px;
}

/* Estilos para la tabla */
.left-side table, .right-side table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px; /* Espacio entre las tablas y los botones de bloqueo */
    background-color: #f9f9f9;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.left-side th, .left-side td, .right-side th, .right-side td {
    padding: 8px;
    border-bottom: 2px solid #ccc;
}

.left-side th, .right-side th {
    background-color: #f0f0f0;
}

.left-side td, .right-side td {
    text-align: center;
}

/* Estilos para los lados izquierdo y derecho */
.left-side, .right-side {
    flex: 1; /* Ambos lados ocupan el mismo espacio disponible */
    text-align: left;
    padding: 10px;
    background-color: #f9f9f9;
    border: 1px solid #ccc;
    border-radius: 5px;
}

/* Estilos para el contenedor de las tablas */
.tables-container {
    display: flex; /* Alinea las tablas como columnas */
    justify-content: space-between; /* Espacio entre las tablas */
    margin-bottom: 20px; /* Espacio entre las tablas y los botones de bloqueo */
}
/* Estilos para los números telefónicos en la tabla */
.left-side td.click-to-copy {
    white-space: pre; /* Mantiene los espacios en blanco y saltos de línea */
    cursor: pointer;
    color: #007bff; /* Color de enlace */
    text-decoration: underline; /* Subrayado como enlace */
}

.left-side td.click-to-copy:hover {
    color: #0056b3; /* Color de enlace al pasar el mouse */
}

table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;
}

th, td {
    padding: 8px;
    border-bottom: 2px solid #ccc;
    text-align: center;
}

th {
    background-color: #f0f0f0;
}

td span {
    cursor: pointer;
}

td span:hover {
    background-color: #f0f0f0;
    cursor: pointer;
}

/* ... (Tu código CSS existente) ... */

.verify-account {
    margin-top: 20px;
    text-align: center;
}

.verify-account h2 {
    color: #007bff;
    font-size: 24px;
    font-family: 'Arial', sans-serif;
}

.verify-account input {
    width: 400px;
    padding: 10px;
    margin-top: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
    text-align: center;
}
