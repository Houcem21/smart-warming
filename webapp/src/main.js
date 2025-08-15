// Content mapping - this demonstrates the flexible linking system
const contentMap = {
  games: {
    "mouse-tracker": {
      title: "Mouse Tracker Game",
      description: "Track mouse position and demonstrate system monitoring",
      linkedArticles: ["pigeon-analysis"]
    }
  },
  articles: {
    "pigeon-analysis": {
      title: "Pigeon Environmental Analysis", 
      description: "Why pigeons are scary for the environment",
      linkedGames: ["mouse-tracker"]
    }
  }
};

// Navigation system
document.addEventListener('DOMContentLoaded', function() {
    // Navigation buttons
    const navBtns = document.querySelectorAll('.nav-btn');
    const sections = document.querySelectorAll('.section');
    
    navBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetSection = btn.dataset.section;
            showSection(targetSection);
            
            // Update active nav button
            navBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });
    
    // Initialize mouse tracker game
    initMouseTracker();
    
    // Initialize pigeon chart
    initPigeonChart();
});

function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');
}

function showGame(gameId) {
    showSection('games');
    const navBtns = document.querySelectorAll('.nav-btn');
    navBtns.forEach(b => b.classList.remove('active'));
    document.querySelector('[data-section="games"]').classList.add('active');
    
    console.log(`Showing game: ${gameId}`);
    console.log('Linked articles:', contentMap.games[gameId]?.linkedArticles);
}

function showArticle(articleId) {
    showSection('articles');
    const navBtns = document.querySelectorAll('.nav-btn');
    navBtns.forEach(b => b.classList.remove('active'));
    document.querySelector('[data-section="articles"]').classList.add('active');
    
    console.log(`Showing article: ${articleId}`);
    console.log('Linked games:', contentMap.articles[articleId]?.linkedGames);
}

// Mouse Tracker Game
function initMouseTracker() {
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');
    const mousePosElement = document.getElementById('mousePos');
    
    let mouseX = 0;
    let mouseY = 0;
    let trail = [];
    
    canvas.addEventListener('mousemove', (e) => {
        const rect = canvas.getBoundingClientRect();
        mouseX = e.clientX - rect.left;
        mouseY = e.clientY - rect.top;
        
        // Add to trail
        trail.push({ x: mouseX, y: mouseY, life: 30 });
        if (trail.length > 50) trail.shift();
        
        // Update position display
        mousePosElement.textContent = `X: ${Math.round(mouseX)}, Y: ${Math.round(mouseY)}`;
    });
    
    // Game loop
    function animate() {
        // Clear canvas
        ctx.fillStyle = '#000';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Draw trail
        trail.forEach((point, index) => {
            const alpha = point.life / 30;
            ctx.fillStyle = `rgba(0, 255, 136, ${alpha})`;
            ctx.beginPath();
            ctx.arc(point.x, point.y, 3, 0, Math.PI * 2);
            ctx.fill();
            
            // Decrease life
            point.life--;
        });
        
        // Remove dead trail points
        trail = trail.filter(point => point.life > 0);
        
        // Draw current mouse position
        ctx.fillStyle = '#00ff88';
        ctx.beginPath();
        ctx.arc(mouseX, mouseY, 5, 0, Math.PI * 2);
        ctx.fill();
        
        // Draw grid
        ctx.strokeStyle = '#333';
        ctx.lineWidth = 1;
        for (let x = 0; x < canvas.width; x += 50) {
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, canvas.height);
            ctx.stroke();
        }
        for (let y = 0; y < canvas.height; y += 50) {
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(canvas.width, y);
            ctx.stroke();
        }
        
        requestAnimationFrame(animate);
    }
    
    animate();
}

// Pigeon Analysis Chart
function initPigeonChart() {
    const canvas = document.getElementById('pigeonChart');
    const ctx = canvas.getContext('2d');
    
    // Sample data showing pigeon environmental impact
    const data = [
        { label: 'Power Outages', value: 15, color: '#ff4444' },
        { label: 'Cooling Blockage', value: 23, color: '#ff8800' },  
        { label: 'Solar Efficiency Loss', value: 8, color: '#ffdd00' }
    ];
    
    // Draw bar chart
    const barWidth = 120;
    const barSpacing = 40;
    const maxHeight = 200;
    const startX = 50;
    const startY = canvas.height - 50;
    
    data.forEach((item, index) => {
        const barHeight = (item.value / 25) * maxHeight; // Scale to max 25%
        const x = startX + index * (barWidth + barSpacing);
        const y = startY - barHeight;
        
        // Draw bar
        ctx.fillStyle = item.color;
        ctx.fillRect(x, y, barWidth, barHeight);
        
        // Draw label
        ctx.fillStyle = '#ffffff';
        ctx.font = '12px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(item.label, x + barWidth/2, startY + 20);
        
        // Draw value
        ctx.fillStyle = '#00ff88';
        ctx.font = 'bold 14px Arial';
        ctx.fillText(`${item.value}%`, x + barWidth/2, y - 10);
    });
    
    // Draw title
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 16px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Pigeon Environmental Impact (%)', canvas.width/2, 30);
    
    // Draw Y axis
    ctx.strokeStyle = '#666';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(30, 50);
    ctx.lineTo(30, startY);
    ctx.stroke();
    
    // Draw Y axis labels
    ctx.fillStyle = '#888';
    ctx.font = '10px Arial';
    ctx.textAlign = 'right';
    for (let i = 0; i <= 25; i += 5) {
        const y = startY - (i / 25) * maxHeight;
        ctx.fillText(`${i}%`, 25, y + 3);
    }
}