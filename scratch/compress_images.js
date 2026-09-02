import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const imagesDir = path.resolve('public/images');
const files = fs.readdirSync(imagesDir);

console.log('Auditing images in:', imagesDir);

for (const file of files) {
  const filePath = path.join(imagesDir, file);
  const stat = fs.statSync(filePath);
  const sizeKB = (stat.size / 1024).toFixed(2);

  if (stat.size > 500 * 1024) {
    console.log(`[FLAGGED >500KB] ${file}: ${sizeKB} KB`);
    const tempPath = path.join(imagesDir, `compressed_${file}`);

    if (file.endsWith('.jpg') || file.endsWith('.jpeg')) {
      await sharp(filePath)
        .resize({ width: 1920, withoutEnlargement: true })
        .jpeg({ quality: 80, progressive: true })
        .toFile(tempPath);
    } else if (file.endsWith('.png')) {
      await sharp(filePath)
        .resize({ width: 1920, withoutEnlargement: true })
        .png({ quality: 80, compressionLevel: 9 })
        .toFile(tempPath);
    }

    const newStat = fs.statSync(tempPath);
    const newSizeKB = (newStat.size / 1024).toFixed(2);
    console.log(`  -> Compressed ${file} from ${sizeKB} KB to ${newSizeKB} KB`);

    fs.renameSync(tempPath, filePath);
  } else {
    console.log(`[OK] ${file}: ${sizeKB} KB`);
  }
}
