# Galería de Proyectos - Hermanos Peralta Adocretos

## Instrucciones para agregar imágenes

Para que la galería funcione correctamente, sigue estas instrucciones:

### 1. Formato de nombres de archivo
- Las imágenes deben estar numeradas consecutivamente: `1.jpg`, `2.jpg`, `3.jpg`, etc.
- Todas las imágenes deben tener la extensión `.jpg`
- No debe haber espacios en los nombres de archivo

### 2. Ubicación
- Todas las imágenes deben estar en la carpeta: `assets/images/galeria/`

### 3. Especificaciones técnicas recomendadas
- **Formato**: JPG
- **Resolución recomendada**: 1200x800 píxeles (ratio 3:2)
- **Tamaño máximo**: 500KB por imagen para optimizar la carga
- **Calidad**: 80-90% para balance entre calidad y tamaño

### 4. Contenido sugerido
Las imágenes deben mostrar:
- Proyectos reales donde se han usado los productos
- Instalaciones de adocretos, pastelones, etc.
- Antes y después de proyectos
- Diferentes aplicaciones de los productos
- Trabajos en diferentes tipos de espacios (residencial, comercial, etc.)

### 5. Funcionamiento automático
- El sistema detecta automáticamente las imágenes disponibles
- Busca desde `1.jpg` hasta encontrar la primera imagen faltante
- Si no encuentra `1.jpg`, la galería no se mostrará
- Máximo configurado: 20 imágenes (se puede cambiar en el código)

### 6. Ejemplo de estructura
```
assets/images/galeria/
├── 1.jpg    (Proyecto patio residencial)
├── 2.jpg    (Instalación de pastelones)
├── 3.jpg    (Borde de piscina)
├── 4.jpg    (Estacionamiento comercial)
├── 5.jpg    (Terraza con adocretos)
└── ...
```

### 7. Optimización de imágenes
Para optimizar las imágenes antes de subirlas, puedes usar:
- **Online**: TinyPNG, Squoosh.app
- **Software**: Photoshop, GIMP
- **Herramientas CLI**: ImageMagick, jpegoptim

### 8. Configuración avanzada
Si necesitas cambiar la configuración de la galería, edita el archivo `js/script.js` en la sección `GALLERY_CONFIG`:

```javascript
const GALLERY_CONFIG = {
    maxImages: 20,                    // Número máximo de imágenes
    autoplayInterval: 5000,           // Intervalo de autoplay (ms)
    imagePath: 'assets/images/galeria/',
    imageExtension: '.jpg'
};
```

## Notas importantes
- La galería solo aparecerá si hay al menos una imagen (`1.jpg`)
- Las imágenes se cargan de forma lazy para mejorar el rendimiento
- El modal permite navegación con teclado (flechas, ESC)
- La galería es completamente responsiva
