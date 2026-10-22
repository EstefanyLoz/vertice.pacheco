# Vértice Pacheco | Energy & Projects — Sitio web modular

Proyecto **HTML + CSS + JavaScript** organizado para edición en Visual Studio Code y alojamiento en **Cloudflare Pages**.

## Estructura

```text
Vertice_Pacheco_VSC_Organizado/
├── index.html                 # Textos, secciones y contenido visible
├── readme.md                  # Esta guía
├── assets/
│   └── imageFiles/
│       └── energia.jpg        # Fotografía actual de la portada
├── css/
│   ├── main.css               # Estilos actuales de la web (V2)
│   ├── bases/
│   │   └── variables.css      # Colores corporativos
│   ├── components/
│   │   ├── navbar.css         # Espacio para futuros ajustes a navegación
│   │   └── footer.css         # Espacio para futuros ajustes al pie
│   └── pages/
│       └── home.css           # Ajustes de la portada y clases especiales
├── data/
│   └── services.js            # Catálogo de referencia (no renderizado)
└── js/
    ├── main.js               # Inicializa funciones
    ├── components/
    │   └── navbar.js         # Menú móvil
    └── utils/
        └── constants.js      # Datos generales para ampliaciones
```

## Cómo modificar la web

1. Descomprime el ZIP.
2. Abre **la carpeta completa** en Visual Studio Code: **Archivo > Abrir carpeta**.
3. Edita los textos de servicios, nosotros, metodología y contacto en `index.html`.
4. Cambia colores en `css/bases/variables.css`.
5. Para reemplazar la fotografía, guarda tu imagen en `assets/imageFiles/` y cambia la ruta en `css/main.css` (busca `energia.jpg`).
6. El logo en `index.html` es **una representación SVG provisional**; reemplázalo por el archivo oficial cuando esté disponible.
7. Guarda los cambios y previsualiza con un **servidor local** de VS Code, por ejemplo la extensión Live Server. El proyecto usa módulos JavaScript, que pueden no funcionar al abrir el archivo directamente con `file://`.

## Cómo publicar sin afectar Zoho

En **Cloudflare > Workers & Pages > vertice-pacheco > Despliegues**, crea un nuevo despliegue de producción y carga el ZIP de esta carpeta (asegúrate de que `index.html` esté en la raíz del ZIP).

**No necesitas tocar** los DNS, nameservers, MX, SPF o DKIM de Zoho para actualizar el contenido de la página.

## Notas

- Este sitio **no contiene carrito, pagos, panel de usuario ni formularios** porque no son necesarios para la versión corporativa inicial.
- El contacto usa enlaces `mailto:`, sin recopilar datos personales en el sitio.
- `data/services.js` es referencia para una futura versión; el contenido que aparece en el sitio se modifica por ahora en `index.html`.
- No se ha integrado el logotipo oficial ni se han validado públicamente todos los servicios; revisa textos antes de publicar.
