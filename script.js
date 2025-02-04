// Función para copiar texto al portapapeles
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        // Mostrar notificación de éxito
        showNotification('Texto copiado');
    }).catch(err => {
        // Mostrar notificación de error
        showNotification('Error al copiar: ' + err, true);
    });
}

// Función para mostrar notificaciones
function showNotification(message, isError = false) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.position = 'fixed';
    notification.style.bottom = '20px';
    notification.style.right = '20px';
    notification.style.padding = '10px 20px';
    notification.style.backgroundColor = isError ? '#e74c3c' : '#2ecc71';
    notification.style.color = 'white';
    notification.style.borderRadius = '5px';
    notification.style.zIndex = '1000';
    notification.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
    document.body.appendChild(notification);

    // Eliminar la notificación después de 3 segundos
    setTimeout(() => {
        document.body.removeChild(notification);
    }, 3000);
}

// Eventos para los botones de consultas
document.getElementById('btn-sudo-gca').addEventListener('click', () => copyToClipboard('sudo su postgres'));
document.getElementById('btn-bbdd-gca').addEventListener('click', () => copyToClipboard('psql produccion_lpa'));
document.getElementById('btn-consulta-gca').addEventListener('click', () => copyToClipboard('select blocked_pid, blocking_pid, query_blocked from migracion.ver_bloqueos;'));

document.getElementById('btn-sudo-pmi').addEventListener('click', () => copyToClipboard('sudo su postgres'));
document.getElementById('btn-bbdd-pmi').addEventListener('click', () => copyToClipboard('psql produccion_pmi'));
document.getElementById('btn-consulta-pmi').addEventListener('click', () => copyToClipboard('select blocked_pid, blocking_pid, query_blocked from migracion.ver_bloqueos;'));

document.getElementById('btn-sudo-tfe').addEventListener('click', () => copyToClipboard('sudo su postgres'));
document.getElementById('btn-bbdd-tfe').addEventListener('click', () => copyToClipboard('psql produccion_tfe'));
document.getElementById('btn-consulta-tfe').addEventListener('click', () => copyToClipboard('select blocked_pid, blocking_pid, query_blocked from migracion.ver_bloqueos;'));

document.getElementById('btn-sudo-lza').addEventListener('click', () => copyToClipboard('sudo su postgres'));
document.getElementById('btn-bbdd-lza').addEventListener('click', () => copyToClipboard('psql produccion_lza'));
document.getElementById('btn-consulta-lza').addEventListener('click', () => copyToClipboard('select blocked_pid, blocking_pid, query_blocked from migracion.ver_bloqueos;'));


document.getElementById('btn-val').addEventListener('click', () => copyToClipboard('sudo su postgres\npsql produccion_val\nselect blocked_pid, blocking_pid, query_blocked from migracion.ver_bloqueos;\n'));
document.getElementById('btn-sdq').addEventListener('click', () => copyToClipboard('sudo su postgres\npsql sd_produccion\nselect blocked_pid, blocking_pid, query_blocked from migracion.ver_bloqueos;\n'));
document.getElementById('btn-pur').addEventListener('click', () => copyToClipboard('sudo su postgres\npsql produccion_pr\nselect blocked_pid, blocking_pid, query_blocked from migracion.ver_bloqueos;\n'));
document.getElementById('btn-cau').addEventListener('click', () => copyToClipboard('sudo su postgres\npsql produccion_ca\nselect blocked_pid, blocking_pid, query_blocked from migracion.ver_bloqueos;\n'));

// Eventos para los números telefónicos
document.querySelectorAll('.click-to-copy').forEach(element => {
    element.addEventListener('click', () => {
        const phoneNumber = element.getAttribute('data-phone-number');
        copyToClipboard(phoneNumber);
    });
});

// Redirecciones
function redirectToBloqueosPage() {
    window.open('https://bory315.github.io/bloqueos/', '_blank');
}

function redirectToSharePoint() {
    window.open('https://ikeasi.sharepoint.com/:x:/s/BITBOXCARIBESRL/EbSZ8Bh_jQ9OpNwkx-w5aSgBmXwsxxMtAwvHAxqXRVCslQ?e=MpCCcu', '_blank');
}

function redirectToOneNote() {
    window.open('https://ikeasi.sharepoint.com/sites/BITBOXCARIBESRL/Documentos%20compartidos/Forms/AllItems.aspx?id=%2Fsites%2FBITBOXCARIBESRL%2FDocumentos%20compartidos%2FHelpdesk%2FConsultas%20Bloqueos%20%2D%202025&p=true&ga=1', '_blank');
}

function redirectToGuardias() {
  window.open('https://ikeasi.sharepoint.com/:x:/r/sites/BITBOXCARIBESRL/_layouts/15/doc2.aspx?sourcedoc=%7B01964FEF-2ECA-4E8F-B481-5ABDDB5425BB%7D&file=Guardia%20-%20Helpdesk%20interno.xlsx&action=default&mobileredirect=true', '_blank');
}

document.getElementById('btn-liberar-memoria').addEventListener('click', () => {
    copyToClipboard('sudo freememory.sh\n');
});

// Función para alternar entre modo oscuro y claro
function toggleMode() {
    const body = document.body;
    const modeIcon = document.getElementById('mode-icon');

    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        modeIcon.textContent = 'brightness_2'; // Ícono para modo claro
    } else {
        body.classList.add('dark-mode');
        modeIcon.textContent = 'brightness_5'; // Ícono para modo oscuro
    }
}


