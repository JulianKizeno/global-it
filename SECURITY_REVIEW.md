# Revisión de seguridad — 2026-10-24

Repositorio: `JulianKizeno/global-it`. Rama: `security/review-2026-10-24`.

## Correcciones

- Replace vulnerable vendored jQuery 2.2.4 with 3.7.1; adapt legacy load event handlers to the supported API
- Replace end-of-life Bootstrap 3 JavaScript with patched Bootstrap 5.3.8, migrate data attributes and retain the existing layout through a small CSS compatibility file

## Auditoría npm después de los cambios

Sin manifiesto npm aplicable; la revisión de bibliotecas vendorizadas se describe en las correcciones.

## Verificación

- Chromium: mobile navigation opens/closes, content collapse opens, jQuery prototype-pollution regression, no page script errors; correctos.

## Límites y configuración

- La auditoría cubre el árbol npm resuelto, no demuestra ausencia de vulnerabilidades de lógica, infraestructura o servicios externos. No se ha desplegado ni fusionado este cambio.
