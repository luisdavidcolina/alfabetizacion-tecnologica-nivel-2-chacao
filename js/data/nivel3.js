/* ============================================================
   MÓDULOS DEL NIVEL 3 — Emprendimiento digital
   Cada módulo es una clase. Mismo formato que MODULOS en modulos.js,
   más estos campos opcionales dentro de contenido:
     conceptosTitulo  título del bloque de conceptos (si falta: "Conceptos clave")
     actividades      [{ titulo, aviso?, pasos: [...] }]   el paso a paso
     problemas        [{ si, haz }]                        "Si algo sale mal"
     laminas          [{ titulo, archivo, peso, aviso? }]  PDFs en laminas/nivel3/
   ============================================================ */

const MODULOS_N3 = [
  {
    num: "i",
    titulo: "Primeros pasos en Canva: tu primer flyer",
    desc: "Conoce Canva y arma tu primer flyer pieza por pieza: fondo, formas, título, textos e imagen.",
    temas: ["Canva", "Flyer", "Colores y letras", "Descargar"],
    esNuevo: false,
    contenido: {
      resumen: "Canva es una herramienta gratuita para diseñar flyers, publicaciones, logos y tarjetas sin saber de diseño. Se usa desde el navegador, en canva.com, y todo se guarda solo en tu cuenta. En esta clase vimos qué debe tener un buen flyer y armamos el de «Dulces María», una pastelería de ejemplo.",
      conceptosTitulo: "Lo que debe tener un flyer",
      conceptos: [
        "<strong>Las cuatro partes</strong>: qué vendes, por qué comprarlo, una oferta o precio y cómo contactarte.",
        "<strong>Lo más importante, más grande</strong>: primero el título, después la oferta y, más pequeño, los detalles y el contacto.",
        "<strong>Colores que se leen</strong>: fondo oscuro → letra clara; fondo claro → letra oscura. Sobre una foto, ponle un recuadro detrás al texto.",
        "<strong>Máximo dos tipos de letra</strong>: una para el título y otra para el texto. Para resaltar, usa negrita o un color.",
        "<strong>Cada lugar tiene su tamaño</strong>: flyer vertical para imprimir, publicación cuadrada para Instagram y Facebook, historia para los estados."
      ],
      actividades: [
        {
          titulo: "Entrar a Canva y crear el flyer",
          pasos: [
            "Abre el navegador y escribe <strong>canva.com</strong>.",
            "Regístrate con tu cuenta de Google o con tu correo, o toca <strong>Iniciar sesión</strong> si ya tienes cuenta. Anota tu correo y tu contraseña: los vas a necesitar en todas las clases.",
            "En la página de inicio toca <strong>Crear</strong> (el botón + arriba a la izquierda), escribe <em>flyer</em> y elige <strong>Flyer (Vertical)</strong>.",
            "Arriba, toca el nombre del diseño y escribe <em>Flyer de práctica</em>. Así lo encuentras rápido después."
          ]
        },
        {
          titulo: "Armar el flyer en cinco piezas",
          pasos: [
            "<strong>Fondo</strong>: haz clic en una parte vacía de la hoja, toca el círculo de colores y escribe el código <code>#FFF3E0</code> (crema).",
            "<strong>Formas</strong>: en el panel izquierdo, <strong>Elementos</strong> → busca <em>formas</em> → pestaña Formas → el rectángulo. Estíralo por los bordes y cámbiale el color (franjas <code>#6B3A2A</code>, recuadro de la oferta <code>#F4A7B9</code>).",
            "<strong>Título</strong>: <strong>Texto</strong> → <em>Agregar un título</em>. Doble clic, escribe <em>Tortas caseras</em> y, en la barra de arriba, cambia la letra, el tamaño y el color.",
            "<strong>Textos</strong>: <strong>Texto</strong> → <em>Agregar algo de texto</em>, un cuadro por frase: el nombre del negocio, por qué comprar, la oferta y el contacto.",
            "<strong>Imagen</strong>: <strong>Elementos</strong> → busca <em>torta</em> → Fotos. Elige una sin corona, arrástrala al centro y ajústala por las esquinas. Si tapa algún texto: <strong>Posición → Detrás</strong>."
          ]
        },
        {
          titulo: "Descargar y guardar",
          pasos: [
            "Arriba a la derecha toca <strong>Compartir → Descargar</strong>.",
            "En Tipo de archivo elige <strong>PNG</strong> (para WhatsApp y redes) y toca el botón morado Descargar.",
            "Repite, pero ahora con <strong>PDF Impresión</strong> (para imprimir).",
            "Mueve los dos archivos de la carpeta Descargas a una carpeta llamada <em>Kit digital</em>."
          ]
        }
      ],
      claves: [
        "Canva guarda solo: no hay botón de guardar. Todos tus diseños están en <strong>Proyectos</strong>.",
        "Guardar no es lo mismo que descargar: descargar es sacar una copia a tu computadora para enviarla o imprimirla.",
        "¿Te equivocaste? <code>Ctrl + Z</code>, y se puede repetir. No hay miedo a equivocarse.",
        "Si algo tiene <strong>corona</strong>, es de pago: busca uno parecido que no la tenga.",
        "Un buen flyer se entiende en 3 segundos. Si hay que leer mucho, nadie lo lee."
      ],
      problemas: [
        { si: "Lo que elegí tiene corona", haz: "Bórralo y busca uno parecido sin corona." },
        { si: "No encuentro un menú", haz: "Haz clic en el diseño y mira la barra de arriba: cambia según lo que tengas seleccionado." },
        { si: "No puedo seleccionar algo que está detrás", haz: "Botón <strong>Posición</strong> → pestaña Capas, y elígelo en la lista." },
        { si: "Se me cerró Canva", haz: "Entra de nuevo: tu diseño está en <strong>Proyectos</strong>." }
      ],
      dato: "Cada color tiene un código que empieza con <strong>#</strong>. Si usas el mismo código en todos tus diseños, tu negocio siempre se ve con los mismos colores.",
      laminas: [
        { titulo: "Primeros pasos en Canva · Teoría", archivo: "modulo1-teoria-primeros-pasos-canva.pdf", peso: "7 MB" },
        { titulo: "Manos a la obra en Canva · Práctica", archivo: "modulo1-practica-primeros-pasos-canva.pdf", peso: "5 MB" }
      ]
    }
  },
  {
    num: "ii",
    titulo: "Tarjetas personalizadas",
    desc: "Diseña una tarjeta de felicitación o invitación con fotos de tu familia y compártela por WhatsApp.",
    temas: ["Plantillas", "Fotos propias", "WhatsApp", "Código QR"],
    esNuevo: false,
    contenido: {
      resumen: "Partiendo de una plantilla de Canva creamos una tarjeta para un nieto, un hijo o un amigo cercano, con fotos familiares y un mensaje propio. Después la descargamos para enviarla por WhatsApp. Como bonus, hicimos un código QR que lleva directo a la tarjeta.",
      actividades: [
        {
          titulo: "Crear la tarjeta",
          pasos: [
            "En el buscador de Canva escribe palabras sencillas, como <em>Tarjeta cumpleaños flores</em> o <em>Invitación café</em>, y elige una plantilla <strong>sin corona</strong>.",
            "En la barra izquierda toca <strong>Subidos</strong> y sube tus fotos familiares desde la computadora.",
            "Arrastra tu foto sobre la foto de la plantilla: se reemplaza sola.",
            "Haz doble clic sobre cada texto para borrarlo y escribir tu mensaje. Con la barra de arriba agranda la letra o cambia el color."
          ]
        },
        {
          titulo: "Descargar y enviar",
          pasos: [
            "Toca <strong>Compartir → Descargar</strong> y elige <strong>PNG</strong> o JPG.",
            "En WhatsApp Web abre el chat de tu familiar y adjunta la imagen que descargaste."
          ]
        },
        {
          titulo: "Bonus: código QR con QRCodeGecko",
          aviso: "<strong>No recomendado:</strong> los códigos de esta página tienen fecha de vencimiento y después dejan de funcionar. Para tus códigos usa el QR de Canva del <strong>módulo iii</strong>. Lo dejamos aquí porque es lo que vimos en clase.",
          pasos: [
            "Entra a <strong>www.qrcodegecko.com</strong>.",
            "Copia el enlace de tu tarjeta de Canva o de un video de YouTube y pégalo en la casilla <em>Enter URL</em>.",
            "Si quieres, cambia el color (siempre oscuro, para que se lea bien), la forma de los puntos o agrégale un marco.",
            "Toca <strong>Download</strong> y elige PNG. La imagen queda en tu carpeta Descargas.",
            "Para probarlo, apunta la cámara del teléfono al código y toca el aviso que aparece."
          ]
        }
      ],
      claves: [
        "Busca con palabras sencillas y elige plantillas <strong>sin corona</strong>.",
        "Canva guarda todos tus cambios al instante.",
        "Si te equivocas, usa la flecha curva de arriba o <code>Ctrl + Z</code>.",
        "Sin miedo a practicar: nada se rompe, todo se puede corregir."
      ],
      dato: "Un código QR es un atajo: en vez de escribir una dirección web larga, basta con apuntarle con la cámara del teléfono. Se usa para ver menús y recetas, e incluso para conectarse al WiFi sin escribir la clave.",
      laminas: [
        { titulo: "Tarjetas personalizadas en Canva", archivo: "modulo2-tarjetas-personalizadas-canva.pdf", peso: "0.5 MB" },
        { titulo: "Bonus: códigos QR con QRCodeGecko", archivo: "modulo2-codigos-qr-qrcodegecko.pdf", peso: "0.4 MB", aviso: "No recomendado" }
      ]
    }
  },
  {
    num: "iii",
    titulo: "Catálogo digital y códigos QR en Canva",
    desc: "Arma un catálogo de tus productos con fotos y precios, y crea un código QR que no se vence.",
    temas: ["Catálogo", "Precios", "PDF", "Código QR"],
    esNuevo: false,
    contenido: {
      resumen: "Un catálogo digital muestra tus productos con foto, nombre y precio en un solo archivo PDF, listo para enviarlo por WhatsApp. De ejemplo usamos «Creaciones María», un negocio de bisutería hecha a mano. También aprendimos a hacer códigos QR dentro de Canva: gratis y sin fecha de vencimiento.",
      actividades: [
        {
          titulo: "Armar el catálogo",
          pasos: [
            "Entra a <strong>canva.com</strong> e inicia sesión.",
            "En el buscador escribe <em>Catálogo de bisutería</em> (o de tu producto), elige una plantilla sin corona y toca <strong>Personalizar esta plantilla</strong>.",
            "Toca <strong>Subidos → Subir archivos</strong> y elige las fotos de tus productos.",
            "Arrastra cada foto sobre una foto de la plantilla: se reemplaza sola.",
            "Doble clic en el título y escribe el nombre de tu marca. Con <strong>+</strong> y <strong>−</strong> cambias el tamaño de la letra; con la <strong>A</strong>, el color.",
            "En cada producto pon el nombre, una descripción corta y el precio, bien visible.",
            "Para agregar productos toca <strong>Duplicar página</strong> (el ícono de las dos hojitas): copia el diseño y solo cambias fotos y textos.",
            "Termina con una página de cómo comprarte: WhatsApp, redes sociales, lugar de entrega y formas de pago."
          ]
        },
        {
          titulo: "Guardar y enviar el catálogo",
          pasos: [
            "Toca <strong>Compartir → Descargar</strong>, en Tipo de archivo elige <strong>PDF estándar</strong> y toca Descargar.",
            "En WhatsApp abre el chat, toca el clip 📎, elige <em>Documento</em> y busca tu PDF."
          ]
        },
        {
          titulo: "Código QR con Canva (recomendado)",
          pasos: [
            "Abre tu tarjeta o tu catálogo, toca <strong>Compartir</strong> y luego el botón morado <strong>Copiar el enlace</strong>.",
            "Si aparece un aviso, toca <strong>Permitir acceso para ver</strong>. Si no lo haces, el código abrirá una página bloqueada.",
            "En la barra izquierda toca <strong>Apps</strong>, escribe <em>QR estáticos</em> y elige <strong>Códigos QR estáticos</strong>. Revisa que diga <em>Creado por Canva</em> y toca Abrir (solo la primera vez).",
            "Toca la casilla URL, pega el enlace (clic derecho → Pegar) y toca <strong>Generar el código</strong>.",
            "Para descargarlo: <strong>Compartir → Descargar</strong>, y en Tipo de archivo cambia PDF por <strong>PNG</strong>.",
            "Pruébalo: apunta la cámara del teléfono al código, sin tomar foto, y toca el aviso que aparece."
          ]
        }
      ],
      claves: [
        "Toma las fotos de tus productos cerca de una ventana, con mucha luz natural.",
        "Letras grandes y claras, sobre todo en los precios.",
        "Duplicar página es mucho más rápido que empezar cada página de cero.",
        "El QR de Canva <strong>no se vence</strong>: funciona mientras el enlace siga activo.",
        "Lo que tiene coronita es de pago, y no hace falta."
      ],
      problemas: [
        { si: "El QR abre una página bloqueada", haz: "En <strong>Compartir</strong>, toca Permitir acceso para ver." },
        { si: "No encuentro la herramienta de QR", haz: "<strong>Apps</strong> → busca <em>QR estáticos</em>. Después de usarla una vez queda en tu barra izquierda." }
      ],
      dato: "Un catálogo en PDF se envía por WhatsApp como <strong>documento</strong>, así que llega con la misma calidad. Las fotos, en cambio, WhatsApp las comprime y pierden nitidez.",
      laminas: [
        { titulo: "Catálogo en Canva paso a paso", archivo: "modulo3-catalogo-canva.pdf", peso: "3 MB" },
        { titulo: "Códigos QR con Canva", archivo: "modulo3-codigos-qr-canva.pdf", peso: "3 MB" }
      ]
    }
  },
  {
    num: "iv",
    titulo: "La IA como ayudante: Canva IA y Gemini",
    desc: "Pídele a la inteligencia artificial el borrador de tu post o tu flyer, y termínalo tú a mano.",
    temas: ["Canva IA", "Gemini", "Pedidos", "Imágenes"],
    esNuevo: false,
    contenido: {
      resumen: "Canva IA y Gemini son ayudantes de inteligencia artificial: les describes con palabras lo que necesitas y en segundos te proponen un borrador. Gemini escribe textos y crea imágenes; Canva arma el diseño. La IA hace el borrador, pero tú decides: siempre hay que revisarlo y terminarlo a mano.",
      conceptosTitulo: "La receta para pedir",
      conceptos: [
        "<strong>Qué pieza</strong>: un flyer, un post cuadrado, una historia, un texto para un post.",
        "<strong>De qué negocio</strong>: el nombre y qué vende.",
        "<strong>Cómo se ve</strong>: el estilo, el tono y los colores de tu marca.",
        "<strong>Datos exactos</strong>: título, teléfono y precios, entre comillas.",
        "<em>Muy corto</em>: «Un post de tortas». <em>Completo</em>: «Post cuadrado para Instagram de Dulces María, tortas caseras. Estilo alegre, colores crema, chocolate y rosado. Título: \"Tortas por encargo\"»."
      ],
      actividades: [
        {
          titulo: "Canva IA",
          pasos: [
            "En canva.com, en la barra izquierda justo debajo de Crear, toca el círculo de colores <strong>Canva IA</strong>.",
            "Escribe tu pedido con la receta (o díctalo con el micrófono) y envíalo con la flecha morada.",
            "Mira las opciones. Un cambio grande lo pides en la misma caja, como en una conversación; los pequeños, mejor a mano.",
            "Toca <strong>Editar diseño</strong>: se abre el editor de siempre para cambiar textos, colores y fotos.",
            "Descárgalo con <strong>Compartir → Descargar</strong> en PNG."
          ]
        },
        {
          titulo: "Gemini",
          pasos: [
            "Entra a <strong>gemini.google.com</strong> e inicia sesión con tu cuenta de Gmail.",
            "En la caja <em>Pregunta a Gemini</em>, pide 3 opciones de texto para tu post, con la receta.",
            "Pide cambios como en una conversación: <em>«Me gusta la opción 2. Hazla más corta y agrégale 3 hashtags.»</em>",
            "Toca <strong>Copiar</strong> (los dos cuadritos) debajo de la respuesta y pégalo donde lo necesites con <code>Ctrl + V</code>. Copia solo el texto, no títulos como «Opción 2».",
            "Para una imagen de fondo: toca <strong>+ → Crear imagen</strong>, elige 1:1 para un post (9:16 para una historia) y pídela <strong>«sin letras»</strong>. Descárgala con los tres puntos → <em>Descargar imagen</em>."
          ]
        },
        {
          titulo: "De Gemini a Canva",
          pasos: [
            "Crea un diseño cuadrado en Canva.",
            "Toca <strong>Subidos → Subir archivos</strong>, elige la imagen de Gemini y agrándala hasta cubrir toda la página.",
            "Agrega un cuadro de <strong>Texto</strong> y pega el texto de Gemini."
          ]
        }
      ],
      claves: [
        "La IA se equivoca: revisa ortografía, precios, teléfonos y direcciones antes de usar lo que hizo.",
        "Una imagen de IA de tu producto <strong>no es tu producto</strong>: para mostrar lo que vendes, usa una foto real.",
        "Si inventa algo que no pediste (un lema, una cifra, un precio), bórralo y pon el dato real.",
        "El uso gratis tiene límite: haz un pedido completo, una sola vez, y corrige a mano.",
        "Nunca le des tu cédula, claves, números de cuenta ni datos de tus clientes: lo que le escribes queda guardado."
      ],
      problemas: [
        { si: "Dice «Estoy pensando…» y tarda", haz: "Espera. No lo envíes de nuevo: cada envío gasta." },
        { si: "Sale el aviso de límite", haz: "Deja de pedir y sigue a mano. En Gemini, en <em>Límites de uso</em> ves a qué hora se recarga." },
        { si: "Algo salió en inglés", haz: "Cámbialo a mano o escribe «Hazlo en español»." },
        { si: "La imagen trae letras raras", haz: "Pídela «sin letras» y escribe el texto en Canva." },
        { si: "No encuentro Canva IA", haz: "En la barra izquierda, justo debajo de Crear." }
      ],
      dato: "En nuestras pruebas con una cuenta gratuita, un solo flyer hecho con Canva IA gastó el <strong>15%</strong> del uso del mes, y una presentación con un cambio, el <strong>80%</strong>. Por eso conviene pedir una vez, bien explicado.",
      laminas: [
        { titulo: "Canva IA: tu ayudante de diseño", archivo: "modulo4-canva-ia.pdf", peso: "5 MB" },
        { titulo: "Gemini: tu asistente para escribir y crear", archivo: "modulo4-gemini.pdf", peso: "6 MB" }
      ]
    }
  },
  {
    num: "v",
    titulo: "Redes sociales para tu negocio: tu primer post en Instagram",
    desc: "Conoce para qué sirve cada red, crea la cuenta de tu negocio en Instagram y publica tu primer post.",
    temas: ["WhatsApp", "Facebook", "Instagram", "Primer post"],
    esNuevo: false,
    contenido: {
      resumen: "Las redes sociales son la versión moderna del boca a boca: una vitrina siempre abierta, sin pagar local, que llega a vecinos e interesados de tu misma ciudad y muestra quién está detrás de cada producto. En esta clase vimos para qué sirve cada red y, paso a paso, creamos la cuenta del negocio en Instagram y publicamos el primer post.",
      conceptosTitulo: "Para qué sirve cada red",
      conceptos: [
        "<strong>WhatsApp</strong>: atención inmediata, catálogo de productos y confirmación de pedidos. Es el canal principal de ventas.",
        "<strong>Facebook</strong>: grupos del barrio, comunidad local y publicaciones que explican con más detalle.",
        "<strong>Instagram</strong>: la vitrina visual, con fotos atractivas de los productos terminados.",
        "<strong>Comida y repostería</strong>: fotos con luz natural, videos cortos decorando o amasando, y un botón a WhatsApp en el perfil.",
        "<strong>Artesanía y tejidos</strong>: cuenta la historia de cada pieza, el tiempo que te tomó, y avisa que aceptas encargos a medida."
      ],
      actividades: [
        {
          titulo: "Instalar Instagram y crear la cuenta",
          pasos: [
            "Abre la tienda de aplicaciones (<strong>Play Store</strong> o <strong>App Store</strong>), toca la lupa y escribe <em>Instagram</em>.",
            "Toca <strong>Instalar</strong> (u <strong>Obtener</strong>), abre la aplicación y toca <strong>Crear cuenta nueva</strong>.",
            "Escribe tu correo o tu número de celular e inventa una contraseña. Anótala en un cuaderno.",
            "Como nombre de usuario usa el nombre de tu negocio. Toca <strong>Siguiente</strong> y escribe tu fecha de nacimiento."
          ]
        },
        {
          titulo: "Cambiar a cuenta de empresa",
          pasos: [
            "Toca tu foto (abajo a la derecha) y luego las <strong>tres rayas</strong> de arriba.",
            "Toca <strong>Configuración</strong> y luego <strong>Tipo de cuenta y herramientas</strong>.",
            "Elige <strong>Cambiar a cuenta profesional</strong> y luego <strong>Empresa</strong>.",
            "Agrega una foto, una descripción corta de lo que vendes y tu teléfono. Toca <strong>Guardar</strong>."
          ]
        },
        {
          titulo: "Publicar tu primer post",
          pasos: [
            "Toca el botón <strong>+</strong> en la parte de abajo y elige <strong>Publicación</strong>.",
            "Toca la foto de tu producto o tu negocio y luego <strong>Siguiente</strong> (arriba a la derecha).",
            "Escribe una descripción corta: qué vendes, el precio y cómo contactarte.",
            "Toca <strong>Compartir</strong>. ¡Listo! Tu publicación ya es pública."
          ]
        }
      ],
      claves: [
        "Empieza con <strong>una sola red</strong>: WhatsApp o Facebook. Cuando la domines, suma otra.",
        "Fotos de día, cerca de una ventana, con el producto claro y sin cosas de fondo.",
        "Texto corto: qué vendes, el precio y cómo contactarte, sin rodeos.",
        "Usa de 3 a 5 hashtags, como <em>#emprendimiento</em> y el nombre de tu ciudad.",
        "Publica con constancia (por ejemplo, una vez por semana) y responde los mensajes y comentarios.",
        "Confirma que recibiste el pago antes de enviar un pedido lejos, y define tu horario de atención."
      ],
      dato: "Los <strong>estados de WhatsApp</strong> duran 24 horas: son ideales para la oferta del día. Y con el <strong>mensaje de bienvenida</strong>, WhatsApp le responde solo a quien te escribe por primera vez.",
      laminas: [
        { titulo: "El poder de las redes sociales en tu emprendimiento", archivo: "modulo5-redes-sociales-emprendimiento.pdf", peso: "0.3 MB" },
        { titulo: "Tu negocio en Instagram paso a paso", archivo: "modulo5-negocio-en-instagram.pdf", peso: "1.6 MB" }
      ]
    }
  },
  {
    num: "vi",
    titulo: "Tu negocio en movimiento: carrusel y video con Edits",
    desc: "Graba un video corto de tu producto, edítalo gratis con Edits y publícalo en un carrusel de Instagram.",
    temas: ["Carrusel", "Video corto", "Edits", "Instagram"],
    esNuevo: false,
    contenido: {
      resumen: "Un carrusel son varias fotos o videos en una sola publicación: el cliente desliza el dedo para ver la siguiente, como un álbum. En esta clase grabamos un video corto del producto, lo editamos con <strong>Edits</strong> (la app gratuita de Instagram para editar videos, sin marca de agua) y publicamos un carrusel con fotos y el video adentro.",
      conceptosTitulo: "Carrusel, reel o historia",
      conceptos: [
        "<strong>Carrusel</strong>: varias fotos o videos que se deslizan. Queda en tu perfil. Para varios productos, un antes y después o un paso a paso.",
        "<strong>Reel</strong>: un video vertical. Queda en tu perfil. Para mostrar el producto en movimiento.",
        "<strong>Historia</strong>: una foto o un video corto que se borra en 24 horas. Para ofertas del día y avisos rápidos.",
        "<strong>Un buen carrusel</strong>: la mejor foto de portada, un orden que cuente algo, entre 4 y 6 láminas, todas con la misma forma y la última con el contacto.",
        "<strong>Un video en 3 partes</strong>: el gancho (lo más bonito, los primeros 3 segundos), en acción (tus manos trabajando) y el contacto («Pedidos por WhatsApp»). En total, de 15 a 30 segundos."
      ],
      actividades: [
        {
          titulo: "Grabar tus 3 tomas",
          pasos: [
            "Antes de grabar, dibuja en papel tu carrusel (5 casillas) y tu video (3 tomas): qué va en cada una.",
            "Abre la cámara normal del celular, elige <strong>Video</strong> y pon el celular <strong>de pie</strong>.",
            "Graba unos 5 segundos de cada toma, cerca de una ventana y apoyando los codos para que no tiemble.",
            "No tiene que salir perfecto: lo que sobre, se corta después."
          ]
        },
        {
          titulo: "Instalar Edits",
          aviso: "En la tienda, la primera de la lista dice <strong>«Patrocinado»</strong>: es un anuncio, no es la nuestra. La app pesa 125 MB, mejor descárgala con Wi‑Fi.",
          pasos: [
            "Abre <strong>Play Store</strong> (en iPhone, <strong>App Store</strong>), toca la lupa y escribe <em>edits</em>.",
            "Busca <strong>Edits: Editor de vídeo</strong>: debajo dice <em>Instagram</em>. Toca <strong>Instalar</strong> y luego <strong>Abrir</strong>.",
            "Toca <strong>Continuar con Instagram</strong> para entrar con la cuenta de tu negocio."
          ]
        },
        {
          titulo: "Editar el video",
          pasos: [
            "Toca el botón blanco <strong>+</strong> (abajo a la derecha), elige <strong>Galería</strong> y, cuando pregunte por tus fotos y videos, toca <strong>Permitir todo</strong>.",
            "Toca el círculo de cada toma en el orden de tu hoja (aparecen los números 1, 2, 3) y luego el <strong>✓</strong> blanco.",
            "Para cambiar el orden, deja el dedo sobre una toma y arrástrala. Para acortarla, tócala (se pone amarilla) y arrastra sus bordes.",
            "Toca <strong>Texto</strong>, escribe algo corto (<em>Tortas caseras</em>), toca la <strong>A</strong> en un cuadro, elige <strong>Fondo revertido</strong> y toca <strong>Listo</strong>. Repite en la última toma con <em>Pedidos por WhatsApp</em>.",
            "Toca <strong>+ Agregar audio</strong>, escucha las canciones, elige una y con la tijera escoge qué parte suena. Toca <strong>✓</strong>.",
            "Toca ▶ y mira el video completo antes de seguir."
          ]
        },
        {
          titulo: "Guardar el video y publicar el carrusel",
          pasos: [
            "En Edits toca <strong>Siguiente</strong>, espera a que llegue al 100 % sin cerrar la app y toca <strong>Descargar</strong>: el video queda en tu galería.",
            "Abre Instagram, toca <strong>+</strong> y abajo elige <strong>PUBLICACIÓN</strong>. Toca <strong>Seleccionar</strong>.",
            "Toca tus fotos y tu video en el orden de tu hoja (aparecen números) y luego <strong>Siguiente</strong>.",
            "Escribe la descripción (qué vendes, precio y contacto), agrega de 3 a 5 hashtags y toca <strong>Compartir</strong>."
          ]
        }
      ],
      claves: [
        "Siempre con el celular <strong>de pie</strong>: así se ve como en el teléfono.",
        "Varias tomas cortas de 5 segundos son mejores que una larga.",
        "Texto con pocas palabras, letra grande y con fondo, para que se lea.",
        "La música, de la biblioteca de la app, no de la radio ni de otro video. Evita las canciones con una <strong>E</strong>: tienen lenguaje fuerte.",
        "Revisa que no salga nada privado en el fondo: tu dirección, documentos o la placa del carro.",
        "Apenas termines el video, toca <strong>Descargar</strong>: así queda seguro en tu galería."
      ],
      problemas: [
        { si: "No veo mis videos en Edits", haz: "El permiso de fotos quedó en «limitado». Pide ayuda para cambiarlo a <strong>Permitir todo</strong>." },
        { si: "Se cerró la app", haz: "Ábrela de nuevo: tu trabajo sigue en <strong>Proyectos</strong>." },
        { si: "Borré algo sin querer", haz: "Toca la flecha curva de arriba: deshace el último paso." },
        { si: "El video salió acostado", haz: "Se grabó con el celular de lado. Vuelve a grabar con el celular de pie." },
        { si: "El video quedó sin sonido al publicarlo", haz: "Algunas cuentas de empresa no permiten canciones famosas. Usa el sonido original o elige la música desde Instagram al publicar." }
      ],
      dato: "Tu video también sirve para los <strong>estados de WhatsApp</strong>: entra a los estados, toca para agregar uno y elige el video de tu galería. Y si en Edits tocas <strong>Instagram</strong> en vez de Descargar, se publica como reel.",
      laminas: [
        { titulo: "Carrusel y video · Teoría", archivo: "modulo6-teoria-carrusel-video.pdf", peso: "2.7 MB" },
        { titulo: "Carrusel y video con Edits · Práctica", archivo: "modulo6-practica-carrusel-video-edits.pdf", peso: "7 MB" }
      ]
    }
  },
  {
    num: "vii",
    titulo: "TikTok para tu emprendimiento",
    desc: "Conoce TikTok, en qué se diferencia de Instagram, crea la cuenta de tu negocio y publica tu primer video.",
    temas: ["TikTok", "Para ti", "Cuenta de empresa", "Primer video"],
    esNuevo: false,
    contenido: {
      resumen: "TikTok es una aplicación gratuita para ver y crear videos cortos, en vertical, con música, texto y sonidos. A diferencia de Instagram, tus videos no los ven solo tus seguidores: TikTok se los muestra a personas a quienes les puede interesar, aunque todavía no te conozcan. En esta clase vimos cómo funciona, creamos la cuenta del negocio y publicamos el primer video.",
      conceptosTitulo: "TikTok frente a Instagram",
      conceptos: [
        "<strong>Qué se publica</strong>: en Instagram, fotos y videos; en TikTok, sobre todo videos cortos.",
        "<strong>Quién lo ve</strong>: en Instagram, principalmente tus seguidores; en TikTok, cualquier persona a quien le interese.",
        "<strong>La primera pantalla</strong>: Instagram muestra lo de las cuentas que sigues; TikTok abre en <strong>Para ti</strong>, con videos que te recomienda.",
        "<strong>El estilo</strong>: Instagram es más cuidado y arreglado; TikTok, más natural y espontáneo. Instagram también tiene videos cortos, los <strong>reels</strong>, muy parecidos.",
        "<strong>Cómo llega tu video</strong>: lo publicas, TikTok se lo muestra a pocas personas y, si les gusta, a más. Por eso no necesitas muchos seguidores para empezar."
      ],
      actividades: [
        {
          titulo: "Instalar TikTok y registrarte",
          pasos: [
            "Abre la tienda de aplicaciones (<strong>Play Store</strong> o <strong>App Store</strong>), toca la lupa y escribe <em>TikTok</em>. Toca <strong>Instalar</strong>.",
            "Abre TikTok y toca <strong>Perfil</strong>, abajo a la derecha.",
            "Toca <strong>Usar teléfono o correo</strong> y sigue las instrucciones.",
            "Anota tu contraseña en un cuaderno."
          ]
        },
        {
          titulo: "Cambiar a cuenta de empresa y completar el perfil",
          pasos: [
            "Toca <strong>Perfil</strong> y luego las <strong>tres rayas</strong>, arriba a la derecha.",
            "Toca <strong>Configuración y privacidad → Cuenta → Cambiar a cuenta de empresa</strong>.",
            "Elige la categoría de tu negocio, por ejemplo comida o ropa.",
            "Vuelve a tu perfil y toca <strong>Editar perfil</strong>: pon una foto clara (tu logo o tu cara), el nombre del negocio, qué vendes y tu teléfono."
          ]
        },
        {
          titulo: "Grabar y publicar tu primer video",
          pasos: [
            "Toca el botón <strong>+</strong>, abajo en el centro, y apunta la cámara a tu producto.",
            "Toca el <strong>círculo rojo</strong> para empezar y otra vez para parar. Cuando termines, toca la palomita <strong>✓</strong>.",
            "Escribe una descripción corta y agrega 3 hashtags, como <em>#emprendimiento</em>.",
            "Revisa que en quién puede verlo diga <strong>Todos</strong> y toca <strong>Publicar</strong>."
          ]
        }
      ],
      claves: [
        "Graba con el celular <strong>de pie</strong>, de día y cerca de una ventana.",
        "Muestra lo más llamativo en los primeros segundos: así la gente se queda viendo.",
        "Habla cerca del teléfono, sin ruido de fondo, y agrega subtítulos: ayudan a entender aunque no haya sonido.",
        "Publica con constancia, por ejemplo cada semana, y responde los comentarios.",
        "Nunca compartas los códigos que te lleguen por mensaje, y no muestres tu dirección de casa ni documentos."
      ],
      problemas: [
        { si: "Me escriben pidiendo dinero o prometiendo premios", haz: "Desconfía y no respondas." },
        { si: "Alguien deja comentarios molestos", haz: "Puedes borrar el comentario o bloquear a esa persona." }
      ],
      dato: "¿No sabes qué grabar? Tu producto de cerca con el precio, cómo lo preparas, un antes y después, la respuesta a una pregunta de un cliente, tu historia o un consejo sobre lo que sabes hacer.",
      laminas: [
        { titulo: "TikTok para tu emprendimiento", archivo: "modulo7-tiktok-para-emprendedores.pdf", peso: "3.1 MB" }
      ]
    }
  },
  {
    num: "viii",
    titulo: "¿Es real o hecho con IA? Práctica en TikTok",
    desc: "Aprende a reconocer fotos, videos y voces hechos con IA, pide ver menos y sube tu video de Edits a TikTok.",
    temas: ["Contenido con IA", "Deepfake", "Para ti", "Publicar en privado"],
    esNuevo: false,
    contenido: {
      resumen: "La inteligencia artificial puede crear fotos que nunca se tomaron, videos de personas que parecen reales y voces copiadas de gente de verdad. Como es rápido, gratis y emociona, las redes están llenas de este contenido, y a veces se usa para estafar. Aprendimos a reconocerlo y qué hacer en TikTok; después practicamos en la app: elegir qué videos ver y subir nuestro video de Edits como negocio, en privado.",
      conceptosTitulo: "Señales de que puede ser IA",
      conceptos: [
        "<strong>En las imágenes</strong>: manos con dedos de más, letras y carteles raros, piel demasiado lisa, fondos deformados o todo demasiado perfecto, como una pintura.",
        "<strong>En videos y voces</strong>: los labios no van con lo que dice, parpadea poco, la cara se ve borrosa en los bordes, la voz suena plana, como de robot, o se mueve rígido.",
        "<strong>En la cuenta</strong>: es nueva, sin foto real ni contacto, y tiene muchos videos casi iguales, con la misma voz.",
        "<strong>En el mensaje</strong>: pide dinero, claves o datos; mete prisa («¡Solo hoy!»); promete milagros o ganancias seguras, o no dice dónde pasó ni quién lo confirma.",
        "<strong>Deepfake</strong>: un video o audio al que le cambian la cara o la voz a una persona real para hacerle decir lo que nunca dijo, como un famoso que «recomienda» una inversión o la voz de un familiar que pide dinero urgente.",
        "<strong>La etiqueta</strong>: TikTok pide marcar lo hecho con IA y puede aparecer «Contenido generado por IA». Pero no todos la ponen: que no la tenga no quiere decir que sea real."
      ],
      actividades: [
        {
          titulo: "Comprobar si es verdad",
          pasos: [
            "Detente: ¿te da mucho miedo, rabia o emoción? Eso es lo que más se comparte sin pensar.",
            "Mira quién lo publicó y desde cuándo tiene la cuenta.",
            "Busca la noticia en un periódico, un canal de TV o un sitio oficial. Si aparece en varias fuentes confiables, es más probable que sea real.",
            "Si nadie más lo confirma, <strong>no lo compartas</strong>."
          ]
        },
        {
          titulo: "Recorrer TikTok: búsqueda del tesoro",
          pasos: [
            "Mira 3 videos en <strong>Para ti</strong>: sube el dedo para pasar al siguiente.",
            "Busca un tema con la <strong>lupa</strong>, arriba a la derecha.",
            "Dale me gusta con el <strong>corazón</strong> y guarda un video con el <strong>marcador</strong>, debajo de los comentarios.",
            "Comparte un video por WhatsApp con la <strong>flecha</strong>.",
            "Toca la foto redonda para ver el perfil de quien lo hizo."
          ]
        },
        {
          titulo: "Enseñarle a TikTok lo que te interesa",
          pasos: [
            "TikTok es como un mesonero: aprende de lo que ves, sigues o rechazas.",
            "Con la lupa, busca tu rubro: <em>#bisutería</em>, <em>#tortas</em>, <em>#costura</em>… y sigue 3 cuentas que te gusten.",
            "En 2 videos que no te interesen, deja el dedo apretado y toca <strong>No me interesa</strong>.",
            "Vuelve a Para ti: ¿cambiaron los videos?"
          ]
        },
        {
          titulo: "Ver menos videos hechos con IA",
          aviso: "No bloquea toda la IA: le pide a TikTok que te muestre menos. Y elige <strong>Permanente</strong>, o el cambio vence a los 7 días.",
          pasos: [
            "En <strong>Perfil</strong>, toca las tres rayas, arriba a la derecha.",
            "Toca <strong>Ajustes y privacidad → Preferencias de contenido → Gestionar temas</strong>.",
            "Junto a <em>Contenido generado por IA</em>, toca <strong>Predeterminado</strong> y elige <strong>Menos</strong>.",
            "Arriba, en <em>Establecer una duración</em>, elige <strong>Permanente</strong>."
          ]
        },
        {
          titulo: "Subir tu video de Edits, en privado",
          pasos: [
            "Toca <strong>+</strong>, abajo al centro, y luego el cuadrito de la galería, abajo a la izquierda. Si te pide permisos, toca <strong>Mientras la app está en uso</strong> y luego <strong>Permitir todo</strong>.",
            "En <em>Vídeos</em>, toca tu video de Edits y luego <strong>Siguiente</strong>.",
            "Se edita como en Edits: <strong>Aa</strong> para texto y, arriba, <em>Agregar sonido</em>. Si tu video ya los tiene, no toques nada.",
            "Toca <strong>Siguiente</strong>, no <em>Tu Story</em>: esa opción lo publica de una vez para todos.",
            "En <em>Agrega una descripción…</em> escribe qué vendes y cómo pedirlo: <em>«Collares hechos a mano. Pedidos por WhatsApp.»</em>",
            "Toca <strong># Hashtags</strong> y pon tu rubro, tu ciudad y uno general: <em>#bisutería #Caracas #emprendimiento</em>.",
            "Toca <em>Todo el mundo puede ver…</em>, elige <strong>Solo tú</strong> y toca <strong>Publicar</strong>."
          ]
        },
        {
          titulo: "Cuando estés listo: publicarlo para todos",
          pasos: [
            "En <strong>Perfil</strong>, toca el <strong>candado</strong>: ahí están tus videos privados.",
            "Abre tu video y toca los tres puntos, a la derecha.",
            "Toca <strong>Ajustes de privacidad</strong> y elige <strong>Todo el mundo</strong>.",
            "No hay apuro: puede quedarse en privado hasta que te sientas seguro."
          ]
        }
      ],
      claves: [
        "Regla de oro: si un video te pide <strong>dinero o datos</strong>, desconfía, sea IA o no.",
        "Lo que da mucho miedo, rabia o promete milagros es lo que más se usa para engañar.",
        "Ninguna señal es segura al 100 %: ante la duda, no lo compartas.",
        "Una cura milagrosa que se vende por un enlace no es medicina: consulta a tu médico.",
        "Si usaste IA en tu video, avísalo en <strong>Más opciones</strong> al publicar."
      ],
      problemas: [
        { si: "Un video parece una estafa", haz: "Toca la flecha ↗, desliza la fila de opciones y toca <strong>Denunciar</strong>. Elige el motivo, por ejemplo <em>Información falsa</em>, y toca Enviar." },
        { si: "Una cuenta me molesta o parece falsa", haz: "Toca su nombre o su foto, luego los tres puntos <strong>⋯</strong> de arriba y <strong>Bloquear</strong>. Confirma tocando Bloquear otra vez." },
        { si: "TikTok avisa que mi cuenta es pública", haz: "No pasa nada: en el último paso eliges <strong>Solo tú</strong>." },
        { si: "A la semana volvieron los videos con IA", haz: "El cambio quedó por 7 días. Repítelo y elige <strong>Permanente</strong>." }
      ],
      dato: "No todo lo hecho con IA es peligroso: un gatito que toca el piano con la etiqueta «Contenido generado por IA» simplemente no es real. El peligro es cuando se usa para pedirte dinero o datos.",
      laminas: [
        { titulo: "¿Es real o hecho con IA? · Teoría", archivo: "modulo8-contenido-hecho-con-ia.pdf", peso: "3.2 MB" },
        { titulo: "TikTok para tu emprendimiento · Práctica", archivo: "modulo8-practica-tiktok.pdf", peso: "4.7 MB" }
      ]
    }
  },
  {
    num: "ix",
    titulo: "Muestra cómo lo haces: el video del proceso",
    desc: "Planea 5 escenas, fija el teléfono arriba de la mesa y graba cómo haces tu producto, paso a paso.",
    temas: ["Video de proceso", "Encuadre", "Luz", "Publicar"],
    esNuevo: false,
    contenido: {
      resumen: "Un video de proceso muestra, paso a paso, cómo se hace tu producto. El teléfono queda quieto, apoyado arriba de la mesa, y en pantalla solo se ven tus manos y los materiales: no hace falta salir en cámara ni saber de edición. De ejemplo grabamos cómo se arma un collar de bisutería, pero sirve igual para pasteles, tejidos, velas o cualquier cosa hecha a mano.",
      conceptosTitulo: "Por qué funciona",
      conceptos: [
        "<strong>Confianza</strong>: el cliente ve que de verdad lo haces tú.",
        "<strong>Valor</strong>: se nota el tiempo y el cuidado de un trabajo hecho a mano.",
        "<strong>Atrae</strong>: mucha gente se queda viendo hasta llegar al resultado final.",
        "<strong>Responde dudas</strong>: se ven los materiales y el tamaño real. Y pocos negocios muestran cómo trabajan.",
        "<strong>En 3 partes</strong>: empieza con el producto terminado, sigue con el proceso y cierra con el precio y el contacto. Para el primero, de 15 a 60 segundos está bien."
      ],
      actividades: [
        {
          titulo: "Planear las 5 escenas",
          pasos: [
            "En un papel, escribe o dibuja 5 escenas en el orden en que las vas a grabar.",
            "Con el collar quedaron así: <strong>1</strong> los materiales sobre la mesa (cuentas, hilo, broche, tijeras y pinzas), <strong>2</strong> enhebrar las cuentas, <strong>3</strong> colocar el broche, <strong>4</strong> el collar terminado y <strong>5</strong> el precio y el contacto.",
            "Con el plan en la mano sabes qué mostrar y en qué orden."
          ]
        },
        {
          titulo: "Preparar el lugar",
          pasos: [
            "Fija el teléfono <strong>arriba de la mesa, mirando hacia abajo</strong>, bien quieto, para que no se mueva ni se caiga. Sirve un trípode o un soporte, una pila de libros, una taza alta, una lámpara de brazo con una pinza firme o una caja.",
            "Ponlo <strong>vertical</strong>, como para TikTok o Instagram. Revisa que se vean tus manos y todos los materiales, con un poco de espacio libre en los bordes.",
            "Graba de día, junto a una ventana, con la luz <strong>de un lado</strong>, no de atrás. De noche, usa una lámpara de luz blanca.",
            "Pon una tela o un mantel liso, de un color que contraste con tus piezas, y quita de la mesa todo lo que no sea del trabajo.",
            "Haz una prueba corta y mira cómo se ve."
          ]
        },
        {
          titulo: "Grabar",
          pasos: [
            "Limpia el lente con un paño suave y activa <strong>No molestar</strong> para que no entren llamadas.",
            "Abre la cámara, revisa el encuadre, toca el círculo rojo y espera 3 segundos antes de empezar.",
            "Muévete despacio y muestra cada paso durante unos segundos. No pases la mano por delante del lente.",
            "Si hablas, hazlo claro y cerca del teléfono; si no, después le agregas texto."
          ]
        },
        {
          titulo: "Revisar y publicar",
          pasos: [
            "Mira el video completo: ¿se ve y se oye bien?",
            "Recorta lo que sobra al inicio y al final, por ejemplo en Edits, como en el <strong>módulo vi</strong>.",
            "Agrega un texto con el nombre del producto y el precio.",
            "Al publicar, escribe una descripción, tu contacto y 3 hashtags."
          ]
        }
      ],
      claves: [
        "Planea las 5 escenas antes de grabar.",
        "Teléfono quieto, arriba de la mesa, mirando hacia abajo.",
        "Luz de día desde un lado y fondo ordenado.",
        "Muestra cada paso con calma.",
        "Termina siempre con el precio y cómo contactarte."
      ],
      problemas: [
        { si: "Sale una sombra sobre el trabajo", haz: "Tu mano o el teléfono tapan la luz. Cambia la luz de lado: debe venir de un costado, no de atrás." },
        { si: "La imagen se ve borrosa", haz: "Limpia el lente con un paño suave." },
        { si: "No se ven todos los materiales", haz: "Sube o aleja el teléfono hasta que todo quepa, con un poco de espacio en los bordes." }
      ],
      dato: "Un solo video de proceso sirve para varias redes: lo puedes subir a TikTok, a Instagram y a tus estados de WhatsApp.",
      laminas: [
        { titulo: "Muestra cómo lo haces: el video del proceso", archivo: "modulo9-video-del-proceso.pdf", peso: "4.7 MB" }
      ]
    }
  },
  {
    num: "x",
    titulo: "Un segundo candado para tus redes: verificación en dos pasos",
    desc: "Activa la verificación en dos pasos en Instagram y TikTok con Google Authenticator, para que nadie más entre a tu cuenta.",
    temas: ["Seguridad", "Google Authenticator", "Instagram", "TikTok"],
    esNuevo: false,
    contenido: {
      resumen: "Tu contraseña es la llave de tu cuenta, pero una llave se puede robar, adivinar o filtrar. La verificación en dos pasos le pone un segundo candado: además de la contraseña, para entrar hace falta un código de 6 números que aparece en tu teléfono. Así evitas que alguien pida dinero a tu familia en tu nombre o que pierdas tus fotos y tus contactos. En esta clase la activamos en Instagram y TikTok con la app Google Authenticator.",
      conceptosTitulo: "Lo que hay que saber",
      conceptos: [
        "<strong>La llave y el cerrojo</strong>: la llave es tu contraseña de siempre; el cerrojo, un código que aparece en tu teléfono. Para entrar se necesitan las dos.",
        "<strong>Por qué ya no basta la contraseña</strong>: alguien la ve o te la pide (robada), es fácil, como 123456 (adivinada), o se escapa de una página atacada (filtrada).",
        "<strong>Phishing</strong>: un mensaje trampa que imita a Instagram, a TikTok o al banco para pedirte la contraseña.",
        "<strong>Por qué una app y no un SMS</strong>: funciona sin señal de teléfono, el código cambia cada 30 segundos y es más difícil de robar.",
        "<strong>Códigos de respaldo</strong>: las llaves de repuesto de tu cuenta, por si pierdes el teléfono."
      ],
      actividades: [
        {
          titulo: "Instalar Google Authenticator",
          pasos: [
            "Abre <strong>Play Store</strong> (en iPhone, <strong>App Store</strong>), busca <em>Google Authenticator</em> y toca <strong>Instalar</strong> (u <strong>Obtener</strong>).",
            "Ábrela y toca <strong>Comenzar</strong>.",
            "Entra con tu cuenta de Google: así se guarda una copia de tus códigos. Si no tienes, elige <strong>Usar sin una cuenta</strong>."
          ]
        },
        {
          titulo: "Activarlo en Instagram",
          pasos: [
            "Toca tu foto, abajo a la derecha, y luego las <strong>tres rayas ☰</strong>, arriba a la derecha.",
            "Toca <strong>Centro de cuentas</strong> (está arriba, en un recuadro) y luego <strong>Contraseña y seguridad</strong>.",
            "Toca <strong>Autenticación en dos pasos</strong> y elige tu cuenta de Instagram.",
            "Elige <strong>App de autenticación</strong>, la recomendada, y toca <strong>Siguiente</strong>.",
            "Toca <strong>Copiar clave</strong>. Así no tienes que escribirla.",
            "Abre Google Authenticator, toca <strong>+</strong> y elige <strong>Ingresar una clave de configuración</strong>. Escribe <em>Instagram</em>, pega la clave y toca <strong>Agregar</strong>.",
            "Vuelve a Instagram y escribe los 6 números que muestra Authenticator.",
            "Copia en papel los <strong>códigos de respaldo</strong> y guárdalos en un lugar seguro. Toca <strong>Listo</strong>: tu Instagram ya tiene segundo candado."
          ]
        },
        {
          titulo: "Activarlo en TikTok",
          pasos: [
            "Toca <strong>Perfil</strong>, abajo a la derecha, luego las <strong>tres rayas ☰</strong> y <strong>Ajustes y privacidad</strong>.",
            "Toca <strong>Seguridad</strong> y luego <strong>Verificación en dos pasos</strong>.",
            "Marca <strong>App de autenticación</strong> y una más (SMS o correo) y toca <strong>Activar</strong>.",
            "Toca <strong>Copiar</strong> y pega la clave en Authenticator igual que con Instagram: <strong>+ → Ingresar una clave</strong>, y escribe <em>TikTok</em>.",
            "Vuelve a TikTok, escribe los 6 números y confirma. ¡Listo!"
          ]
        },
        {
          titulo: "Entrar con el segundo candado",
          pasos: [
            "Escribe tu contraseña, como siempre.",
            "Abre Google Authenticator y mira los 6 números de esa cuenta.",
            "Escríbelos antes de que cambien."
          ]
        }
      ],
      claves: [
        "Tu código es solo tuyo: <strong>nunca</strong> se lo des a nadie.",
        "Ninguna empresa te va a llamar para pedírtelo. Si alguien te lo pide, es una trampa.",
        "Escribe los códigos de respaldo a mano, en papel, guárdalos con tus documentos importantes y no se los des a nadie.",
        "Los pasos son iguales en Android y en iPhone.",
        "¿Dudas? Pregúntale a un familiar de confianza."
      ],
      problemas: [
        { si: "El número cambió antes de escribirlo", haz: "Escribe el nuevo. Cambia cada 30 segundos y no pasa nada." },
        { si: "No veo Centro de cuentas en Instagram", haz: "Desliza el dedo hacia arriba en el menú: está en un recuadro." },
        { si: "En TikTok no dice Seguridad", haz: "En algunos teléfonos dice <strong>Seguridad y permisos</strong>." },
        { si: "La app pide permiso para la cámara", haz: "En Android, toca <strong>Mientras se usa la app</strong>; en iPhone, <strong>Permitir</strong>." },
        { si: "Perdí el teléfono", haz: "Entra con un código de respaldo, instala Google Authenticator en el teléfono nuevo y activa otra vez el segundo candado. Si entraste a Authenticator con Google, los códigos vuelven solos." }
      ],
      dato: "Casi siempre el código solo se pide cuando entras desde un teléfono nuevo. En el día a día, tu cuenta abre como siempre, pero un ladrón con tu contraseña se queda en la puerta.",
      laminas: [
        { titulo: "Proteja sus redes con un segundo candado", archivo: "modulo10-verificacion-en-dos-pasos.pdf", peso: "6.6 MB" }
      ]
    }
  }
];
