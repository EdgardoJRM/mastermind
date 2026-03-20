// Base de datos completa con todas las opciones del formulario

const DATA = {
  // PASO 1: Industrias y sus sujetos
  industrias: {
    "Belleza - Cabello": [
      "Cabello con puntas abiertas, seco y con color desgastado",
      "Cabello sedoso, con brillo espejo y color vibrante recién pintado",
      "Melena con puntas abiertas, textura pajiza y color mate",
      "Frasco de vidrio ámbar con gotero de cristal"
    ],
    "Belleza - Rostro y piel": [
      "Rostro con poros visibles, pecas y textura natural",
      "Rostro con piel ultra hidratada, firme y reluciente",
      "Frasco de vidrio ámbar con gotero de cristal"
    ],
    "Belleza - Uñas": [
      "Uñas largas con diseño artístico y cristales brillantes",
      "Cutícula afectada",
      "Uña con hongo"
    ],
    "Joyería": [
      "Un anillo de compromiso con un diamante que atrapa la luz",
      "Diamante de corte brillante engastado en oro blanco",
      "Esmeralda verde profundo con facetas pulidas"
    ],
    "Accesorios": [
      "Cartera de cuero con costuras hechas a mano y detalles metálicos",
      "Bolso de piel de grano fino con herrajes dorados",
      "Montura de acetato transparente con lentes oscuros"
    ],
    "Social Media Manager/Marketers": [
      "Una mano sosteniendo un iPhone mostrando una gráfica de crecimiento",
      "Laptop de aluminio abierta con teclado retroiluminado",
      "Persona profesional con ropa de lino y expresión relajada",
      "Pluma fuente de metal sobre un cuaderno de papel crema"
    ],
    "Agente de Viajes - Red de Mercadeo": [
      "Un pasaporte sobre una mesa de cristal con un cóctel al lado",
      "Maleta de metal cerca de la piscina",
      "Grupo de amigos vestidos en trajes de baño",
      "Mujer en la playa tomando sol"
    ],
    "Agente de Seguros (De vida, médicos)": [
      "Una familia joven caminando hacia su nueva casa con tranquilidad",
      "Señora mayor con carta de hospital",
      "Mujer calva con cara de preocupación"
    ],
    "Agente Inmobiliario": [
      "Una cocina moderna con topes de cuarzo blanco y luces encendidas",
      "Casa de arquitectura moderna con grandes ventanales de vidrio",
      "Llave de metal plateado con llavero de cuero grabado"
    ],
    "Escritores/Autores": [
      "Un libro abierto donde las palabras parecen brillar en la página",
      "Personas leyendo un libro",
      "Persona con baja autoestima"
    ],
    "Life Coaches": [
      "Una persona sentada frente al mar con expresión de paz total",
      "Una persona encima de una montaña",
      "Una atleta en una carrera",
      "Una persona de frente a 2 caminos"
    ],
    "Gastronomía": [
      "Carne de hamburguesa soltando jugo mientras se cocina",
      "Un vaso de cristal con hielo y burbujas subiendo rápidamente",
      "Un postre decorado de forma que despierte el hambre al verlo",
      "Bloque de queso amarillo con bordes suaves",
      "Vaso de cristal transparente con paredes empañadas por el frío",
      "Hojas de lechuga romana con gotas de agua cristalina"
    ],
    "Doctores": [
      "Un estetoscopio de alta gama sobre una superficie médica limpia",
      "Persona sentada en una camilla",
      "Medicamentos en un frasco de plástico"
    ],
    "Diseño Gráfico/Creativo": [
      "Una hoja de papel saliendo de la máquina con colores neón frescos",
      "Una paleta de colores vibrantes en una pantalla de alta resolución"
    ],
    "Vendedor de Auto": [
      "El frente de un auto deportivo con luces LED encendidas",
      "Una goma de nieve y una goma de todo terreno",
      "Una persona al lado de un carro del 1995 maltrecho",
      "Foco de auto empañado"
    ],
    "Portones Eléctricos": [
      "Un portón de aluminio negro con diseño lineal moderno",
      "Portón de aluminio negro con diseño de líneas modernas",
      "Cerradura inteligente de metal cepillado con teclado LED"
    ],
    "Construcción": [
      "Chispas de soldadura azul brillante cayendo sobre metal oscuro",
      "Engranajes de acero pulido y metal dentado",
      "Máquina de soldadura profesional con cables reforzados"
    ]
  },

  // PASO 2: Acciones según tipo de contenido
  acciones: {
    producto: {
      movimientos: [
        "Rodar — El objeto rueda de un lado a otro de la pantalla con naturalidad",
        "Rebotar — El objeto cae y rebota suavemente sobre una superficie elástica",
        "Girar — El objeto gira lentamente 360° sobre su propio eje mostrando todos sus ángulos",
        "Orbitar — El objeto da vueltas alrededor de un punto central como en órbita",
        "Oscilar — El objeto se balancea suavemente de un lado al otro como un péndulo",
        "Levitar — El objeto flota en el aire y vibra ligeramente como si tuviera energía",
        "Vibrar — Un movimiento rápido y corto que genera ondas alrededor del objeto",
        "Caída libre — El objeto cae al vacío con el fondo moviéndose muy rápido",
        "Deslizarse — El objeto se desplaza suavemente por una superficie lisa"
      ],
      transformaciones: [
        "Desintegrarse — El objeto se convierte en polvo fino que se lleva el viento",
        "Desmoronarse — El objeto se rompe en mil pedazos en cámara lenta",
        "Fracturarse — Grietas que aparecen y se extienden por el objeto como un cristal roto",
        "Inflarse — El objeto crece de tamaño como si lo estuvieran llenando de aire",
        "Contraerse — El objeto encoge lentamente hacia su centro hasta desaparecer",
        "Cambiar de color — El objeto transiciona gradualmente de un color a otro con efecto líquido",
        "Metamorfosearse — El objeto se transforma visualmente en otro objeto similar",
        "Cristalizarse — El objeto gana una textura de cristal desde adentro hacia afuera",
        "Quemarse — Los bordes del objeto se consumen lentamente dejando un rastro de luz"
      ],
      efectosTextura: [
        "Burbujear — Pequeñas burbujas subiendo y explotando en la superficie de un líquido",
        "Congelarse — Capas de hielo cubriendo el objeto de afuera hacia adentro",
        "Disolverse — El objeto se mezcla con un líquido hasta desaparecer",
        "Ondular — Ondas circulares expandiéndose desde el punto de impacto como en el agua",
        "Remolinar — El líquido gira creando un pequeño embudo o tornado dentro del recipiente",
        "Gotear — Una sola gota cayendo rítmicamente sobre una superficie sólida",
        "Explotar en partículas — El objeto estalla en confeti, pétalos o luces brillantes",
        "Fundirse — Dos colores o líquidos diferentes mezclándose en cámara lenta"
      ]
    },
    persona: {
      manosEnAccion: [
        "Gesticular — Manos moviéndose con entusiasmo mientras explican un concepto",
        "Señalar — Una mano apunta directamente a un punto importante en la pantalla",
        "Organizar — Manos moviendo objetos sobre un escritorio para ponerlos en orden",
        "Brindar — Dos copas o tazas chocando suavemente en el centro del encuadre",
        "Acariciar — Dedos pasando suavemente sobre una textura (tela, piel o cabello)",
        "Desempacar — Manos quitando un lazo o abriendo una caja con cuidado",
        "Aplicar — Una mano aplicando crema o producto sobre una superficie o piel",
        "Entregar — Una mano estirándose para dar un objeto a alguien fuera de cámara",
        "Escribir — Una mano trazando firmas o dibujos de forma elegante y fluida",
        "Tomar — Una mano agarra el objeto con confianza desde la superficie",
        "Sostener — Manos sujetando el objeto hacia la cámara presentándolo",
        "Verter — Manos inclinando un recipiente para servir su contenido",
        "Presionar — Una mano presiona el objeto dejando una marca o activándolo",
        "Frotar — Manos frotando suavemente una crema, aceite o tela entre los dedos"
      ],
      movimientoCorporal: [
        "Caminar hacia la cámara — La persona camina con confianza en línea recta hacia la cámara",
        "Caminar de lado — La persona cruza el encuadre de izquierda a derecha o viceversa",
        "Caminar alejándose — La persona se aleja de la cámara mostrando su espalda",
        "Correr — La persona corre hacia o a través del encuadre con energía",
        "Girar — La persona da una vuelta de 360° mostrando su outfit o presencia completa",
        "Sentarse — La persona se sienta con elegancia en una silla o superficie",
        "Levantarse — La persona se pone de pie desde una silla con seguridad",
        "Inclinarse — La persona se inclina hacia adelante acercándose a la cámara",
        "Extender los brazos — Brazos abriéndose hacia los lados en gesto de bienvenida",
        "Mirar al horizonte — La persona de perfil mirando hacia el frente con postura segura",
        "Celebrar — La persona levanta los brazos o puños en señal de logro conseguido",
        "Abrazar — Dos personas se abrazan transmitiendo calidez y conexión",
        "Saludar — La persona saluda a cámara con la mano de forma natural y cercana"
      ],
      emociones: {
        "Confianza y seguridad": ["Confiado/a", "Seguro/a", "Tranquilo/a", "Sereno/a"],
        "Alegría y satisfacción": ["Feliz", "Satisfecho/a", "Emocionado/a", "Orgulloso/a"],
        "Alivio y paz": ["Aliviado/a", "En paz", "Relajado/a"],
        "Determinación y éxito": ["Decidido/a", "Motivado/a", "Triunfante"],
        "Sorpresa positiva": ["Sorprendido/a", "Asombrado/a", "Impresionado/a"],
        "Tristeza y vulnerabilidad": ["Preocupado/a", "Agotado/a", "Abrumado/a", "Angustiado/a", "Perdido/a", "Solo/a", "Vulnerable", "Frustrado/a", "Resignado/a", "Triste"]
      }
    },
    objetoPersona: {
      llegada: [
        "Recibir — Una mano se extiende y recibe el producto que cae o es entregado",
        "Descubrir — La persona abre una caja y su expresión cambia al ver el producto",
        "Probar por primera vez — La persona lleva el producto a su boca, piel o nariz con curiosidad",
        "Ponerse — La persona se coloca una prenda, joya o accesorio frente al espejo"
      ],
      uso: [
        "Usar con confianza — La persona manipula el producto con dominio y naturalidad",
        "Mostrar — La persona sostiene el producto hacia la cámara y sonríe",
        "Aplicar — La persona usa el producto sobre su piel, cabello o superficie",
        "Trabajar con él — La persona usa el objeto como herramienta en su entorno profesional"
      ],
      reaccion: [
        "Sorprenderse — El rostro de la persona al ver el producto por primera vez",
        "Satisfacción — La persona cierra los ojos después de usar el producto",
        "Compartir — La persona entrega el objeto a otra persona dentro del encuadre",
        "Celebrar — La persona sostiene el producto en alto como logro conseguido"
      ]
    },
    personaPersona: {
      profesional: [
        "Cerrar un trato — Dos personas se estrechan la mano al finalizar un acuerdo",
        "Asesorar — Una persona explica algo a otra que escucha con atención",
        "Presentar — Una persona muestra algo en pantalla o papel a otra persona",
        "Firmar juntos — Dos personas revisan y firman un documento en la misma mesa",
        "Entregar — Una persona entrega un sobre, producto o documento a otra"
      ],
      emocional: [
        "Abrazar — Dos personas se abrazan transmitiendo protección y calidez",
        "Reír juntos — Dos o más personas ríen de forma natural y espontánea",
        "Celebrar juntos — Un grupo levanta los brazos o brinda en señal de logro",
        "Consolar — Una persona pone la mano en el hombro de otra en gesto de apoyo",
        "Sorprender — Una persona le da algo inesperado a otra que reacciona con alegría"
      ],
      familiar: [
        "Familia reunida — Padres e hijos en el mismo encuadre compartiendo un momento",
        "Jugar juntos — Dos o más personas interactúan de forma lúdica y natural",
        "Caminar juntos — Dos personas caminan lado a lado hacia la cámara o el horizonte",
        "Mirar juntos — Dos o más personas observan algo fuera del encuadre con la misma emoción",
        "Brindis grupal — Tres o más personas chocan sus copas en el centro del encuadre"
      ]
    }
  },

  // PASO 3: Entornos
  entornos: [
    "Mármol de Lujo: Superficie pulida blanca o negra con reflejos",
    "Oficina Moderna: Paredes de cristal, plantas y vista a la ciudad",
    "Estudio Fotográfico: Fondo liso y perfecto (blanco, gris o pastel)",
    "Jardín Tropical: Muchas hojas verdes, flores y luz de sol",
    "Taller Industrial: Paredes de cemento, herramientas y luces LED",
    "Cocina Gourmet: Encimeras de granito y estantes de madera",
    "Ciudad de Noche: Luces de edificios y neones borrosos al fondo",
    "Sala Elegante: Muebles modernos, cuadros y alfombras de lujo",
    "Playa Paradisiaca: Arena blanca y agua azul turquesa",
    "Librería Clásica: Estantes de madera oscura llenos de libros",
    "Clínica Médica: Un espacio blanco, limpio y muy iluminado",
    "Showroom de Autos: Piso de espejo y luces potentes en el techo",
    "Spa Relajante: Velas encendidas, piedras y ambiente oscuro",
    "Terraza al Atardecer: Madera y luz naranja de sol cayendo",
    "Escritorio Creativo: Agendas, café y una computadora encendida",
    "Fábrica de Acero: Estructuras metálicas y ambiente de trabajo",
    "Espacio Minimalista: Todo blanco con una sola luz enfocada",
    "Cafetería Trendy: Paredes de ladrillo y luces colgantes cálidas",
    "Aeropuerto / VIP: Ambiente de viajes y lujo internacional",
    "Garaje de Lujo: Espacio moderno para autos con luces de neón"
  ],

  // PASO 4: Cámara y Luz
  camara: [
    "Plano General Extremo: Para mostrar todo el paisaje (el lugar es el protagonista)",
    "Plano Entero: Vemos al sujeto de pies a cabeza",
    "Plano Americano: Vemos a la persona de la rodilla hacia arriba (estilo vaquero)",
    "Plano Medio: De la cintura para arriba (ideal para hablar a cámara)",
    "Primer Plano (Close-up): Enfocado solo en la cara o el producto (emoción pura)",
    "Plano Detalle (Macro): Muy, muy cerca. Se ven las texturas (pelo, joyas, gotas)",
    "Ángulo Picado: La cámara mira desde arriba (hace que el sujeto se vea pequeño)",
    "Ángulo Contrapicado: La cámara mira desde el suelo (da poder y grandeza)",
    "Cenital (Bird's Eye): La cámara mira totalmente desde el techo hacia abajo",
    "Ángulo Holandés: La cámara se inclina hacia un lado (genera tensión o estilo)",
    "Over-the-shoulder: Grabado por encima del hombro de alguien más",
    "Panorámica (Pan): La cámara gira de izquierda a derecha",
    "Tilt: La cámara mira de arriba hacia abajo (sin moverse de su sitio)",
    "Dolly In: La cámara se acerca físicamente al objeto",
    "Tracking Shot: La cámara sigue al sujeto mientras este camina",
    "Cámara en Mano (Handheld): Un poco de movimiento real para que parezca documental"
  ],

  luz: [
    "Luz de Atardecer (Golden Hour): Luz cálida, naranja y hermosa",
    "Luz de Estudio: Iluminación perfecta que no deja sombras feas",
    "Luz de Neón: Estilo moderno con colores azules, rosas o verdes",
    "Luz Difusa (o suave): Luz suave sin sombras duras. Ideal para estética, alimentos, bebidas",
    "Luz de la ventana: Luz natural entrando por ventana. Ideal para cocina, spa, hogar, locales",
    "Fotorrealista / Cinematográfico: La instrucción final para que parezca cine real"
  ]
};
