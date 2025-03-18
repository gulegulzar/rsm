// src/routes/pdf/+server.js
import { error } from '@sveltejs/kit';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

export async function GET() {
  try {
    // Get the directory path of the current module
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    
    // Construct path to the PDF file
    const pdfPath = path.resolve(__dirname, '../../lib/assets/pub.pdf');
    
    // Read the file
    const pdfFile = fs.readFileSync(pdfPath);
    
    // Return the PDF with appropriate headers
    return new Response(pdfFile, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'inline; filename="pub.pdf"'
      }
    });
  } catch (err) {
    console.error('Error serving PDF:', err);
    throw error(404, 'PDF file not found');
  }
}