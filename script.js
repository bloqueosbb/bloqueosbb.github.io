// Evento de clic para los botones de las consultas
    document.getElementById('btn-gca').addEventListener('click', () => copyToClipboard('sudo su postgres\npsql produccion_lpa\nselect * from migracion.ver_bloqueos ;\n'));
    document.getElementById('btn-pmi').addEventListener('click', () => copyToClipboard('sudo su postgres\npsql produccion_pmi\nselect * from migracion.ver_bloqueos ;\n'));
    document.getElementById('btn-tfe').addEventListener('click', () => copyToClipboard('sudo su postgres\npsql produccion_tfe\nselect * from migracion.ver_bloqueos ;\n'));
    document.getElementById('btn-lza').addEventListener('click', () => copyToClipboard('sudo su postgres\npsql produccion_lza\nselect * from migracion.ver_bloqueos ;\n'));
    document.getElementById('btn-val').addEventListener('click', () => copyToClipboard('sudo su postgres\npsql produccion_val\nselect * from migracion.ver_bloqueos ;\n'));
    document.getElementById('btn-sdq').addEventListener('click', () => copyToClipboard('sudo su postgres\npsql sd_produccion\nselect * from migracion.ver_bloqueos ;\n'));
    document.getElementById('btn-pur').addEventListener('click', () => copyToClipboard('sudo su postgres\npsql produccion_pr\nselect * from migracion.ver_bloqueos ;\n'));
    document.getElementById('btn-cau').addEventListener('click', () => copyToClipboard('sudo su postgres\npsql produccion_ca\nselect * from migracion.ver_bloqueos ;\n'));

    // Agregar evento de escucha al teclado para los cuadros de texto de bloqueo
    const inputs = document.querySelectorAll('.query-inputs input');
    inputs.forEach(input => {
        input.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                event.preventDefault(); // Evitar el comportamiento predeterminado del Enter en el cuadro de texto
                generarYCopiarSentencias();
            }
        });
    });

    // Evento de clic para los números telefónicos en la tabla
    const clickToCopyElements = document.querySelectorAll('.click-to-copy');
    clickToCopyElements.forEach(element => {
        element.addEventListener('click', () => {
            const phoneNumber = element.dataset.phoneNumber;
            copyToClipboard(phoneNumber);
        });
    });

    document.getElementById('btn-generar').addEventListener('click', () => {
        generarYCopiarSentencias();
    });

    document.addEventListener('DOMContentLoaded', () => {
        const numbersToCopy = document.querySelectorAll('.click-to-copy');

        numbersToCopy.forEach(number => {
            number.addEventListener('click', () => {
                const phoneNumber = number.dataset.phoneNumber;
                copyToClipboardAndAlert(phoneNumber);
            });
        });
    });

    function generarYCopiarSentencias() {
        const sentenciasDesbloqueo = [];

        function agregarSentencia(id, base) {
            const bloqueo = document.getElementById(id).value.trim();
            if (bloqueo !== '') {
                sentenciasDesbloqueo.push(`select pg_terminate_backend(${base}${bloqueo});`);
            }
        }

        agregarSentencia('input-01', '');
        agregarSentencia('input-02', '');
        agregarSentencia('input-03', '');
        agregarSentencia('input-04', '');
        agregarSentencia('input-05', '');
        agregarSentencia('input-06', '');
        agregarSentencia('input-07', '');
        agregarSentencia('input-08', '');
        agregarSentencia('input-09', '');
        agregarSentencia('input-10', '');
        agregarSentencia('input-11', '');
        agregarSentencia('input-12', '');

        if (sentenciasDesbloqueo.length > 0) {
            const sentenciasCombinadas = sentenciasDesbloqueo.join('\n') + '\n';
            copyToClipboard(sentenciasCombinadas);

            // Vaciar los cuadros de texto después de copiar las sentencias
            inputs.forEach(input => input.value = ''); // Establecer el valor a una cadena vacía
        } else {
            alert('No se ha ingresado ningún número en los cuadros de bloqueo.');
        }
    }

    // Función para copiar texto al portapapeles
    function copyToClipboard(text) {
        const el = document.createElement('textarea');
        el.value = text;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
    }


// ... (Tu código JavaScript existente) ...

// Agregar evento de escucha al teclado para el cuadro de texto de Verificar cuenta BBX
const verifyInput = document.getElementById('verify-input');
verifyInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        verificarCuentaBBX();
    }
});

// ... (Tu código JavaScript existente) ...

function verificarCuentaBBX() {
    const nombreCuenta = verifyInput.value.trim();
    if (nombreCuenta !== '') {
        const sentencia = `select nombre,created as fecha_creacion from ikea_erp.usuario where nombre = '${nombreCuenta}';\n`;
        copyToClipboard(sentencia);

        // Vaciar el cuadro de texto después de copiar la sentencia
        verifyInput.value = '';
    } else {
        alert('Por favor, ingresa el nombre de la cuenta antes de presionar Enter.');
    }
}

document.getElementById('btn-enlace1').addEventListener('click', () => {
    window.open('https://ikeasi.sharepoint.com/:x:/r/sites/BITBOXCARIBESRL/_layouts/15/Doc.aspx?sourcedoc=%7BAB74C594-CCEF-40A4-AC2D-3DD3FB1EC793%7D&file=Informe%20Bloqueos%20-BBX%202023.xlsx&action=default&mobileredirect=true', '_blank'); // Abrir enlace en una nueva pestaña
});

document.getElementById('btn-enlace2').addEventListener('click', () => {
    window.open('https://ikeasi.sharepoint.com/sites/BITBOXCARIBESRL/Documentos%20compartidos/Forms/AllItems.aspx?id=%2Fsites%2FBITBOXCARIBESRL%2FDocumentos%20compartidos%2FHelpdesk%2FConsultas%20Bloqueos%20%2D%202023&viewid=84e846ea%2D3508%2D4d2e%2Dbecd%2D07e9b23a46f7', '_blank'); // Abrir enlace en una nueva pestaña
});

// Eliminar la función generarYCopiarSentencias y cualquier referencia a los cuadros de texto

// Agregar la siguiente función para redirigir a la página de bloqueos
function redirectToBloqueosPage() {
    window.open('https://bory315.github.io/bloqueos/', '_blank');
}

