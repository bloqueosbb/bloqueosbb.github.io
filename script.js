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

function redirectToFacturasCorruptas() {
    window.open('http://192.168.36.168:3000/', '_blank');
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

function generarPermiso(e) {
    e.preventDefault();
    const form = e.target;
    const nombre = form.nombre.value;
    const referencia = form.referencia.value;
    const plataforma = form.plataforma.value;
    const acceso = form.acceso.value;

    const texto = `Hola,\nSe han asignado los permisos de ${referencia} al usuario ${nombre} en ${plataforma}.\n\nUsuario: ${nombre}\nClave: ${acceso}\n\nUn saludo.`;

    navigator.clipboard.writeText(texto).then(() => {
        const content = form.nextElementSibling;
        content.innerHTML = texto
            .replace(`Usuario: ${nombre}`, `<strong>Usuario:</strong> <strong>${nombre}</strong>`)
            .replace(`Clave: ${acceso}`, `<strong>Clave:</strong> <strong>${acceso}</strong>`);
        content.style.display = 'block';
        showNotification('Permiso generado y copiado');
    });
}

function limpiarResultado() {
  const resultado = document.getElementById('resultado-permiso');
  resultado.innerHTML = '';
  resultado.style.display = 'none';

  // Limpiar los campos del formulario
  const form = document.querySelector('.template-form');
  form.reset();

  showNotification('Formulario y resultado limpiados');
}

// Función para copiar imagen al portapapeles
async function copyImageToClipboard(imgURL) {
    const res = await fetch(imgURL);
    const blob = await res.blob();

    try {
        const item = new ClipboardItem({ [blob.type]: blob });
        await navigator.clipboard.write([item]);
        showNotification('Imagen copiada al portapapeles');
    } catch (err) {
        console.error("Error al copiar la imagen", err);
        showNotification('Error al copiar la imagen', true);
    }
}

// Mensajes predefinidos
const ClaveTV1 = `It,.,2012`;
const ClaveTV2 = `@iSPC#0202`;

const mensajeSinSeguimiento = `Saludos.

Hemos solicitado información necesaria para poder gestionar su petición, también hemos intentado contactar en varias ocasiones con el solicitante, pero no hemos recibido respuesta alguna.

En vista de que han pasado las 48 Horas (tiempo que los colaboradores tienen disponible para responder la solicitud), procedemos a cerrar la incidencia.

De continuar con el inconveniente que reporta, por favor, enviar una nueva solicitud a HELPDESK.`;

const mensajeNoEsta = `Saludos.

Contactamos con la extensión, pero nos informan que el solicitante no está disponible.

Hemos dejado indicaciones para que se comunique con nosotros.`;

const mensajeMyLearning = `Saludos.

-Hemos realizado los cambios necesarios para que tu cuenta pueda sincronizar, solo tienes que hacer el cambio de clave en HRM. 

-Recuerda: No usar nombres propios de personas, utiliza Comida, Fruta, Países, Colores, entre otros.

-Mayúscula, un punto (.) y números (No repetidos de 3 en adelante 111 ... 123 etc).

Ejemplo: Piscina..1247*`;

const mensajePlantillaIncorrecta = `Saludos.

Las peticiones sobre asignación de permisos y creación de usuario deben ser solicitadas con la plantilla correcta,
las que llevan por nombre 'Permisos de usuario/Creación de usuario'.

Favor abrir ticket nuevamente con la plantilla correcta.`;

const mensajeP1 = `Saludos.

Hemos recibido su petición, estaremos gestionando el caso a la mayor brevedad posible, sin embargo, vemos que tiene urgencia P1 y la misma no aplica para este tipo de casos.

P1 (Muy urgente): Se refiere a incidencias que afectan de manera directa las operaciones de la empresa, por ejemplo, inconvenientes con el proceso de facturación en donde el cliente se encuentra en espera para poder finalizar su compra.`;

const mensajeP2 = `Saludos.

Hemos recibido su petición, estaremos gestionando el caso a la mayor brevedad posible, sin embargo, vemos que tiene urgencia P2 y la misma no aplica para este tipo de casos.

P2 (Urgente): Se debe de utilizar para reportar incidencias que interfieren con las operaciones de la empresa de manera parcial, en donde existen otras alternativas para mantener la operación, pero se requiere la resolución del problema a la brevedad posible.`;

const mensajeOutlook = `Debido a que el Outlook no es 100% compatible con nuestro Mailserver. es probable que se encuentre con ciertos problemas con dicha plataforma:
-Se pierden correos, desaparecen carpetas, no llegan a todos los destinatarios...etc

Pasamos a darles esta advertencia antes de proceder con la configuracion, podemos darles opciones alternativas con Thunderbird o usar la pagina de Webmail ( https://webmail.ikeasi.com/ ).

Pero si deciden usar Outlook, favor de tener en cuenta las posibles consecuencias que puedan enfrentar.

Nos dejan saber su respuesta.`;

// Asignar eventos a los botones
document.getElementById('btn-clave1tv').addEventListener('click', () => copyToClipboard(ClaveTV1));
document.getElementById('btn-clave2tv').addEventListener('click', () => copyToClipboard(ClaveTV2));
document.getElementById('btn-sin-contacto').addEventListener('click', () => copyToClipboard(mensajeSinContacto));
document.getElementById('btn-sin-seguimiento').addEventListener('click', () => copyToClipboard(mensajeSinSeguimiento));
document.getElementById('btn-my-learning').addEventListener('click', () => copyToClipboard(mensajeMyLearning));
document.getElementById('btn-no-disponible').addEventListener('click', () => copyToClipboard(mensajeNoEsta));
document.getElementById('btn-plantilla-incorrecta').addEventListener('click', () => copyToClipboard(mensajePlantillaIncorrecta));
document.getElementById('btn-urgencia-p1').addEventListener('click', () => copyToClipboard(mensajeP1));
document.getElementById('btn-urgencia-p2').addEventListener('click', () => copyToClipboard(mensajeP2));
document.getElementById('btn-correo-outlook').addEventListener('click', () => copyToClipboard(mensajeOutlook));

// Copiar imagen al portapapeles
document.getElementById('btn-plantilla-incorrecta-foto').addEventListener('click', () => {
  copyImageToClipboard('img/plantilla.png');
});



