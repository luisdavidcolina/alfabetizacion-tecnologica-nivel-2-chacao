/* ============================================================
   GLOSARIO TECNOLÓGICO — 40 términos en lenguaje simple
   ============================================================ */

const GLOSARIO = [
  /* A */
  { term: "Actualización", letra: "A", def: "Nueva versión de un programa que corrige errores, añade funciones o mejora la seguridad. Siempre es buena idea aceptarlas.", nivel: "basico" },
  { term: "Antivirus", letra: "A", def: "Programa que detecta, bloquea y elimina malware de tu computadora. Windows 10/11 incluye 'Windows Defender' de forma gratuita.", nivel: "basico" },
  { term: "App", letra: "A", def: "Aplicación: programa para celular o computadora. WhatsApp, Maps y la cámara son apps. Vienen de 'application' en inglés.", nivel: "basico" },

  /* B */
  { term: "Backup", letra: "B", def: "Copia de seguridad de tus archivos guardada en otro lugar (nube, USB). Si pierdes el celular o la computadora, recuperas todo.", nivel: "basico" },
  { term: "Bluetooth", letra: "B", def: "Tecnología inalámbrica de corto alcance (~10 metros) para conectar dispositivos cercanos: audífonos, altavoces, teclados.", nivel: "basico" },
  { term: "Bot", letra: "B", def: "Programa automático que realiza tareas repetitivas en internet. Los hay buenos (indexan páginas) y malos (envían spam o manipulan redes).", nivel: "medio" },

  /* C */
  { term: "Contraseña segura", letra: "C", def: "Clave con mínimo 8 caracteres que combina MAYÚSCULAS, minúsculas, números Y símbolos. Ejemplo: 'MiPerroFido2025!' es fácil de recordar y muy difícil de adivinar.", nivel: "basico" },
  { term: "Cookie", letra: "C", def: "Archivo pequeño que los sitios web guardan en tu navegador para 'recordarte': que estabas logueado, tus preferencias o qué pusiste en el carrito. No son virus.", nivel: "medio" },

  /* D */
  { term: "DNS", letra: "D", def: "Sistema que convierte los nombres de páginas web (como google.com) en direcciones numéricas que entienden las computadoras. Es como la guía de teléfonos de internet.", nivel: "avanzado" },

  /* E */
  { term: "Encriptación", letra: "E", def: "Proceso de convertir datos en un código secreto para que solo el destinatario correcto pueda leerlos. Es lo que hace el candadito HTTPS.", nivel: "avanzado" },
  { term: "Ethernet", letra: "E", def: "Conexión a internet por cable físico. Más estable y rápida que WiFi, ideal para computadoras de escritorio.", nivel: "medio" },

  /* F */
  { term: "Firewall", letra: "F", def: "'Muro de fuego' digital que bloquea conexiones peligrosas desde internet hacia tu computadora. Windows lo incluye y activa automáticamente.", nivel: "avanzado" },

  /* G */
  { term: "Gigabyte (GB)", letra: "G", def: "Unidad de memoria digital. Una foto de buena calidad ocupa ~4 MB, un video ocupa ~1 GB. Un celular típico tiene 64-256 GB de almacenamiento.", nivel: "basico" },
  { term: "GPS", letra: "G", def: "Sistema de posicionamiento global que usa satélites para determinar tu ubicación exacta. Es lo que usa Google Maps para guiarte.", nivel: "basico" },
  { term: "Gusano (Worm)", letra: "G", def: "Tipo de malware que se propaga solo por la red sin necesidad de que abras ningún archivo. Más peligroso que el virus clásico porque no necesita tu ayuda para infectar.", nivel: "avanzado" },

  /* H */
  { term: "HTTPS", letra: "H", def: "Protocolo web seguro. La 's' significa 'seguro': la comunicación entre tu navegador y el sitio está cifrada. Esencial en sitios de banco o compras.", nivel: "medio" },
  { term: "Huella Digital", letra: "H", def: "Rastro de información que dejas al usar internet. La activa (lo que publicas) y la pasiva (búsquedas, ubicación). Puede afectar tu privacidad y reputación.", nivel: "medio" },

  /* I */
  { term: "IoT", letra: "I", def: "Internet de las Cosas (Internet of Things): objetos cotidianos conectados a internet — bombillos, neveras, relojes, cámaras. Mejoran la vida pero necesitan configuración segura.", nivel: "medio" },

  /* M */
  { term: "Malware", letra: "M", def: "Término general para 'Software Malicioso': cualquier programa diseñado para dañar tu equipo o robar información. Incluye virus, troyanos, ransomware y más.", nivel: "medio" },
  { term: "Megabyte (MB)", letra: "M", def: "Unidad de memoria más pequeña que el Gigabyte. 1.000 MB = 1 GB. Una canción en MP3 ocupa unos 4 MB.", nivel: "basico" },
  { term: "Modo incógnito", letra: "M", def: "Forma de navegar que no guarda historial en TU computadora al cerrar. NO te hace invisible: tu proveedor de internet y los sitios web te siguen viendo.", nivel: "basico" },

  /* N */
  { term: "Nube (Cloud)", letra: "N", def: "Servidores de internet donde puedes guardar archivos (fotos, documentos) accesibles desde cualquier dispositivo. Google Fotos y Google Drive son nubes.", nivel: "basico" },

  /* O */
  { term: "Obsolescencia Programada", letra: "O", def: "Diseño intencional de productos para que fallen o queden anticuados antes de tiempo, obligando al consumidor a comprar uno nuevo. Afecta celulares, computadoras y electrodomésticos.", nivel: "medio" },

  /* P */
  { term: "Phishing", letra: "P", def: "Técnica de engaño donde criminales imitan páginas reales (banco, Instagram) para que escribas tus datos pensando que es el sitio original. Siempre verifica la dirección web.", nivel: "medio" },
  { term: "Pixel", letra: "P", def: "Punto de color que forma las imágenes digitales. Una pantalla Full HD tiene 2 millones de pixels. Más pixels = mayor resolución y nitidez.", nivel: "basico" },
  { term: "Prompt", letra: "P", def: "Instrucción que le das a una Inteligencia Artificial para que te responda. Un buen prompt tiene contexto, lo que necesitas, detalles y el formato esperado.", nivel: "medio" },

  /* Q */
  { term: "QR", letra: "Q", def: "Código de barras cuadrado que guarda información o enlacesa sitios web. Se lee apuntándole con la cámara del celular.", nivel: "basico" },

  /* R */
  { term: "Ransomware", letra: "R", def: "El malware más peligroso hoy: bloquea todos tus archivos con un candado digital y exige dinero para devolverlos. NUNCA pagues: no hay garantía de recuperar nada.", nivel: "avanzado" },
  { term: "Router", letra: "R", def: "La cajita con antenas que distribuye la señal de internet inalámbrica (WiFi) en tu casa. Es el cerebro de tu red doméstica.", nivel: "basico" },

  /* S */
  { term: "Spam", letra: "S", def: "Correos o mensajes no deseados, generalmente publicidad o intentos de estafa. Gmail los detecta y los manda a una carpeta separada automáticamente.", nivel: "basico" },
  { term: "Spyware", letra: "S", def: "Programa espía que registra en secreto todo lo que escribes — contraseñas, datos bancarios — y lo envía al atacante sin que lo notes.", nivel: "avanzado" },
  { term: "Streaming", letra: "S", def: "Ver videos o escuchar música directamente desde internet sin descargar el archivo. Netflix, YouTube y Spotify funcionan por streaming.", nivel: "basico" },
  { term: "SSID", letra: "S", def: "El nombre visible de tu red WiFi, el que aparece cuando buscas redes disponibles. Por ejemplo: 'Familia_Perez' o 'CasaDeJuan_5G'.", nivel: "basico" },

  /* T */
  { term: "Troyano", letra: "T", def: "Malware disfrazado de programa útil (juego gratuito, app atractiva). Como el Caballo de Troya del mito: al instalarlo, abre una 'puerta trasera' al atacante.", nivel: "avanzado" },

  /* U */
  { term: "URL", letra: "U", def: "La dirección de una página web. Ejemplo: 'www.google.com'. Siempre verifica que la URL sea la correcta antes de introducir contraseñas o datos bancarios.", nivel: "basico" },
  { term: "USB / Pendrive", letra: "U", def: "Dispositivo pequeño que se conecta al computador para guardar y transferir archivos. Puede llevar virus de una computadora a otra, así que escanéalo antes de abrir.", nivel: "basico" },

  /* V */
  { term: "Verificación en 2 Pasos (2FA)", letra: "V", def: "Segunda capa de seguridad: además de tu contraseña, te llega un código al celular. Aunque alguien sepa tu clave, sin el código no puede entrar a tu cuenta.", nivel: "medio" },
  { term: "VPN", letra: "V", def: "Red Privada Virtual: oculta tu dirección IP y ubicación real al navegar. Útil en redes públicas para mayor privacidad, pero no es una protección total.", nivel: "avanzado" },

  /* W */
  { term: "WiFi", letra: "W", def: "Tecnología inalámbrica que conecta tus dispositivos a internet a través de señales de radio. El router de tu casa es la fuente de tu WiFi doméstico.", nivel: "basico" },
  { term: "WPA2 / WPA3", letra: "W", def: "Protocolos de seguridad para redes WiFi. Son los 'candados' que protegen tu contraseña WiFi. WPA3 es el más moderno y seguro. Evita el antiguo WEP que es muy vulnerable.", nivel: "avanzado" }
];
