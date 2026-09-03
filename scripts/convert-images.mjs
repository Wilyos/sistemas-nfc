// scripts/convert-images.mjs
// Convierte imágenes PNG/JPG grandes a WebP para optimizar la carga de la página.
// Uso: node scripts/convert-images.mjs
// Los archivos originales NO se eliminan — quedan como respaldo.

import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join, extname, basename, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = join(__dirname, '..');

// Directorios a procesar
const DIRS_TO_PROCESS = [
  join(PROJECT_ROOT, 'src', 'assets', 'banners'),
  join(PROJECT_ROOT, 'src', 'assets', 'background'),
  join(PROJECT_ROOT, 'src', 'assets', 'img'),
  join(PROJECT_ROOT, 'public', 'img'),
];

// Solo convertir imágenes mayores a este tamaño (bytes) — 50 KB
const MIN_SIZE_BYTES = 50 * 1024;

// Calidad WebP (0-100). 80 es un excelente balance calidad/tamaño.
const WEBP_QUALITY = 80;

const SUPPORTED_EXTENSIONS = new Set(['.png', '.jpg', '.jpeg']);

async function convertToWebP(filePath) {
  const ext = extname(filePath).toLowerCase();
  if (!SUPPORTED_EXTENSIONS.has(ext)) return null;

  const fileStat = await stat(filePath);
  if (fileStat.size < MIN_SIZE_BYTES) {
    console.log(`  Skip (< 50KB): ${basename(filePath)}`);
    return null;
  }

  const outputPath = filePath.replace(/\.(png|jpg|jpeg)$/i, '.webp');

  // Si ya existe el WebP, no reconvertir
  try {
    await stat(outputPath);
    console.log(`  Ya existe: ${basename(outputPath)}`);
    return null;
  } catch {
    // No existe, continuar con la conversion
  }

  const beforeSize = fileStat.size;

  await sharp(filePath)
    .webp({ quality: WEBP_QUALITY })
    .toFile(outputPath);

  const afterStat = await stat(outputPath);
  const afterSize = afterStat.size;
  const savings = ((1 - afterSize / beforeSize) * 100).toFixed(1);

  return {
    original: basename(filePath),
    webp: basename(outputPath),
    before: (beforeSize / 1024 / 1024).toFixed(2),
    after: (afterSize / 1024 / 1024).toFixed(2),
    savings,
  };
}

async function processDirectory(dir) {
  let files;
  try {
    files = await readdir(dir);
  } catch {
    console.log(`  Directorio no encontrado: ${dir}`);
    return [];
  }

  const results = [];
  for (const file of files) {
    const filePath = join(dir, file);
    const result = await convertToWebP(filePath);
    if (result) results.push(result);
  }
  return results;
}

async function main() {
  console.log('Iniciando conversion de imagenes a WebP...\n');

  let totalResults = [];

  for (const dir of DIRS_TO_PROCESS) {
    console.log(`Procesando: ${dir.replace(PROJECT_ROOT, '.')}`);
    const results = await processDirectory(dir);
    totalResults = totalResults.concat(results);
    console.log('');
  }

  if (totalResults.length === 0) {
    console.log('No se convirtieron nuevas imagenes.');
    return;
  }

  console.log('RESUMEN DE CONVERSION:');

  let totalBefore = 0;
  let totalAfter = 0;

  for (const r of totalResults) {
    console.log(
      `  ${r.original} -> ${r.webp} | ${r.before} MB -> ${r.after} MB (-${r.savings}%)`
    );
    totalBefore += parseFloat(r.before);
    totalAfter += parseFloat(r.after);
  }

  const totalSavings = ((1 - totalAfter / totalBefore) * 100).toFixed(1);
  console.log(`TOTAL: ${totalBefore.toFixed(2)} MB -> ${totalAfter.toFixed(2)} MB (-${totalSavings}% ahorrado)`);
  console.log('\nConversion completada. Los archivos originales se conservan intactos.');
}

main().catch((err) => {
  console.error('Error durante la conversion:', err);
  process.exit(1);
});
