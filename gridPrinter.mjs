import fetch from 'node-fetch';
import { JSDOM } from 'jsdom';

async function fetchAndDecodeGoogleDoc(url) {
  try {

    const response = await fetch(url);
    const text = await response.text();

    
    const dom = new JSDOM(text);
    const document = dom.window.document;

   
    const rows = document.querySelectorAll('tr');
    let data = [];

    
    rows.forEach((row, index) => {
      if (index === 0) return; 
      const cols = row.querySelectorAll('td');

      if (cols.length === 3) {
        let x = parseInt(cols[0].textContent.trim(), 10);
        let char = cols[1].textContent.trim();
        let y = parseInt(cols[2].textContent.trim(), 10);
        data.push({ x, y, char });
      }
    });

  
    const maxX = Math.max(...data.map((item) => item.x));
    const maxY = Math.max(...data.map((item) => item.y));

    
    let grid = Array.from({ length: maxY + 1 }, () =>
      Array(maxX + 1).fill(' ')
    );

    data.forEach(({ x, y, char }) => {
      grid[y][x] = char;
    });

   
    grid.forEach((row) => console.log(row.join('')));
  } catch (error) {
    console.error('Error fetching or processing the document:', error);
  }
}


fetchAndDecodeGoogleDoc(
  'https://docs.google.com/document/d/e/2PACX-1vShuWova56o7XS1S3LwEIzkYJA8pBQENja01DNnVDorDVXbWakDT4NioAScvP1OCX6eeKSqRyzUW_qJ/pub'
);
