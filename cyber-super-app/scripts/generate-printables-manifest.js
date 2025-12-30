import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const printablesDir = path.join(__dirname, '../public/printables');
const outputFile = path.join(__dirname, '../src/data/printables.json');

// Ensure output directory exists
const outputDir = path.dirname(outputFile);
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Read all files in the printables directory
const files = fs.readdirSync(printablesDir);

// Filter for PDF files and create manifest
const printables = files
  .filter(file => file.toLowerCase().endsWith('.pdf'))
  .sort()
  .map((file, index) => {
    // Generate a title from filename (remove extension and format)
    const nameWithoutExt = file.replace(/\.pdf$/i, '');
    const title = nameWithoutExt
      .replace(/([A-Z])/g, ' $1') // Add space before capitals
      .replace(/[_-]/g, ' ') // Replace underscores and hyphens with spaces
      .trim()
      .replace(/\s+/g, ' '); // Normalize multiple spaces

    return {
      id: index + 1,
      title: title,
      description: `Printable resource: ${title}`,
      pdfUrl: `/printables/${file}`,
      thumbnailUrl: null,
      filename: file
    };
  });

// Write the manifest file
fs.writeFileSync(outputFile, JSON.stringify(printables, null, 2));

console.log(`✅ Generated printables manifest with ${printables.length} files:`);
printables.forEach(p => console.log(`   - ${p.filename}`));
