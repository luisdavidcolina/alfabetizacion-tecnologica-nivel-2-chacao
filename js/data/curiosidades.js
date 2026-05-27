/* ============================================================
   DATOS CURIOSOS — estadísticas reales de los PDFs del curso
   ============================================================ */

const CURIOSIDADES = [
  {
    icon: "🤖",
    stat: "47%",
    texto: "del tráfico de internet es generado por bots automatizados. ¡Casi la mitad de todo lo que circula en internet no es humano!",
    fuente: "Imperva Bot Report 2024",
    tema: "bots",
    temaLabel: "Bots"
  },
  {
    icon: "😈",
    stat: "32%",
    texto: "de ese tráfico de bots es malicioso: apunta a sistemas bancarios, redes sociales y plataformas de compras. Y ha crecido un 5% anual en la última década.",
    fuente: "Revolución de los Bots",
    tema: "bots",
    temaLabel: "Bots"
  },
  {
    icon: "🗑️",
    stat: "62M",
    texto: "toneladas de basura electrónica se generan en el mundo cada año. Solo el 22% se recicla formalmente. El resto contamina suelos y aguas.",
    fuente: "ONU — Informe Global de E-waste",
    tema: "obsolescencia",
    temaLabel: "Obsolescencia"
  },
  {
    icon: "💡",
    stat: "1924",
    texto: "El Cartel Phoebus: grandes fabricantes de bombillos se unieron secretamente para reducir su vida útil de 2.500 horas a solo 1.000, para vender más. Es el primer caso documentado de obsolescencia programada.",
    fuente: "Historia de la Obsolescencia Programada",
    tema: "obsolescencia",
    temaLabel: "Obsolescencia"
  },
  {
    icon: "📱",
    stat: "80%",
    texto: "de la 'basura digital' en los celulares viene de WhatsApp: videos de 'buenos días', memes y fotos que se guardan automáticamente sin que lo notes.",
    fuente: "Guía de Limpieza del Celular",
    tema: "celular",
    temaLabel: "Celular"
  },
  {
    icon: "🐛",
    stat: "1971",
    texto: "El primer virus informático se llamó 'Creeper'. No destruía nada: solo mostraba el mensaje '¡Atrápame si puedes!' para demostrar que un programa podía moverse entre computadoras.",
    fuente: "Historia de los Virus Informáticos",
    tema: "seguridad",
    temaLabel: "Seguridad"
  },
  {
    icon: "🛡️",
    stat: "180",
    texto: "días de protección te da PayPal cuando algo sale mal en una compra. Más de 5 meses para reclamar si el producto no llegó o era diferente a lo descrito.",
    fuente: "E-commerce Seguro",
    tema: "compras",
    temaLabel: "Compras"
  },
  {
    icon: "🔄",
    stat: "90%",
    texto: "de los problemas comunes de WiFi se resuelven con el 'Reinicio Sagrado': apagar el router, esperar 10 segundos y volver a encenderlo. Solo toma 3 minutos.",
    fuente: "WiFi en Casa",
    tema: "internet",
    temaLabel: "Internet"
  },
  {
    icon: "♾️",
    stat: "∞",
    texto: "Una foto publicada en internet puede quedarse ahí para siempre. El 'derecho al olvido' existe — pero no es automático. Hay que pedirlo formalmente al buscador.",
    fuente: "Huella Digital y Derecho al Olvido",
    tema: "privacidad",
    temaLabel: "Privacidad"
  },
  {
    icon: "🎮",
    stat: "PS5",
    texto: "Al lanzamiento de la PlayStation 5, bots 'scalpers' compraron masivamente los consolas antes de que los humanos pudieran hacerlo, causando escasez artificial y precios hasta 3 veces más altos.",
    fuente: "Revolución de los Bots",
    tema: "bots",
    temaLabel: "Bots"
  },
  {
    icon: "🔐",
    stat: "2FA",
    texto: "Con la verificación en dos pasos activada, aunque alguien conozca tu contraseña, AÚN no puede entrar a tu cuenta sin el código que llega a tu celular. Es la protección más efectiva.",
    fuente: "Gestión de Contraseñas",
    tema: "seguridad",
    temaLabel: "Seguridad"
  },
  {
    icon: "♻️",
    stat: "10",
    texto: "años. En Europa, nuevas leyes del 'Derecho a Reparar' obligan a los fabricantes a ofrecer repuestos disponibles por 10 años. Un gran paso contra la obsolescencia programada.",
    fuente: "Obsolescencia Programada",
    tema: "obsolescencia",
    temaLabel: "Obsolescencia"
  }
];

/* ============================================================
   VERDAD O MITO — juego de tarjetas flip
   ============================================================ */

const VERDAD_O_MITO = [
  {
    afirmacion: "El modo incógnito me hace completamente invisible en internet.",
    esVerdad: false,
    explicacion: "MITO. El modo incógnito solo borra el historial en TU computadora. Tu proveedor de internet, el banco, el gobierno y los sitios que visitas todavía te ven perfectamente."
  },
  {
    afirmacion: "Apagar y encender el router resuelve el 90% de los problemas comunes de WiFi.",
    esVerdad: true,
    explicacion: "VERDAD. El 'Reinicio Sagrado' libera memoria del router y cierra conexiones colgadas. Solo necesitas 10 segundos de espera y resuelve la gran mayoría de los problemas."
  },
  {
    afirmacion: "Puedo usar la misma contraseña en todos mis sitios si es muy larga y segura.",
    esVerdad: false,
    explicacion: "MITO. Si ese sitio tiene una fuga de datos, el atacante tendrá acceso a TODAS tus cuentas de una vez. Cada cuenta importante merece su propia contraseña."
  },
  {
    afirmacion: "Los bancos nunca te pedirán tu clave o código de verificación por teléfono o mensaje.",
    esVerdad: true,
    explicacion: "VERDAD. Si alguien te llama diciendo ser tu banco y te pide tu clave o código: es estafa. Los bancos reales nunca piden eso. Cuelga y llama tú al número del dorso de tu tarjeta."
  },
  {
    afirmacion: "El Cartel Phoebus (1924) redujo la duración de los bombillos a propósito para vender más.",
    esVerdad: true,
    explicacion: "VERDAD. En 1924, los principales fabricantes de bombillos se unieron secretamente para reducir la vida útil de sus productos de 2.500 a 1.000 horas. Es el primer caso documentado de obsolescencia programada."
  },
  {
    afirmacion: "El primer virus informático de la historia destruyó datos y causó grandes daños.",
    esVerdad: false,
    explicacion: "MITO. El primer virus se llamó 'Creeper' (1971) y no destruía nada. Solo mostraba el mensaje: '¡Soy el enredadera, atrápame si puedes!' — fue creado como experimento académico."
  },
  {
    afirmacion: "Las cookies que los sitios web guardan en mi computadora son un tipo de virus.",
    esVerdad: false,
    explicacion: "MITO. Las cookies son archivos diminutos e inofensivos que recuerdan tu actividad: que estabas logueado, qué pusiste en el carrito, tus preferencias. No dañan tu equipo."
  },
  {
    afirmacion: "PayPal protege mis compras en línea por 180 días si algo sale mal.",
    esVerdad: true,
    explicacion: "VERDAD. PayPal tiene un programa de protección al comprador de 180 días. Si el producto no llega o es muy diferente a lo descrito, puedes reclamar y obtener reembolso."
  },
  {
    afirmacion: "Todos los bots en internet son maliciosos y deberían eliminarse.",
    esVerdad: false,
    explicacion: "MITO. Solo el 32% son bots maliciosos. El otro 15% son bots útiles: Googlebot indexa páginas para que aparezcas en búsquedas, chatbots responden preguntas 24/7, y otros monitorean precios o envían alertas."
  },
  {
    afirmacion: "Puedo darle mis contraseñas a ChatGPT para que me ayude mejor con mis cuentas.",
    esVerdad: false,
    explicacion: "MITO. NUNCA le des contraseñas, cédula, datos bancarios ni información muy personal a ninguna IA. Aunque parezca privado, lo que escribes puede usarse para entrenar el sistema y acceder terceros."
  }
];
