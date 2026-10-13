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
  }
];
