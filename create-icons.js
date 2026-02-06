const fs = require('fs');
const { createCanvas } = require('canvas');

// Generate PNG icons using canvas
function createIcon(size, bgColor, accentColor, textColor) {
    const canvas = createCanvas(size, size);
    const ctx = canvas.getContext('2d');

    // Background
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, size, size);

    // Circle (microphone icon)
    ctx.beginPath();
    ctx.arc(size / 2, size / 2 - 20, 40, 0, Math.PI * 2);
    ctx.fillStyle = accentColor;
    ctx.fill();

    // Speaker waves
    ctx.beginPath();
    ctx.arc(size / 2, size / 2 + 30, 15, 0, Math.PI * 2);
    ctx.fillStyle = textColor;
    ctx.fill();

    ctx.beginPath();
    ctx.arc(size / 2, size / 2 + 50, 10, 0, Math.PI * 2);
    ctx.fillStyle = textColor;
    ctx.fill();

    return canvas.toBuffer('image/png');
}

try {
    // Try to use canvas (needs `npm install canvas`)
    const png192 = createIcon(192, '#1a1a2e', '#e94560', '#ffffff');
    const png512 = createIcon(512, '#1a1a2e', '#e94560', '#ffffff');

    fs.writeFileSync('icon-192.png', png192);
    fs.writeFileSync('icon-512.png', png512);

    console.log('PNG icons created successfully!');
} catch (error) {
    console.log('Could not create PNG icons. Using SVG icons instead.');
    console.log('For PNG icons, run: npm install canvas && node create-icons.js');
}
