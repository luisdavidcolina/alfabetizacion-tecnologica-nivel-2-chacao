/* ============================================================
   MÓDULOS DEL CURSO — 17 temas
   12 módulos originales enriquecidos + 5 nuevos de los PDFs
   ============================================================ */

const MODULOS = [
  {
    num: "i",
    titulo: "Conociendo la computadora",
    desc: "Lo más esencial: encender, apagar, usar el ratón, el teclado y entender el escritorio.",
    temas: ["Windows", "Ratón", "Teclado", "Escritorio"],
    esNuevo: false,
    contenido: {
      resumen: "Antes de hacer cualquier cosa con un computador, hay que perder el miedo a tocarlo. Esta es la base de todo lo que viene después: dominar el entorno donde vas a trabajar.",
      conceptos: [
        "<strong>El escritorio</strong> es la pantalla principal donde aparecen los íconos. Es como la mesa de tu casa, pero digital.",
        "<strong>El cursor</strong> es la flechita que se mueve con el ratón. Tu mano dentro de la computadora.",
        "<strong>Clic izquierdo</strong>: para seleccionar o abrir. <strong>Clic derecho</strong>: para ver opciones adicionales.",
        "<strong>Doble clic</strong>: abre programas o archivos. Un clic solo los selecciona.",
        "<strong>El teclado</strong>: <em>Enter</em> confirma, <em>Espacio</em> separa palabras, <em>Borrar (Delete)</em> elimina, <em>Ctrl+Z</em> deshace errores."
      ],
      claves: [
        "No tengas miedo: la computadora no se rompe por tocarla.",
        "Si te pierdes, apaga y vuelve a empezar — eso resuelve el 90% de los problemas.",
        "Tómate tu tiempo: la velocidad llega sola con la práctica.",
        "La barra de tareas (abajo) muestra todos los programas abiertos."
      ],
      dato: null
    }
  },
  {
    num: "ii",
    titulo: "Word y el Bloc de Notas",
    desc: "Para escribir cartas, listas, recetas o cualquier documento de texto con estilo.",
    temas: ["Microsoft Word", "Bloc de Notas", "Formato", "Imprimir"],
    esNuevo: false,
    contenido: {
      resumen: "Microsoft Word es tu máquina de escribir digital. Te permite escribir, corregir, dar formato bonito y guardar tus documentos para siempre. El Bloc de Notas es para anotaciones rápidas sin formato.",
      conceptos: [
        "<strong>Bloc de notas</strong>: papel digital sencillo. Solo texto, sin adornos. Ideal para notas rápidas.",
        "<strong>Word</strong>: para documentos formales con negritas, colores, tablas e imágenes.",
        "<strong>Guardar</strong>: <code>Ctrl + S</code> — hazlo cada pocos minutos para no perder tu trabajo.",
        "<strong>Sangría</strong>: el espacio al inicio de cada párrafo. Da elegancia al texto.",
        "<strong>Alineación</strong>: izquierda, centrada, derecha o justificada (las cuatro opciones)."
      ],
      claves: [
        "Guarda antes de cerrar — siempre.",
        "El corrector ortográfico subraya en rojo los errores. Haz clic derecho para ver las correcciones.",
        "Para imprimir: <code>Ctrl + P</code>. Revisa la vista previa para no malgastar hojas.",
        "Crea el archivo Bloc de Notas con: clic derecho en escritorio → Nuevo → Documento de Texto."
      ],
      dato: null
    }
  },
  {
    num: "iii",
    titulo: "Excel y los números",
    desc: "Para llevar las cuentas de la casa, presupuestos y cualquier lista con números.",
    temas: ["Hojas de cálculo", "Fórmulas", "Presupuesto", "Tablas"],
    esNuevo: false,
    contenido: {
      resumen: "Excel es una calculadora gigante con cuadrícula. Te ayuda a llevar control de tus gastos, hacer presupuestos, listas organizadas y cualquier cosa donde haya números o categorías.",
      conceptos: [
        "<strong>Celdas</strong>: cada cajita donde se escribe un dato. Tiene nombre: A1, B5, C3...",
        "<strong>Filas</strong>: van en horizontal y se numeran (1, 2, 3...).",
        "<strong>Columnas</strong>: van en vertical y se nombran con letras (A, B, C...).",
        "<strong>Fórmulas</strong>: SIEMPRE empiezan con <code>=</code>. Ejemplo: <code>=A1+B1</code>",
        "<strong>SUMA</strong>: <code>=SUMA(A1:A10)</code> suma todo desde A1 hasta A10."
      ],
      claves: [
        "Las fórmulas siempre empiezan con el signo igual (=). Sin él, Excel lo trata como texto.",
        "Usa formato de moneda para que aparezcan los Bs. automáticamente.",
        "Combina celdas para hacer títulos en tu tabla.",
        "Si cambias un número, todas las fórmulas se recalculan solas."
      ],
      dato: null
    }
  },
  {
    num: "iv",
    titulo: "PowerPoint y las presentaciones",
    desc: "Para crear láminas con texto e imágenes y mostrarlas con orgullo.",
    temas: ["Diapositivas", "Diseño", "Transiciones", "Animaciones"],
    esNuevo: false,
    contenido: {
      resumen: "PowerPoint es para crear diapositivas: esas láminas con texto e imágenes que se ven en charlas o presentaciones. Sirve para enseñar, contar historias o compartir información de forma visual.",
      conceptos: [
        "<strong>Diapositiva</strong>: cada lámina que se ve en pantalla.",
        "<strong>Plantillas</strong>: diseños prehechos que te ahorran tiempo y lucen profesionales.",
        "<strong>Transiciones</strong>: efectos al pasar de una lámina a otra.",
        "<strong>Animaciones</strong>: efectos para que aparezcan elementos dentro de una misma lámina.",
        "<strong>Modo presentación</strong>: tecla <code>F5</code> para ver tu presentación a pantalla completa."
      ],
      claves: [
        "Letras grandes y claras: nada de párrafos largos en las láminas.",
        "Una idea por lámina — no satures de información.",
        "Pocas imágenes, pero buenas.",
        "Prepara una portada y una lámina de cierre con agradecimiento."
      ],
      dato: null
    }
  },
  {
    num: "v",
    titulo: "Archivos y carpetas",
    desc: "Organiza tus documentos, fotos y videos como en un archivero digital.",
    temas: ["Carpetas", "Mover archivos", "ZIP", "USB"],
    esNuevo: false,
    contenido: {
      resumen: "Así como organizas papeles en gavetas, en la computadora organizas archivos en carpetas. Aprender a moverlos, copiarlos y guardarlos en un USB es una habilidad para toda la vida.",
      conceptos: [
        "<strong>Archivo</strong>: cualquier documento, foto, video o música guardada.",
        "<strong>Carpeta</strong>: contenedor que agrupa archivos. Puede tener subcarpetas dentro.",
        "<strong>Extensión</strong>: las letras después del punto (.docx, .jpg, .mp3) que indican el tipo de archivo.",
        "<strong>Archivo ZIP</strong>: una carpeta comprimida en un solo paquete más liviano.",
        "<strong>Pendrive / USB</strong>: dispositivo pequeño para llevar archivos de una computadora a otra."
      ],
      claves: [
        "Crea una carpeta con tu nombre para guardar todo lo tuyo.",
        "Pon nombres claros: 'Receta_arepas.docx', no 'Documento1'.",
        "Atajos esenciales: <code>Ctrl+C</code> copiar · <code>Ctrl+V</code> pegar · <code>Ctrl+Z</code> deshacer.",
        "Siempre expulsa el pendrive con seguridad antes de retirarlo."
      ],
      dato: null
    }
  },
  {
    num: "vi",
    titulo: "Navegando por internet",
    desc: "WiFi, navegadores, modo incógnito y cómo buscar lo que necesitas.",
    temas: ["WiFi", "Navegador", "Modo incógnito", "Google"],
    esNuevo: false,
    contenido: {
      resumen: "Internet conecta tu computador con el mundo entero. El WiFi es la forma inalámbrica de conectarse. Saber moverte por la web, buscar eficientemente y entender el modo incógnito es esencial hoy en día.",
      conceptos: [
        "<strong>Router</strong>: la cajita con antenas que distribuye internet por tu casa.",
        "<strong>WiFi 2.4 GHz</strong> (La Tortuga): más lento pero llega lejos. Atraviesa paredes. Ideal para cuartos distantes.",
        "<strong>WiFi 5 GHz</strong> (El Conejo): muy rápido pero corto alcance. Úsalo cerca del router.",
        "<strong>Modo incógnito</strong>: no guarda historial en TU computadora al cerrar. PERO: tu proveedor de internet, el banco y el gobierno siguen viéndote.",
        "<strong>SSID</strong>: el nombre de tu red WiFi (ej: 'Familia_Perez')."
      ],
      claves: [
        "WiFi lento: desenchufa el router 10 segundos — esto resuelve el 90% de los casos.",
        "Nunca uses tu banco en WiFi público (cafés, plazas, centros comerciales).",
        "El modo incógnito NO te hace invisible: solo borra el historial de tu equipo.",
        "Cambia la clave WiFi al menos una vez al año."
      ],
      dato: "El Reinicio Sagrado: apagar el router, esperar 10 segundos, y volver a encenderlo resuelve el <strong>90% de los problemas comunes</strong> de WiFi."
    }
  },
  {
    num: "vii",
    titulo: "Contraseñas seguras",
    desc: "Cómo crear, guardar y recuperar claves que protejan tus cuentas.",
    temas: ["Contraseñas", "Recuperación", "Códigos 2FA", "Seguridad"],
    esNuevo: false,
    contenido: {
      resumen: "Tu contraseña es la llave de tu vida digital. Una buena contraseña te protege de robos, estafas y suplantación de identidad. Los peores errores: usar '1234', el mismo para todo, o compartirla.",
      conceptos: [
        "<strong>Contraseña fuerte</strong>: mínimo 8 caracteres con MAYÚSCULAS, minúsculas, números Y símbolos.",
        "<strong>Frases-contraseña</strong>: '<em>MiPerroTomas2025!</em>' es fácil de recordar y muy difícil de adivinar.",
        "<strong>Peores contraseñas</strong>: 1234, 123456, 'admin', 'contrasena', tu fecha de nacimiento.",
        "<strong>Verificación en 2 pasos (2FA)</strong>: segundo código que llega a tu celular. Aunque alguien sepa tu clave, sin el código no puede entrar.",
        "<strong>Recuperación</strong>: 'Olvidé mi contraseña' → ingresa tu correo → recibe código → nueva clave → guárdala."
      ],
      claves: [
        "Una contraseña diferente para cada cuenta importante.",
        "Si alguien te pide tu código de verificación por mensaje: ES UNA ESTAFA. SIEMPRE.",
        "Anótalas en un cuaderno físico seguro en casa — NO en un papel pegado al monitor.",
        "Cambia tus claves si sospechas que alguien las vio."
      ],
      dato: null
    }
  },
  {
    num: "viii",
    titulo: "Estafas y peligros en línea",
    desc: "Aprende a reconocer mensajes falsos, páginas truchas y enlaces peligrosos.",
    temas: ["Phishing", "Páginas falsas", "WhatsApp", "Correos"],
    esNuevo: false,
    contenido: {
      resumen: "Los estafadores usan miedo y urgencia para engañarte. Copian páginas reales para robar tus claves. Conocer sus trucos es tu mejor defensa — y reconocerlos antes de actuar es la clave.",
      conceptos: [
        "<strong>Phishing</strong>: imitación de páginas reales (banco, Instagram) para que escribas tus datos pensando que es la original.",
        "<strong>Señales de alerta</strong>: urgencia, faltas de ortografía, premios que no pediste.",
        "<strong>Suplantación</strong>: 'soy tu sobrino, mándame plata urgente' es la estafa más común en WhatsApp.",
        "<strong>Tu banco</strong>: NUNCA te pedirá tu clave por mensaje, llamada ni correo.",
        "<strong>Cómo verificar</strong>: llama al número oficial del banco (el del dorso de tu tarjeta), no al que aparece en el mensaje."
      ],
      claves: [
        "Si crea urgencia o miedo, casi siempre es estafa.",
        "Nunca hagas clic en enlaces de mensajes que no esperabas.",
        "Pedir ayuda a alguien de confianza no es debilidad: es inteligencia.",
        "Si recibiste un código que no pediste: NO LO COMPARTAS ni a quien diga ser tu banco."
      ],
      dato: null
    }
  },
  {
    num: "ix",
    titulo: "Correo electrónico",
    desc: "Crea tu primer correo Gmail, envía mensajes y comparte archivos adjuntos.",
    temas: ["Gmail", "Adjuntos", "Bandeja", "Contactos"],
    esNuevo: false,
    contenido: {
      resumen: "El correo electrónico es como la carta postal del mundo digital, pero llega en segundos. Sirve para comunicarte, hacer trámites, registrarte en servicios y guardar información importante.",
      conceptos: [
        "<strong>Dirección de correo</strong>: tunombre@gmail.com — tu dirección postal digital.",
        "<strong>Bandeja de entrada</strong>: donde llegan los correos que te mandan.",
        "<strong>Adjuntos</strong>: archivos (fotos, documentos) que mandas junto a tu mensaje, con el ícono del clip 📎.",
        "<strong>Spam</strong>: correos basura no deseados. Gmail los filtra automáticamente.",
        "<strong>CC y CCO</strong>: para mandar copias a varias personas a la vez."
      ],
      claves: [
        "Tu correo es tu identidad digital. Cuídala como tu cédula.",
        "Revisa quién te escribe antes de abrir archivos adjuntos.",
        "Crea contactos para no escribir la dirección cada vez.",
        "Pon un asunto claro: la gente lo lee primero."
      ],
      dato: null
    }
  },
  {
    num: "x",
    titulo: "Inteligencia Artificial",
    desc: "Habla con la IA, pídele que te ayude y aprende a usarla con criterio.",
    temas: ["ChatGPT", "Prompts", "Asistentes", "Límites"],
    esNuevo: false,
    contenido: {
      resumen: "La Inteligencia Artificial es como un asistente muy informado al que le puedes hacer preguntas, pedir consejos o que te ayude con tareas. Aprender a hablarle con claridad es el secreto para sacarle provecho.",
      conceptos: [
        "<strong>Prompt</strong>: la instrucción que le das a la IA. Mientras más claro, mejor responde.",
        "<strong>Prompt malo</strong>: 'Hazme una receta.'",
        "<strong>Prompt bueno</strong>: 'Dame una receta fácil de pasta para 2 personas, sin picante, con pollo y pocos ingredientes, en pasos numerados.'",
        "<strong>La IA puede equivocarse</strong>: a veces inventa información que suena creíble pero es falsa. Esto se llama 'alucinación'.",
        "<strong>Creación de contenido con IA</strong>: úsala para redactar cartas, traducir textos, hacer listas de compras, resumir información."
      ],
      claves: [
        "Escríbele como le explicarías algo a una persona inteligente.",
        "Dale contexto: quién eres y para qué necesitas la respuesta.",
        "Pide el formato: 'dámelo en lista', 'en tabla', 'en párrafo corto'.",
        "NUNCA le des datos muy personales (cédula, claves, datos bancarios)."
      ],
      dato: null
    }
  },
  {
    num: "xi",
    titulo: "El hogar inteligente (IoT)",
    desc: "Cuando tu nevera, tu TV y tus bombillos se conectan a internet.",
    temas: ["IoT", "Alexa", "Cámaras", "Privacidad"],
    esNuevo: false,
    contenido: {
      resumen: "Internet de las Cosas (IoT) es cuando objetos comunes — bombillos, neveras, TVs, relojes — se conectan a internet y pueden controlarse desde el celular. Mejora tu vida, pero requiere atención a la privacidad.",
      conceptos: [
        "<strong>Asistentes de voz</strong>: Alexa o Google Home responden a tu voz. 'Enciende la luz de la sala.'",
        "<strong>Detección de caídas</strong>: relojes inteligentes detectan una caída súbita, preguntan si estás bien, y si no hay respuesta, llaman a emergencias con tu ubicación exacta.",
        "<strong>Sensores de seguridad</strong>: detectores de humo, gas o agua que envían alarma a tu celular desde donde estés.",
        "<strong>Nevera inteligente</strong>: cámara interna que ves desde el celular y alertas de vencimiento.",
        "<strong>Riesgo</strong>: si lo conectas a WiFi inseguro, terceros pueden controlarlo o verte."
      ],
      claves: [
        "Cambia SIEMPRE las contraseñas por defecto de los aparatos inteligentes.",
        "No pongas cámaras en zonas íntimas del hogar.",
        "Los asistentes de voz pueden grabarte: revisa la configuración de privacidad.",
        "Empieza con UN aparato y agrega más cuando te sientas cómodo."
      ],
      dato: "Los relojes inteligentes con detección de caídas pueden enviar tu ubicación exacta a familiares y emergencias de forma <strong>completamente automática</strong>."
    }
  },
  {
    num: "xii",
    titulo: "Comercio electrónico seguro",
    desc: "Compra en línea con confianza: PayPal, reseñas, devoluciones y cómo evitar fraudes.",
    temas: ["PayPal", "Compras", "Reseñas", "Devoluciones"],
    esNuevo: false,
    contenido: {
      resumen: "Comprar por internet es práctico y seguro si sabes cómo. Te abre acceso a millones de productos sin salir de casa. La clave: saber qué plataformas usar, cómo pagar de forma protegida y detectar reseñas falsas.",
      conceptos: [
        "<strong>PayPal</strong>: intermediario que protege tu tarjeta. El vendedor NUNCA ve tu número de tarjeta o cuenta.",
        "<strong>Protección PayPal</strong>: cubre tus compras por <strong>180 días</strong>. Si el producto no llega o es diferente a lo descrito, te devuelven el dinero.",
        "<strong>Astroturfing</strong>: reseñas falsas creadas por bots o personas pagadas. Señal: muchas reseñas 5 estrellas el mismo día con lenguaje repetitivo.",
        "<strong>Regla 4 estrellas</strong>: las reseñas más honestas son las de 4 estrellas — mencionan lo bueno Y lo malo.",
        "<strong>HTTPS</strong>: el candadito 🔒 en el navegador indica que la comunicación está cifrada."
      ],
      claves: [
        "Si el precio es demasiado bueno para ser cierto, es estafa.",
        "Nunca pagues por adelantado por transferencia a desconocidos.",
        "Usa tarjetas virtuales con tope para compras en sitios nuevos.",
        "Guarda los comprobantes de pago hasta recibir el producto."
      ],
      dato: "<strong>PayPal te protege por 180 días</strong> — más de 5 meses para reclamar si algo salió mal en tu compra."
    }
  },
  {
    num: "xiii",
    titulo: "Virus informáticos",
    desc: "Tipos de malware, cómo infectan tu dispositivo y cómo protegerte.",
    temas: ["Malware", "Ransomware", "Troyanos", "Antivirus"],
    esNuevo: true,
    contenido: {
      resumen: "Un virus informático es un programa diseñado para dañar tu computadora, robar información o pedir dinero. Existen varios tipos y cada uno actúa diferente. Conocerlos es tu mejor defensa.",
      conceptos: [
        "<strong>Malware</strong>: término general para 'Software Malicioso'. Incluye virus, gusanos, troyanos, ransomware y más.",
        "<strong>Gusano</strong>: se propaga SOLO por la red sin necesidad de que abras nada — mucho más rápido que un virus clásico.",
        "<strong>Troyano</strong>: se disfraza de programa útil (juego gratis, regalo) pero esconde un ataque. Como el Caballo de Troya del mito griego.",
        "<strong>Ransomware</strong>: el más peligroso hoy. Bloquea todos tus archivos con un candado digital y exige dinero para devolverlos. JAMÁS pagues: no hay garantía de recuperar nada.",
        "<strong>Spyware</strong>: espía todo lo que escribes — contraseñas, datos bancarios — y lo envía en secreto al atacante."
      ],
      claves: [
        "Nunca abras archivos adjuntos de correos que no esperabas.",
        "Un USB desconocido puede traer virus. Escanéalo siempre antes de abrirlo.",
        "Windows Defender (incluido gratis en Windows) es suficiente si lo mantienes actualizado.",
        "JAMÁS pagues un rescate de ransomware — no hay garantía de recuperar nada."
      ],
      dato: "El primer virus informático de la historia se llamó <strong>'Creeper'</strong> (1971). No destruía nada: solo mostraba el mensaje '¡Atrápame si puedes!' para demostrar que un programa podía moverse entre computadoras."
    }
  },
  {
    num: "xiv",
    titulo: "La revolución de los bots",
    desc: "Programas automáticos que hacen el 47% del trabajo en internet, para bien y para mal.",
    temas: ["Bots", "Redes Sociales", "Scalpers", "Automatización"],
    esNuevo: true,
    contenido: {
      resumen: "Un bot es un programa que realiza tareas automáticas y repetitivas en internet. Los hay buenos (como los que indexan páginas para Google) y maliciosos (como los que manipulan redes sociales o acaparan productos). El 47% del tráfico de internet son bots.",
      conceptos: [
        "<strong>Bot bueno — Googlebot</strong>: indexa páginas web para que aparezcan en los resultados de búsqueda.",
        "<strong>Bot bueno — Chatbot</strong>: responde preguntas de clientes automáticamente las 24 horas del día.",
        "<strong>Bot malo — Scalper</strong>: compra masivamente productos en lanzamiento (PS5, entradas de conciertos) causando escasez artificial y precios inflados.",
        "<strong>Bot malo — Fake engagement</strong>: vende likes y seguidores falsos que distorsionan la popularidad real.",
        "<strong>Bot malo — Desinformación</strong>: difunde noticias falsas a velocidad imposible para un humano."
      ],
      claves: [
        "Si una cuenta tiene miles de seguidores pero pocos comentarios reales, probablemente son bots.",
        "No compres likes ni seguidores: son bots que dañan tu credibilidad digital.",
        "Los bots que manipulan tendencias pueden hacer que un tema falso parezca importante.",
        "El tráfico de bots maliciosos ha crecido un 5% anual durante la última década."
      ],
      dato: "El <strong>47% de todo el tráfico de internet</strong> es generado por bots automatizados. De ese porcentaje, el <strong>32% son bots maliciosos</strong>. ¡Casi la mitad de internet no es humana!"
    }
  },
  {
    num: "xv",
    titulo: "Obsolescencia programada",
    desc: "Por qué los aparatos de hoy duran menos que los de antes, y qué hacer al respecto.",
    temas: ["E-waste", "Reparación", "Consumismo", "Medio Ambiente"],
    esNuevo: true,
    contenido: {
      resumen: "La obsolescencia programada es cuando los fabricantes diseñan productos para que fallen o queden 'anticuados' antes de tiempo, obligándote a comprar uno nuevo. El primer caso documentado fue en 1924, con los bombillos.",
      conceptos: [
        "<strong>Obsolescencia Funcional</strong>: piezas diseñadas para romperse después de cierto tiempo de uso.",
        "<strong>Obsolescencia de Software</strong>: actualizaciones que hacen lento tu teléfono antiguo a propósito.",
        "<strong>Obsolescencia Psicológica</strong>: publicidad que te hace sentir que tu aparato está 'pasado de moda', aunque funcione perfectamente.",
        "<strong>El Cartel Phoebus (1924)</strong>: grandes fabricantes de bombillos se unieron y redujeron la vida útil de 2.500 horas a solo 1.000 — para vender más.",
        "<strong>Derecho a Reparar</strong>: leyes en Europa que obligan a fabricantes a ofrecer repuestos por 10 años."
      ],
      claves: [
        "Antes de comprar algo nuevo, pregunta si existen repuestos disponibles.",
        "El mantenimiento preventivo puede duplicar la vida de tus aparatos.",
        "Reparar es mejor que comprar: menor costo, menor impacto ambiental.",
        "Considera productos de segunda mano de alta calidad antes que nuevos de plástico barato."
      ],
      dato: "Se generan <strong>62 millones de toneladas</strong> de basura electrónica al año en el mundo. Solo el <strong>22%</strong> se recicla formalmente. El resto contamina suelos y aguas."
    }
  },
  {
    num: "xvi",
    titulo: "Publicidad digital",
    desc: "Cómo identificar anuncios en internet y protegerte de la publicidad engañosa.",
    temas: ["Anuncios", "Google Ads", "Facebook", "Privacidad"],
    esNuevo: true,
    contenido: {
      resumen: "La publicidad digital está en todos lados: en Google, en Facebook, en los periódicos en línea. Saber reconocerla te protege de fraudes y te hace un consumidor más informado. Sin los anuncios, muchos servicios que usas gratis dejarían de existir.",
      conceptos: [
        "<strong>Cómo identificarla</strong>: busca etiquetas como 'Patrocinado', 'Anuncio' o 'Promocionado' — aparecen cerca del título.",
        "<strong>En Google</strong>: los primeros 2-3 resultados de búsqueda suelen ser anuncios pagados, no los mejores resultados.",
        "<strong>En Facebook / Instagram</strong>: aparecen entre las fotos de amigos y dicen 'Publicidad' en letras pequeñas.",
        "<strong>Retargeting</strong>: si buscaste 'zapatos' en Google, luego verás anuncios de zapatos en Facebook. Los sitios se 'comunican'.",
        "<strong>Publicidad engañosa</strong>: botones que dicen 'Su computadora tiene virus' o 'Descarga urgente' en páginas desconocidas — son trampas."
      ],
      claves: [
        "Ningún anuncio legítimo te pedirá tu contraseña o datos bancarios directamente.",
        "Si la oferta parece demasiado buena para ser cierta, probablemente lo es.",
        "Puedes desactivar anuncios personalizados en: Cuenta Google → Datos y Privacidad.",
        "Las páginas web gratuitas (noticias, recetas, etc.) se financian con publicidad."
      ],
      dato: "Los anuncios de Facebook/Instagram se basan en tu <strong>historial de búsquedas, me gusta y hasta conversaciones</strong> cerca del micrófono del celular para mostrarte publicidad 'personalizada'."
    }
  },
  {
    num: "xvii",
    titulo: "Tu huella digital",
    desc: "Lo que dejas en internet sin darte cuenta, y cómo ejercer tu derecho al olvido.",
    temas: ["Privacidad", "Huella Activa", "Derecho al Olvido", "Identidad Digital"],
    esNuevo: true,
    contenido: {
      resumen: "Todo lo que haces en internet deja un rastro. Algunos rastros los dejas a propósito (fotos, comentarios), otros sin saberlo (búsquedas, ubicación). Esta información forma tu 'identidad digital' que puede afectar tu vida real.",
      conceptos: [
        "<strong>Huella Activa</strong>: lo que compartes voluntariamente — fotos en Facebook, comentarios, correos, reseñas.",
        "<strong>Huella Pasiva</strong>: lo que dejas sin saber — páginas visitadas, ubicación GPS, búsquedas de salud o finanzas.",
        "<strong>Permanencia Total</strong>: por defecto, todo lo publicado permanece en internet para siempre.",
        "<strong>Impacto Real</strong>: tu huella digital puede afectar trámites bancarios, seguros médicos y tu reputación profesional.",
        "<strong>Derecho al Olvido</strong>: derecho a solicitar que buscadores (Google, Bing) eliminen enlaces a información tuya obsoleta, incorrecta o irrelevante."
      ],
      claves: [
        "Antes de publicar algo, pregúntate: ¿querrías que tu jefe o tu nieto lo vean en 10 años?",
        "El modo incógnito NO borra tu huella digital del servidor — solo la del historial de tu equipo.",
        "Para ejercer el derecho al olvido: busca el formulario oficial de Google en 'Solicitud de eliminación'.",
        "No se pueden eliminar: delitos graves, noticias de interés público ni información sobre cargos públicos."
      ],
      dato: "Una foto publicada en internet puede quedarse ahí <strong>para siempre</strong>. El 'derecho al olvido' existe, pero hay que pedirlo formalmente — no desaparece solo."
    }
  }
];
