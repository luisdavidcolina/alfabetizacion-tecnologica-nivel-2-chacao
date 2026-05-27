# Alfabetización Tecnológica — Material Educativo Interactivo
## Programa de Servicio Comunitario · Facultad de Ciencias · UCV

---

### Presentación del trabajo

Este repositorio contiene el **material educativo digital final** del programa de **Alfabetización Tecnológica Nivel 2**, desarrollado como proyecto de Servicio Comunitario de la Escuela de Computación — Facultad de Ciencias, Universidad Central de Venezuela, en la **Dirección de Desarrollo y Apoyo Social de la Alcaldía de Chacao**.

El material toma como base las láminas y contenidos dictados a lo largo del programa y los transforma en una **aplicación web interactiva**, accesible y responsiva, pensada especialmente para el perfil del público atendido: adultos mayores que se acercan a la tecnología por primera vez o buscan reforzar sus conocimientos digitales.

**Elaborado por:** Luisdavid Colina y Victor Oestana
**Institución:** Escuela de Computación · Facultad de Ciencias · UCV
**Comunidad atendida:** Dirección de Desarrollo y Apoyo Social · Alcaldía de Chacao
**Edición:** 2026

---

### Objetivo

Proveer un recurso digital permanente, autocontenido y de libre acceso que permita a los participantes del programa — y a cualquier persona interesada — repasar, profundizar y evaluar los contenidos del curso de Alfabetización Tecnológica Nivel 2 de manera autónoma, amigable y sin barreras técnicas.

---

### Contenido del material

El material abarca **diecisiete módulos temáticos** que recorren el programa completo, desde el manejo básico del computador hasta conceptos avanzados de seguridad digital, inteligencia artificial y huella en internet. Además del temario, se incluyen los siguientes recursos complementarios:

- **Temario interactivo** — 17 módulos expandibles con resumen, conceptos clave y datos de interés, con seguimiento de progreso guardado localmente.
- **Datos Curiosos** — 12 estadísticas reales del mundo digital, filtrables por tema, para generar motivación y contexto.
- **Verdad o Mito** — juego de tarjetas interactivo para poner a prueba el conocimiento de forma lúdica.
- **Tips prácticos** — 30 recomendaciones concretas aplicables en la vida digital cotidiana, organizadas por categoría.
- **Preguntas Frecuentes** — 25 dudas comunes resueltas con claridad, con búsqueda y filtro por tema.
- **Test interactivo** — 4 niveles de evaluación (Básico, Intermedio, Experto y Avanzado) con retroalimentación inmediata en cada respuesta.
- **Glosario tecnológico** — 40 términos del mundo digital explicados en lenguaje sencillo, con búsqueda y filtro alfabético.
- **Láminas del curso** — acceso directo a los 12 documentos PDF originales utilizados en clases.
- **Cartel del programa** — pieza de divulgación visual disponible para consulta y descarga.

---

### Decisiones de diseño

El material fue concebido con **accesibilidad como prioridad**: control de tamaño de fuente, modo alto contraste, navegación por teclado, etiquetas ARIA y estructura semántica completa. El diseño responsivo garantiza su correcto funcionamiento en computadores de escritorio, tabletas y teléfonos móviles.

---

---

## Cómo ejecutar

Abrir con **VS Code Live Server** (clic derecho en `index.html` → "Open with Live Server") o cualquier servidor HTTP local. No funciona abriendo el archivo directamente con doble clic por restricciones de seguridad del navegador con archivos JS separados.

Alternativa rápida desde terminal:
```bash
python -m http.server 8080
# Luego abrir: http://localhost:8080
```

---

## Estructura de archivos

```
material-final/
├── index.html                      # Shell principal
├── README.md                       # Este archivo
├── css/
│   └── styles.css                  # Todos los estilos
├── js/
│   ├── data/
│   │   ├── modulos.js              # 17 módulos educativos
│   │   ├── tips.js                 # 30 tips prácticos
│   │   ├── faqs.js                 # 25 preguntas frecuentes
│   │   ├── tests.js                # 4 tests + juego Verdad o Mito
│   │   ├── curiosidades.js         # 12 datos curiosos con estadísticas
│   │   └── glosario.js             # 40 términos tecnológicos
│   └── app.js                      # Lógica: render, navegación, estado
├── laminas/                        # PDFs originales del curso (fuente)
└── Material_Educativo_Alfabetizacion_Tecnologica.html  # Versión anterior (backup)
```

---

## Secciones de la app

| Sección | Descripción |
|---|---|
| **Inicio** | Hero, estadísticas y accesos rápidos |
| **Temario** | 17 módulos expandibles con resumen, conceptos y puntos clave |
| **Curiosidades** | Datos sorprendentes + Juego Verdad o Mito |
| **Tips** | 30 recomendaciones prácticas para la vida digital |
| **Preguntas** | 25 FAQ con búsqueda y filtro por categoría |
| **Test** | 4 niveles de evaluación (Básico / Intermedio / Experto / Avanzado) |
| **Glosario** | 40 términos con búsqueda y filtro A-Z |

---

## Cobertura de contenido (PDFs → App)

| PDF fuente | Módulo(s) en la app | Sección adicional |
|---|---|---|
| Entendiendo el Modo Incógnito | VI - Navegando por internet | FAQ, Tips |
| Entendiendo el WiFi en Casa | VI - Navegando por internet | FAQ, Curiosidades |
| Guía de Limpieza Total del Celular | *(Nuevo)* Tips prácticos | Tips, Glosario |
| Huella Digital y Derecho al Olvido | XVII - Tu Huella Digital | FAQ (IA), Test Experto |
| Introducción al E-commerce Seguro | XII - Comercio Electrónico | FAQ, Test Avanzado |
| La Internet de las Cosas (IoT) | XI - El Hogar Inteligente | Test Experto |
| La Revolución de los Bots | XIV - La Revolución de los Bots | Curiosidades, Test Avanzado |
| Módulo 1 Nivel 2 (Office) | I-IV - Word, Excel, PowerPoint | FAQ |
| NIVEL 2 CLASES (Contraseñas + IA) | VII, X - Contraseñas + IA | FAQ, Test |
| Obsolescencia Programada | XV - Obsolescencia Programada | Curiosidades, Test Avanzado |
| Publicidad Digital | XVI - Publicidad Digital | FAQ, Test Avanzado |
| Todo sobre Virus Informáticos | XIII - Virus Informáticos | Curiosidades, Test |

---

## Características de accesibilidad

- Control de tamaño de fuente (A− / A+) guardado en localStorage
- Modo alto contraste activable desde el header
- ARIA labels en todos los elementos interactivos
- Focus visible para navegación por teclado
- Estructura semántica con roles (`role`, `aria-expanded`, `aria-live`)
- Sin información transmitida solo por color
- Texto escalable hasta 150% sin pérdida de funcionalidad

---

## Registro de trabajo

### v2.0 — Mayo 2026 (versión actual)
- [x] Crear nueva estructura multi-archivo (index + css + js separados)
- [x] Añadir 5 módulos nuevos: Virus, Bots, Obsolescencia, Publicidad, Huella Digital
- [x] Enriquecer módulos existentes con datos reales de los PDFs
- [x] Crear sección "Datos Curiosos" con 12 estadísticas impactantes filtradas por tema
- [x] Crear juego "Verdad o Mito" con 10 tarjetas flip interactivas
- [x] Crear Glosario con 40 términos, búsqueda y filtro A-Z
- [x] Añadir 4to nivel de test "Avanzado" (15 preguntas sobre nuevos módulos)
- [x] Implementar control de tamaño de fuente (A− / A+) con localStorage
- [x] Implementar modo alto contraste con localStorage
- [x] Implementar tracking de progreso por módulo con barra de progreso
- [x] Mejorar accesibilidad general (ARIA labels, roles, skip link, focus visible)
- [x] Expandir FAQ: +5 preguntas nuevas (celular, WhatsApp, IA)
- [x] Expandir Tips: filtro por categoría, 30 consejos organizados
- [x] Agregar dato curioso dentro de módulos relevantes
- [x] Toast de notificaciones para feedback de acciones
- [x] Confetti al completar todos los módulos o sacar 80%+ en test

### v1.0 — Versión inicial (backup)
- Archivo único HTML
- 12 módulos, 30 tips, 20 FAQ, 3 niveles de test

---

## Backlog / Pendiente futuro

- [ ] Versión offline (Service Worker / PWA)
- [ ] Generador de archivo único HTML para distribución por USB
- [ ] Módulo de "Paso a Paso" interactivo (ej: cómo limpiar el celular)
- [ ] Certificado de completación descargable
- [ ] Soporte para impresión (print styles)
- [ ] Modo presentación (pantalla completa para clase)
- [ ] Audio: leer el contenido en voz alta (Text-to-Speech)
