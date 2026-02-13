---
name: svg-first-assets
description: Use SVG-based assets instead of binary image files when implementing or updating page imagery in this repository.
---

# SVG First Assets

When a request involves page background images or decorative visual assets:

1. Prefer `.svg` files over binary formats (`.png`, `.jpg`, `.webp`).
2. If replacing an existing binary-backed background, switch CSS/HTML references to an SVG path.
3. Keep SVG assets lightweight and editable (avoid huge embedded binary payloads when possible).
4. If a binary file was added just for visuals, remove it once an SVG replacement is in place.

Use this skill for front-end visual updates in this repo where binary support is constrained.
