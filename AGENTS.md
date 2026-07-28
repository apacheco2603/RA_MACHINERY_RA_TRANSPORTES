# Reglas de Proyecto: RA MACHINERY PERÚ & RA TRANSPORTES

## 1. Contexto del Proyecto y Alcance
* [cite_start]Estamos construyendo la "Versión 1" (puramente informativa) de la página web. [cite: 5]
* [cite_start]El objetivo principal es tener presencia digital rápida, clara y directa ("existir en la web"). [cite: 163, 165]
* [cite_start]Estrictamente prohibido sugerir, programar o implementar bases de datos, autenticación o funcionalidades complejas que no correspondan a esta fase. [cite: 162, 212]

## 2. Stack Tecnológico
* [cite_start]Framework: Next.js configurado con `App Router`. [cite: 191, 192]
* [cite_start]Lenguaje: JavaScript / JSX (con soporte a TypeScript si se requiere escalar). [cite: 111, 188]
* [cite_start]Estilos: Tailwind CSS. [cite: 190, 209]
* [cite_start]Iconografía: Librería `lucide-react`. [cite: 151, 213]
* Compilador: Utilizar el SWC nativo de Next.js. [cite_start]No sugerir ni implementar el React Compiler experimental. [cite: 180, 197]

## 3. Identidad Visual y Diseño UI
* [cite_start]Color Principal (Amarillo Caterpillar): `#FFB700`. [cite: 55, 210]
* [cite_start]Color Secundario (Negro Puro): `#000000`. [cite: 55, 210]
* [cite_start]El diseño debe ser 100% responsivo (adaptable a móviles, tablets y escritorio). [cite: 24, 46]

## 4. Arquitectura Central y Componentes
* [cite_start]La página principal (`src/app/page.js`) funciona exclusivamente como un "Controlador de Pestañas" (Tab Switcher). [cite: 168]
* [cite_start]Este controlador sirve para dividir visualmente la web y darle exactamente el mismo peso a "RA MACHINERY" y "RA TRANSPORTES" en una sola página rápida, sin recargar. [cite: 167, 169, 211]
* [cite_start]En la pestaña/vista de RA MACHINERY siempre se debe mantener visible la opción de "cotizar flete" para destacar la sinergia y ventaja competitiva con la empresa paralela. [cite: 161, 167]