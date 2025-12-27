# Printables Folder

This folder contains PDF files that are automatically displayed on the Printables page.

## How it works

The printables list is **automatically generated** from the PDF files in this folder.

## Adding new printables

1. Add your PDF file(s) to this folder (`public/printables/`)
2. Run the command: `npm run generate-printables`
3. The PDF will automatically appear on the Printables page

## File naming

The PDF filename will be converted to a title automatically:
- `StickerSheet1.pdf` → "Sticker Sheet1"
- `Powers2.pdf` → "Powers2"
- `MyAwesomeGuide.pdf` → "My Awesome Guide"

## Build process

The manifest is automatically regenerated during `npm run build`, so you don't need to manually run the generation script before building for production.

## Technical details

- Manifest file: `src/data/printables.json`
- Generator script: `scripts/generate-printables-manifest.js`
- Component: `src/components/PrintablesScreen.tsx`
