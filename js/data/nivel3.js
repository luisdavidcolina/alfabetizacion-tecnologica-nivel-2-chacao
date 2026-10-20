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
  }
];
