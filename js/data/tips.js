/* ============================================================
   TIPS PRÁCTICOS — 30 consejos para la vida digital
   ============================================================ */

const TIPS = [
  { cat: "seguridad", emoji: "🔒", titulo: "Tu contraseña es como tu cepillo de dientes", texto: "Cámbiala cada cierto tiempo y no la compartas con NADIE. Ni con tu banco, ni con soporte técnico, ni siquiera con familiares cercanos." },
  { cat: "seguridad", emoji: "📧", titulo: "Si crea miedo o urgencia, es estafa", texto: "Los bancos, gobierno y empresas serias NUNCA te van a pedir que actúes 'YA' por miedo. Cuando tengas duda, cuelga y llama tú al número oficial." },
  { cat: "seguridad", emoji: "🛡️", titulo: "El candadito del navegador importa", texto: "Si no hay 'https://' con el candadito 🔒, no metas tu tarjeta ahí. Es señal de que el sitio no tiene comunicación segura." },
  { cat: "seguridad", emoji: "🔐", titulo: "Activa la verificación en dos pasos", texto: "Aunque alguien sepa tu contraseña, sin el código que llega a tu celular no puede entrar. Es la protección más efectiva que existe hoy." },
  { cat: "seguridad", emoji: "🎁", titulo: "Nadie regala nada por internet", texto: "Si te dicen que ganaste algo sin haber participado: estafa. Punto. Ninguna empresa regala iPhones por entrar a una página." },
  { cat: "seguridad", emoji: "🆘", titulo: "Anota números de emergencia digitales", texto: "Bancos, soporte técnico, policía cibernética. Tenerlos en una libreta física es importante — si hackean tu celular, los necesitarás desde otro teléfono." },
  { cat: "internet", emoji: "🔄", titulo: "El reinicio sagrado siempre funciona", texto: "Si algo no funciona: apaga, espera 10 segundos, prende. Resuelve el 90% de los problemas de WiFi, celular y computadora." },
  { cat: "internet", emoji: "💡", titulo: "WiFi 2.4 GHz llega lejos, 5 GHz es más rápido", texto: "Si tu cuarto está lejos del router, usa el 2.4 GHz. Si estás al lado del router viendo videos, usa el 5 GHz. Tu celular puede cambiar automáticamente." },
  { cat: "internet", emoji: "🔍", titulo: "Aprende a buscar bien en Google", texto: "Usa palabras clave, no oraciones completas. 'Tiempo Caracas hoy' es mejor que '¿Cómo estará el clima en Caracas el día de hoy?'." },
  { cat: "internet", emoji: "📞", titulo: "Si tienes duda, llama tú directamente", texto: "No confíes en números que vienen en mensajes sospechosos. Busca el número oficial en la página de la institución o en el dorso de tu tarjeta." },
  { cat: "celular", emoji: "📱", titulo: "Apaga el celular una vez al día", texto: "Reiniciarlo limpia procesos en segundo plano y lo hace más rápido. También es buen descanso para la batería." },
  { cat: "celular", emoji: "🧹", titulo: "Limpia tu WhatsApp una vez al mes", texto: "Los memes y videos reenviados llenan tu memoria. Ve a Ajustes → Almacenamiento → Administrar para borrar los archivos más pesados." },
  { cat: "celular", emoji: "📸", titulo: "Haz backup de fotos en Google Fotos", texto: "Sube tus fotos a Google Fotos automáticamente. Si pierdes o rompes el celular, tus recuerdos siguen seguros en la nube." },
  { cat: "celular", emoji: "🔋", titulo: "No necesitas cargar el celular toda la noche", texto: "Las baterías modernas son inteligentes. Lo ideal es mantenerlo entre el 20% y el 80% de carga para prolongar su vida." },
  { cat: "celular", emoji: "👁️", titulo: "Revisa qué apps tienen tu ubicación", texto: "En el celular: Ajustes → Privacidad → Ubicación. Quita el permiso a las apps que no necesitan saber dónde estás." },
  { cat: "celular", emoji: "⚡", titulo: "Cierra programas que no usas", texto: "Si tu celular o computadora va lento, cierra las apps y pestañas abiertas. La memoria es como tu cabeza: si tiene demasiado, no rinde." },
  { cat: "digital", emoji: "💾", titulo: "Guarda, guarda y vuelve a guardar", texto: "Usa Ctrl+S cada pocos minutos cuando escribas algo importante. La luz se puede ir y se borra todo lo que no guardaste." },
  { cat: "digital", emoji: "🗂️", titulo: "Nombres claros para tus archivos", texto: "'Receta_arepas_2026.docx' es mucho mejor que 'Documento_nuevo_2_final_final_ESTE_SI.docx'. Tu yo futuro te lo agradecerá." },
  { cat: "digital", emoji: "📷", titulo: "Una foto en internet es para siempre", texto: "Antes de publicar algo, piensa si querrías que tu jefe o tu nieto lo vieran dentro de 10 años. El 'derecho al olvido' existe, pero hay que pedirlo formalmente." },
  { cat: "digital", emoji: "📅", titulo: "Programa de seguridad mensual", texto: "Un día al mes: cambia una contraseña, limpia WhatsApp, sube fotos a la nube, revisa apps instaladas. 15 minutos de mantenimiento evitan grandes problemas." },
  { cat: "ia", emoji: "🤖", titulo: "La IA es tu asistente, no tu jefe", texto: "Úsala para ayuda, pero verifica las respuestas importantes. La IA a veces 'inventa' información que suena muy convincente pero puede ser falsa." },
  { cat: "ia", emoji: "🎯", titulo: "Sé específico al pedirle algo a la IA", texto: "'Hazme una receta' da resultados genéricos. 'Dame una receta fácil de sopa para 2 personas con pollo, sin picante, en pasos numerados' da resultados excelentes." },
  { cat: "compras", emoji: "🛡️", titulo: "Usa PayPal cuando sea posible", texto: "PayPal actúa como intermediario — el vendedor nunca ve tu tarjeta. Además te protege por 180 días si algo sale mal." },
  { cat: "compras", emoji: "🚫", titulo: "Nunca pagues por transferencia a desconocidos", texto: "Si alguien en una venta online te pide pagar por transferencia a una cuenta personal: es estafa segura." },
  { cat: "compras", emoji: "💳", titulo: "Usa tarjetas virtuales para compras en línea", texto: "Muchos bancos ofrecen tarjetas virtuales con tope de monto. Úsalas para compras en sitios que no conoces bien." },
  { cat: "privacidad", emoji: "🌐", titulo: "Internet no olvida", texto: "Todo lo que publicas queda registrado. Existe el 'derecho al olvido' pero no es automático: hay que solicitarlo en el formulario oficial de cada buscador." },
  { cat: "privacidad", emoji: "📖", titulo: "Lee antes de aceptar en cosas importantes", texto: "Esos 'Términos y Condiciones' pueden contener cosas importantes. No los leas siempre, pero sí cuando registres datos bancarios o personales." },
  { cat: "privacidad", emoji: "⏰", titulo: "Pon un límite de tiempo en redes sociales", texto: "El celular tiene función de tiempo en pantalla. 1-2 horas diarias para redes sociales es suficiente. Tu bienestar lo agradecerá." },
  { cat: "aprendizaje", emoji: "👵", titulo: "Pregunta sin vergüenza", texto: "Nadie nació sabiendo tecnología. Preguntarle a un nieto, hijo o amigo es la forma más rápida de aprender — y ellos generalmente aman ayudar." },
  { cat: "aprendizaje", emoji: "🎓", titulo: "Practica todos los días, aunque sea 10 minutos", texto: "La tecnología se aprende usándola, no estudiándola. No hay que dedicarle horas, hay que tocarla diariamente. La confianza llega sola." }
];
