/* ============================================================
   TESTS INTERACTIVOS — 4 niveles, 50 preguntas totales
   ============================================================ */

const TESTS = {

  basico: {
    titulo: "Test Básico · Lo Esencial",
    emoji: "🌱",
    desc: "5 preguntas · ~3 min",
    preguntas: [
      {
        q: "¿Qué hace el atajo Ctrl + S?",
        opciones: ["Cerrar el programa", "Guardar el documento", "Imprimir la página", "Buscar en internet"],
        correcta: 1,
        explicacion: "Ctrl + S guarda el documento. Es el atajo más importante que existe. Úsalo cada pocos minutos para no perder tu trabajo si se va la luz."
      },
      {
        q: "Si alguien te pide tu código de verificación por mensaje, ¿qué haces?",
        opciones: ["Se lo doy si dice ser del banco", "NUNCA lo comparto con nadie", "Solo lo doy a familiares cercanos", "Lo doy solo si es urgente"],
        correcta: 1,
        explicacion: "NUNCA, bajo ninguna circunstancia. Los códigos de verificación son la llave de tus cuentas. Ni el banco, ni soporte técnico, ni familiares deben pedírtelo. Si lo hacen: es estafa."
      },
      {
        q: "Para abrir un programa con un ícono en el escritorio, generalmente hago:",
        opciones: ["Un clic izquierdo", "Doble clic izquierdo", "Clic derecho", "Mantener presionado"],
        correcta: 1,
        explicacion: "Doble clic izquierdo abre programas y archivos. Un clic solo los selecciona (los resalta). El clic derecho muestra un menú de opciones como copiar, eliminar o propiedades."
      },
      {
        q: "¿Cuál de estas es una buena contraseña?",
        opciones: ["12345678", "Mi nombre y apellido", "MiPerro2024!", "La misma que uso en todo"],
        correcta: 2,
        explicacion: "Una buena contraseña tiene mínimo 8 caracteres, combina letras (mayúsculas y minúsculas), números y símbolos. Una frase fácil de recordar para ti pero difícil de adivinar es ideal."
      },
      {
        q: "Si tu computadora va lenta, lo primero que pruebas es:",
        opciones: ["Comprar una computadora nueva", "Reiniciarla", "Llamar a un técnico de inmediato", "Borrar Windows"],
        correcta: 1,
        explicacion: "El 'reinicio sagrado' funciona en el 90% de los casos. Apaga, espera 10 segundos, enciende. Esto libera memoria, cierra procesos colgados y resuelve la mayoría de los problemas."
      }
    ]
  },

  intermedio: {
    titulo: "Test Intermedio · Ya tienes experiencia",
    emoji: "🚀",
    desc: "10 preguntas · ~6 min",
    preguntas: [
      {
        q: "En Excel, una fórmula SIEMPRE empieza con:",
        opciones: ["@", "=", "+", "#"],
        correcta: 1,
        explicacion: "Todas las fórmulas en Excel empiezan con el signo igual (=). Por ejemplo: =A1+B1 suma esas dos celdas. Sin el '=', Excel lo trata como texto simple, no como cálculo."
      },
      {
        q: "¿Qué hace el modo incógnito en el navegador?",
        opciones: ["Te hace invisible en internet", "Borra historial de TU computadora al cerrar", "Te protege de virus", "Esconde tu IP del gobierno"],
        correcta: 1,
        explicacion: "El modo incógnito NO te hace invisible: tu proveedor de internet, el banco y el gobierno siguen viendo tu actividad. Solo borra el historial local de tu computador al cerrar."
      },
      {
        q: "¿Qué es el 'phishing'?",
        opciones: ["Un tipo de pescado digital", "Páginas falsas que imitan sitios reales para robar datos", "Un programa para descargar música", "Una red social"],
        correcta: 1,
        explicacion: "Phishing es crear páginas web que imitan a las reales (bancos, Instagram, etc.) para que tú escribas tus datos pensando que es el sitio oficial. Por eso siempre revisa la dirección y el candadito."
      },
      {
        q: "El WiFi 5 GHz, comparado con el 2.4 GHz:",
        opciones: ["Es más lento pero llega lejos", "Es más rápido pero de corto alcance", "Son exactamente iguales", "Solo funciona de noche"],
        correcta: 1,
        explicacion: "5 GHz = rápido pero corto alcance, ideal cerca del router. 2.4 GHz = más lento pero llega lejos, atraviesa paredes, ideal para habitaciones distantes."
      },
      {
        q: "¿Qué es un archivo ZIP?",
        opciones: ["Un archivo de música", "Una carpeta comprimida en un solo archivo más liviano", "Un tipo de virus", "Una imagen"],
        correcta: 1,
        explicacion: "Un ZIP es varios archivos empaquetados en uno solo más liviano. Útil para enviar muchos archivos por correo. Para abrirlo: clic derecho → 'Extraer todo'."
      },
      {
        q: "Para enviar una foto adjunta en un correo electrónico, uso:",
        opciones: ["Escribo la dirección de la foto", "Pego la foto en el cuerpo del correo", "El ícono del clip (📎) para adjuntar", "Mando la foto por WhatsApp en cambio"],
        correcta: 2,
        explicacion: "El ícono del clip (📎) es para adjuntar archivos al correo. Lo encuentras cerca del botón de enviar. Pulsa, elige el archivo de tu computadora y se adjunta al mensaje."
      },
      {
        q: "Si una página web te dice que ganaste un iPhone gratis:",
        opciones: ["Doy clic para reclamarlo de inmediato", "Cierro la página: es estafa", "Mando mis datos para recibir el premio", "Llamo al número que aparece en la página"],
        correcta: 1,
        explicacion: "NADIE regala iPhones ni autos por solo entrar a una página. Es una técnica clásica para robar datos o instalar virus. Cierra la página y listo."
      },
      {
        q: "¿Qué hace el atajo Ctrl + Z?",
        opciones: ["Cierra el programa", "Deshace la última acción", "Selecciona todo el texto", "Abre Google Chrome"],
        correcta: 1,
        explicacion: "Ctrl + Z deshace la última acción. Si borraste algo sin querer, presiona Ctrl + Z y vuelve. Funciona en casi todos los programas: Word, Excel, Paint, navegadores..."
      },
      {
        q: "Para hacer copia de seguridad de las fotos del celular, lo mejor es:",
        opciones: ["Imprimirlas todas cada mes", "Usar Google Fotos o iCloud para guardarlas en la nube", "Mandarlas por WhatsApp a mí mismo", "Confiar en que el celular no se romperá"],
        correcta: 1,
        explicacion: "Google Fotos (Android) o iCloud (iPhone) suben tus fotos automáticamente. Si pierdes o dañas el celular, todas tus fotos quedan seguras y accesibles desde cualquier dispositivo."
      },
      {
        q: "¿Qué significa el candadito 🔒 en la barra del navegador?",
        opciones: ["Que la página es muy lenta", "Que la comunicación está cifrada y es segura", "Que la página es de Estados Unidos", "Que es una página de Google"],
        correcta: 1,
        explicacion: "El candadito (HTTPS) significa que la comunicación entre tu navegador y el sitio está cifrada. Nadie puede 'espiar' lo que envías. Es crítico en sitios de banco y compras."
      }
    ]
  },

  experto: {
    titulo: "Test Experto · Para los avanzados",
    emoji: "🏆",
    desc: "10 preguntas · ~8 min",
    preguntas: [
      {
        q: "¿Qué es un 'prompt' en Inteligencia Artificial?",
        opciones: ["Una solicitud urgente al servidor", "La instrucción que le das a la IA para que responda", "Un tipo de error del sistema", "Una contraseña especial"],
        correcta: 1,
        explicacion: "Un prompt es la instrucción o pregunta que escribes para que la IA te responda. La calidad de la respuesta depende directamente de qué tan claro y específico sea tu prompt."
      },
      {
        q: "El 'derecho al olvido' permite:",
        opciones: ["Olvidar tu contraseña sin perder la cuenta", "Solicitar que se borren enlaces sobre ti en buscadores como Google", "Borrar el historial automáticamente", "Que la IA olvide tu conversación"],
        correcta: 1,
        explicacion: "El derecho al olvido permite solicitar a los buscadores que eliminen enlaces a información obsoleta, incorrecta o irrelevante sobre ti. No borra la página original, solo evita que aparezca al buscarte."
      },
      {
        q: "PayPal protege tus compras porque:",
        opciones: ["Tiene un seguro contra todo tipo de fraude", "El vendedor NUNCA ve tu número de tarjeta", "Es completamente gratuito para el vendedor", "Está disponible en todos los países"],
        correcta: 1,
        explicacion: "PayPal funciona como intermediario: tú pagas a PayPal, y PayPal paga al vendedor. El vendedor nunca ve tu número de tarjeta. Además, PayPal media en disputas si el producto no llega."
      },
      {
        q: "Una 'huella digital activa' es:",
        opciones: ["Tu huella dactilar registrada en el celular", "Lo que compartes voluntariamente en internet (fotos, comentarios)", "Un tipo de virus que rastrea tus movimientos", "Una técnica de hackeo"],
        correcta: 1,
        explicacion: "La huella activa es todo lo que publicas conscientemente: fotos en Facebook, comentarios, reseñas. La huella PASIVA es lo que dejas sin saber: páginas visitadas, ubicación, búsquedas."
      },
      {
        q: "Internet de las Cosas (IoT) se refiere a:",
        opciones: ["Cosas inventadas o rumores en internet", "Objetos cotidianos conectados a internet (neveras, bombillos, relojes)", "El metaverso y la realidad virtual", "Aplicaciones móviles de última generación"],
        correcta: 1,
        explicacion: "IoT son objetos comunes — bombillos, neveras, termostatos, relojes — que se conectan a internet y pueden controlarse remotamente. Mejoran la comodidad pero requieren configuración segura."
      },
      {
        q: "WPA2 y WPA3 son:",
        opciones: ["Tipos de virus informáticos", "Protocolos de seguridad para redes WiFi", "Empresas proveedoras de internet", "Marcas de router"],
        correcta: 1,
        explicacion: "WPA2 y WPA3 son los estándares de seguridad para WiFi. Indican que la comunicación está cifrada. WPA3 es el más moderno y seguro. Evita WEP que es muy vulnerable."
      },
      {
        q: "Para que una IA te responda mejor, lo más efectivo es:",
        opciones: ["Escribir en MAYÚSCULAS para que entienda la urgencia", "Dar contexto, detalles específicos y el formato que esperas", "Repetir la misma pregunta varias veces", "Usar solo términos técnicos en inglés"],
        correcta: 1,
        explicacion: "El prompt ideal tiene: contexto sobre ti o la situación, qué necesitas exactamente, detalles relevantes y el formato esperado. 'Actúa como médico y explícame en palabras simples qué es la diabetes' es un buen ejemplo."
      },
      {
        q: "Las cookies en internet son:",
        opciones: ["Un tipo de galleta digital muy peligrosa", "Archivos pequeños que recuerdan tu actividad en sitios web", "Un tipo de virus que roba contraseñas", "Herramientas de pago en línea"],
        correcta: 1,
        explicacion: "Las cookies son archivos diminutos que los sitios guardan para 'recordarte'. Algunas son necesarias (para que permanezcas logueado), otras solo sirven para mostrarte publicidad personalizada."
      },
      {
        q: "Si tu cuenta de WhatsApp fue tomada por alguien, lo primero que debes hacer es:",
        opciones: ["Comprar un número de teléfono nuevo", "Desinstalar y reinstalar WhatsApp, verificar con SMS a tu número", "Esperar que el atacante abandone la cuenta", "Formatear el celular completamente"],
        correcta: 1,
        explicacion: "Desinstala WhatsApp, vuelve a instalarlo y verifica con SMS a tu número. Eso expulsa al intruso automáticamente. Después activa verificación en dos pasos para que no vuelva a pasar."
      },
      {
        q: "¿Qué diferencia hay entre un 'virus' y un 'gusano' informático?",
        opciones: ["Son exactamente lo mismo", "El gusano se propaga solo por la red; el virus necesita que abras un archivo infectado", "El virus es más peligroso que el gusano", "El gusano solo afecta celulares"],
        correcta: 1,
        explicacion: "El virus clásico se pega a un archivo y necesita que lo abras para activarse. El gusano (worm) se propaga SOLO por la red sin necesitar tu intervención — por eso es mucho más rápido y peligroso."
      }
    ]
  },

  avanzado: {
    titulo: "Test Avanzado · Nuevos Temas",
    emoji: "⭐",
    desc: "15 preguntas · ~10 min",
    preguntas: [
      {
        q: "¿Qué porcentaje del tráfico total de internet está generado por bots?",
        opciones: ["12%", "28%", "47%", "63%"],
        correcta: 2,
        explicacion: "El 47% de todo el tráfico de internet es generado por bots automatizados. De ese 47%, el 32% son bots maliciosos. El tráfico de bots malos ha crecido un 5% anual durante la última década."
      },
      {
        q: "¿Cómo se llamó el primer virus informático de la historia (1971)?",
        opciones: ["El Destructor", "Creeper", "Stuxnet", "WannaCry"],
        correcta: 1,
        explicacion: "'Creeper' (1971) fue el primer virus. No destruía nada; solo mostraba el mensaje '¡Soy el enredadera, atrápame si puedes!' Fue creado como experimento para ver si un programa podía moverse entre computadoras."
      },
      {
        q: "Ante un ataque de ransomware, ¿cuál es la regla de oro?",
        opciones: ["Pagar rápido para recuperar los archivos", "NUNCA pagar: no hay garantía de recuperar nada", "Llamar a la policía antes de cualquier acción", "Desconectar internet y esperar"],
        correcta: 1,
        explicacion: "NUNCA pagues el rescate. No hay garantía de que los criminales devuelvan el acceso después de cobrar. Lo mejor: disconnectar el equipo de internet, llamar a un técnico y reportar a autoridades."
      },
      {
        q: "¿Qué es la 'huella digital pasiva'?",
        opciones: ["Tu huella dactilar registrada en el celular", "La información que dejas sin darte cuenta: ubicación, búsquedas, páginas visitadas", "Los datos que publicas conscientemente en redes sociales", "Una técnica avanzada de hackeo"],
        correcta: 1,
        explicacion: "La huella pasiva es la información que generas sin saber: páginas que visitas, tu ubicación GPS, búsquedas en Google, contenidos que consumes. Contrasta con la huella activa que es lo que publicas conscientemente."
      },
      {
        q: "¿Cuántos días de protección ofrece PayPal al comprador?",
        opciones: ["30 días", "90 días", "180 días", "365 días"],
        correcta: 2,
        explicacion: "PayPal ofrece 180 días de protección al comprador — más de 5 meses. Durante ese tiempo puedes reclamar si el producto no llegó o era significativamente diferente a lo descrito."
      },
      {
        q: "¿Cuántas toneladas de basura electrónica se generan en el mundo cada año?",
        opciones: ["12 millones", "35 millones", "62 millones", "100 millones"],
        correcta: 2,
        explicacion: "62 millones de toneladas anuales de e-waste. Solo el 22% se recicla formalmente. El resto va a rellenos sanitarios o se exporta a países en desarrollo, contaminando suelos y aguas con metales pesados."
      },
      {
        q: "El Cartel Phoebus (1924) es importante porque:",
        opciones: ["Inventó el internet comercial", "Redujo intencionalmente la vida de los bombillos para vender más", "Creó el primer antivirus", "Fundó la primera red social"],
        correcta: 1,
        explicacion: "En 1924, los principales fabricantes de bombillos se pusieron de acuerdo para reducir la duración de sus productos de 2.500 a 1.000 horas. Es el primer caso documentado de obsolescencia programada en la historia."
      },
      {
        q: "¿Cómo se identifica un anuncio pagado en los resultados de Google?",
        opciones: ["Aparece en la parte inferior de la página", "Está marcado con la etiqueta 'Patrocinado' o 'Anuncio'", "Tiene letras más grandes que los otros resultados", "Siempre tiene fondo de color"],
        correcta: 1,
        explicacion: "Los anuncios en Google están marcados con la etiqueta 'Patrocinado' o 'Anuncio' cerca del título. Suelen aparecer en los primeros resultados. Los resultados orgánicos no tienen esa etiqueta."
      },
      {
        q: "El 'derecho al olvido' te permite solicitar:",
        opciones: ["Borrar tus datos de las redes sociales automáticamente", "Que los buscadores eliminen enlaces a información tuya obsoleta o irrelevante", "Que la IA olvide tus conversaciones pasadas", "Cancelar tu historial bancario digital"],
        correcta: 1,
        explicacion: "El derecho al olvido (vigente en la UE y varios países) permite pedir a Google, Bing u otros buscadores que eliminen enlaces a información sobre ti que sea obsoleta, irrelevante o incorrecta. No borra la página original."
      },
      {
        q: "¿Qué hace un bot 'scalper' en el comercio electrónico?",
        opciones: ["Ayuda a encontrar los mejores precios automáticamente", "Compra masivamente productos al lanzamiento para revenderlos más caros", "Escribe reseñas positivas para mejorar tu reputación", "Protege tu tarjeta de compras fraudulentas"],
        correcta: 1,
        explicacion: "Los bots scalpers compran automáticamente grandes cantidades de productos en segundos de su lanzamiento (consolas, zapatillas, entradas), causando escasez artificial y vendiendo después a precios inflados."
      },
      {
        q: "¿Qué porcentaje de la basura electrónica mundial se recicla formalmente?",
        opciones: ["5%", "22%", "48%", "67%"],
        correcta: 1,
        explicacion: "Solo el 22% de los 62 millones de toneladas anuales de e-waste se recicla formalmente. El 78% restante contamina el medio ambiente con metales pesados como plomo, mercurio y cadmio."
      },
      {
        q: "¿Cuál es una señal de que una reseña en línea puede ser falsa (astroturfing)?",
        opciones: ["Está escrita en español", "Muchas reseñas de 5 estrellas escritas el mismo día con lenguaje repetitivo", "La reseña menciona aspectos negativos del producto", "El revisor tiene foto de perfil"],
        correcta: 1,
        explicacion: "El astroturfing usa bots o personas pagadas. Las señales: muchas reseñas 5 estrellas el mismo día, lenguaje genérico y repetitivo, cuentas sin historial previo. Las reseñas honestas de 4 estrellas suelen ser las más confiables."
      },
      {
        q: "¿Qué hace el spyware en tu computadora?",
        opciones: ["Acelera la velocidad de internet", "Registra en secreto tus contraseñas y datos bancarios y los envía al atacante", "Llena la pantalla de publicidad molesta", "Bloquea tus archivos para pedir rescate"],
        correcta: 1,
        explicacion: "El spyware espía silenciosamente: registra cada tecla que presionas, captura contraseñas, datos bancarios y números de tarjeta, y los envía al atacante sin que notes nada raro."
      },
      {
        q: "Los 3 tipos de obsolescencia programada son:",
        opciones: ["Digital, analógica y mixta", "Funcional, de software y psicológica", "Rápida, lenta y gradual", "De hardware, software y diseño"],
        correcta: 1,
        explicacion: "1) Funcional: piezas diseñadas para romperse. 2) Software: actualizaciones que hacen lento el aparato antiguo. 3) Psicológica: publicidad que te hace sentir que tu aparato está pasado de moda aunque funcione bien."
      },
      {
        q: "¿Qué app gratuita y segura recomienda el curso para limpiar el almacenamiento del celular?",
        opciones: ["Clean Master", "Files by Google", "CCleaner", "Storage Cleaner Pro"],
        correcta: 1,
        explicacion: "Files by Google es gratuita, segura, sin publicidad engañosa. Detecta fotos duplicadas, archivos grandes, junk de WhatsApp y basura del sistema con un solo botón. Es la recomendación del programa."
      }
    ]
  }
};
