# Principios SOLID en TypeScript

Ejemplos que muestran cómo corregir violaciones de los principios SRP, OCP y LSP.

## Contenido

- `src/srp.ts` — Separación de responsabilidades: `Usuario`, `UsuarioRepositorio` y `EmailService`.
- `src/ocp.ts` — Abierto/Cerrado: `Forma` como interfaz y clases concretas que implementan el cálculo de área.
- `src/lsp.ts` — Sustitución de Liskov: `Rectangulo` y `Cuadrado` implementan la misma interfaz `Forma`.
- `src/index.ts` — Ejecución de ejemplos.

## Instalación

```bash
npm install
npm run build
```

## Uso

```bash
npm start
```

## Resultado esperado

- SRP: ninguna clase combina validación, persistencia y envío de correo.
- OCP: `CalculadoraArea` no necesita modificarse para soportar nuevas formas.
- LSP: `Rectangulo` y `Cuadrado` son sustituibles a través de la interfaz `Forma`.

## Notas

Este repositorio está listo para inicializarse como git y conectarse a un remoto de GitHub.
