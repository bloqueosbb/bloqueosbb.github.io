
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

    // Agregar un objeto para almacenar los nombres de las islas y sus bases de datos
    const islasBasesDatos = {
        GCA: 'produccion_lpa',
        TFE: 'produccion_tfe',
        PMI: 'produccion_pmi',
        LZA: 'produccion_lza',
        VAL: 'produccion_val',
        SDQ: 'sd_produccion',
        PUR: 'produccion_pr',
        CAU: 'produccion_ca',
    };

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

    // Obtener el valor seleccionado del desplegable
    const islaSeleccionada = document.getElementById('islas-dropdown').value;

    // Agregar la sentencia de bloqueo correspondiente según la isla seleccionada
    const baseDatos = islasBasesDatos[islaSeleccionada];
    if (baseDatos) {
        sentenciasDesbloqueo.push(`sudo su postgres\npsql ${baseDatos}\nselect * from migracion.ver_bloqueos ;\n`);
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
        alert('Sentencias de desbloqueo generadas y copiadas al portapapeles.');

        // Vaciar los cuadros de texto después de copiar las sentencias
        inputs.forEach((input) => (input.value = '')); // Establecer el valor a una cadena vacía
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

// Agregar evento de cambio para el desplegable de islas
const islasDropdown = document.getElementById('islas-dropdown');
islasDropdown.addEventListener('change', () => {
    verificarCuentaBBX();
});

// ... (Tu código JavaScript existente) ...

function verificarCuentaBBX() {
    const nombreCuenta = verifyInput.value.trim();
    if (nombreCuenta !== '') {
        const selectedIsla = islasDropdown.value;
        const sentenciasCombinadas = `sudo su postgres\npsql ${selectedIsla}\nselect * from migracion.ver_bloqueos ;\nselect nombre,created as fecha_creacion from ikea_erp.usuario where nombre = '${nombreCuenta}';\n`;
        copyToClipboard(sentenciasCombinadas);

        // Vaciar el cuadro de texto después de copiar las sentencias
        verifyInput.value = '';
    } else {

    }
}


