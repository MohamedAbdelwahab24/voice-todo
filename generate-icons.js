const fs = require('fs');

// Simple SVG icons
const icons = {
    'icon-192.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 192">
        <rect width="192" height="192" fill="#1a1a2e"/>
        <circle cx="96" cy="80" r="32" fill="#e94560"/>
        <path d="M80 128c0-17.7 14.3-32 32-32s32 14.3 32 32h16c0-26.5-21.5-48-48-48s-48 21.5-48 48h16z" fill="#ffffff"/>
    </svg>`,
    'icon-512.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <rect width="512" height="512" fill="#1a1a2e"/>
        <circle cx="256" cy="212" r="80" fill="#e94560"/>
        <path d="M200 356c0-44.2 35.8-80 80-80s80 35.8 80 80h32c0-61.9-50.1-112-112-112s-112 50.1-112 112h32z" fill="#ffffff"/>
    </svg>`,
    'icon-maskable.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <rect width="512" height="512" fill="#1a1a2e"/>
        <circle cx="256" cy="212" r="80" fill="#e94560"/>
        <path d="M200 356c0-44.2 35.8-80 80-80s80 35.8 80 80h32c0-61.9-50.1-112-112-112s-112 50.1-112 112h32z" fill="#ffffff"/>
    </svg>`
};

// Save icons
Object.entries(icons).forEach(([filename, content]) => {
    fs.writeFileSync(filename, content);
    console.log(`Created ${filename}`);
});

console.log('\nIcons generated! You can use these with a simple SVG to PNG converter.');
