// Content mapping - loaded dynamically
let contentMap = {};

// Navigation system
document.addEventListener('DOMContentLoaded', async function() {
    // Load content map
    await loadContentMap();
    
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
    
    // Initialize distributed content
    initializeDistributedContent();
});

// Load content map from JSON
async function loadContentMap() {
    try {
        const response = await fetch('content-map.json');
        contentMap = await response.json();
        console.log('Content map loaded:', contentMap);
    } catch (error) {
        console.error('Failed to load content map:', error);
        // Fallback to embedded content if needed
    }
}

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
    
    // Load distributed game content
    loadDistributedGame(gameId);
    
    console.log(`Showing game: ${gameId}`);
    console.log('Linked articles:', contentMap.games?.[gameId]?.linkedArticles);
}

// Make functions globally available
window.showGame = showGame;

function showArticle(articleId) {
    showSection('articles');
    const navBtns = document.querySelectorAll('.nav-btn');
    navBtns.forEach(b => b.classList.remove('active'));
    document.querySelector('[data-section="articles"]').classList.add('active');
    
    // Load distributed article content
    loadDistributedArticle(articleId);
    
    console.log(`Showing article: ${articleId}`);
    console.log('Linked games:', contentMap.articles?.[articleId]?.linkedGames);
}

// Make functions globally available
window.showArticle = showArticle;

// Load distributed game content
async function loadDistributedGame(gameId) {
    const gameConfig = contentMap.games?.[gameId];
    if (!gameConfig) {
        console.error(`Game ${gameId} not found in content map`);
        return;
    }
    
    const gameContainer = document.getElementById('distributed-games');
    if (gameContainer) {
        try {
            // Create iframe to load distributed game
            gameContainer.innerHTML = `
                <div class="distributed-content">
                    <h2>${gameConfig.title}</h2>
                    <p>${gameConfig.description}</p>
                    <iframe src="${gameConfig.path}${gameConfig.file}" 
                            width="100%" 
                            height="600" 
                            frameborder="0">
                    </iframe>
                    <div class="links">
                        <h3>Related Articles:</h3>
                        ${gameConfig.linkedArticles?.map(articleId => 
                            `<button class="link-btn" onclick="showArticle('${articleId}')">
                                📊 ${contentMap.articles?.[articleId]?.title || articleId}
                            </button>`
                        ).join('') || 'No linked articles'}
                    </div>
                </div>
            `;
        } catch (error) {
            console.error('Failed to load distributed game:', error);
            gameContainer.innerHTML = `<p>Failed to load game: ${gameId}</p>`;
        }
    }
}

// Load distributed article content
async function loadDistributedArticle(articleId) {
    const articleConfig = contentMap.articles?.[articleId];
    if (!articleConfig) {
        console.error(`Article ${articleId} not found in content map`);
        return;
    }
    
    const articleContainer = document.getElementById('distributed-articles');
    if (articleContainer) {
        try {
            // Create iframe to load distributed article
            articleContainer.innerHTML = `
                <div class="distributed-content">
                    <div class="content-header">
                        <h2>${articleConfig.title}</h2>
                        <p>${articleConfig.description}</p>
                    </div>
                    <iframe src="${articleConfig.path}${articleConfig.file}" 
                            width="100%" 
                            height="800" 
                            frameborder="0">
                    </iframe>
                    <div class="links">
                        <h3>Related Games:</h3>
                        ${articleConfig.linkedGames?.map(gameId => 
                            `<button class="link-btn" onclick="showGame('${gameId}')">
                                🎮 ${contentMap.games?.[gameId]?.title || gameId}
                            </button>`
                        ).join('') || 'No linked games'}
                    </div>
                </div>
            `;
        } catch (error) {
            console.error('Failed to load distributed article:', error);
            articleContainer.innerHTML = `<p>Failed to load article: ${articleId}</p>`;
        }
    }
}

// Initialize distributed content on page load
function initializeDistributedContent() {
    console.log('Distributed content system initialized');
    console.log('Available games:', Object.keys(contentMap.games || {}));
    console.log('Available articles:', Object.keys(contentMap.articles || {}));
    
    // Update home page with dynamic content
    updateHomePageCards();
}

// Update home page cards with actual content from content map
function updateHomePageCards() {
    const homeGrid = document.getElementById('home-grid');
    if (!homeGrid || !contentMap.games || !contentMap.articles) return;
    
    const games = Object.entries(contentMap.games);
    const articles = Object.entries(contentMap.articles);
    
    homeGrid.innerHTML = '';
    
    // Add game cards
    games.forEach(([gameId, gameConfig]) => {
        const card = document.createElement('div');
        card.className = 'content-card';
        card.onclick = () => showGame(gameId);
        card.innerHTML = `
            <h3>🎮 ${gameConfig.title}</h3>
            <p>${gameConfig.description}</p>
        `;
        homeGrid.appendChild(card);
    });
    
    // Add article cards
    articles.forEach(([articleId, articleConfig]) => {
        const card = document.createElement('div');
        card.className = 'content-card';
        card.onclick = () => showArticle(articleId);
        card.innerHTML = `
            <h3>📊 ${articleConfig.title}</h3>
            <p>${articleConfig.description}</p>
        `;
        homeGrid.appendChild(card);
    });
}