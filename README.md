# 🛒 coliBro Frontend - Catálogo de Productos

Proyecto desarrollado en **Angular** como parte de un reto técnico autónomo. Consiste en un catálogo de productos dinámico con filtrado por categorías, búsqueda en tiempo real y etiquetas de estado de inventario, implementando buenas prácticas de arquitectura de software y desarrollo frontend.

---

## 🚀 Características Principales

* **Filtro por Categorías:** Generación dinámica de botones de categorías sin duplicados utilizando un *getter* personalizado.
* **Búsqueda Dinámica:** Filtrado en tiempo real por nombre de producto mediante el componente `app-search-box`.
* **Etiquetas de Inventario:** Átomo `app-stock-label` que calcula dinámicamente el estado del stock (*Sin stock*, *Pocas unidades*, *Disponible*).
* **Control de Flujo Moderno:** Uso exclusivo de las directivas nativas `@if`, `@for` y `@empty` de Angular.

---

## 📐 Arquitectura del Proyecto (Atomic Design)

El proyecto organiza sus componentes siguiendo la metodología de **Atomic Design**:

```text
src/app/
├── core/
│   └── models/               # Modelos de datos (Producto)
├── shared/
│   └── ui/
│       ├── atoms/            # Átomos (stock-label)
│       └── molecules/        # Moléculas (search-box, product-card)
└── features/
    └── productos/
        └── pages/            # Páginas principales (productos-page)