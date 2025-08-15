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
            
            // Initialize content lists when navigating to games/articles
            if (targetSection === 'games') {
                initializeGamesList();
            } else if (targetSection === 'articles') {
                initializeArticlesList();
            }
            
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
    
    // Load specific game content if gameId provided
    if (gameId) {
        loadGameContent(gameId);
    } else {
        initializeGamesList();
    }
    
    console.log(`Showing game: ${gameId || 'list'}`);
    console.log('Linked articles:', contentMap.games?.[gameId]?.linkedArticles);
}

// Make functions globally available
window.showGame = showGame;

function showArticle(articleId) {
    showSection('articles');
    const navBtns = document.querySelectorAll('.nav-btn');
    navBtns.forEach(b => b.classList.remove('active'));
    document.querySelector('[data-section="articles"]').classList.add('active');
    
    // Load specific article content if articleId provided
    if (articleId) {
        loadArticleContent(articleId);
    } else {
        initializeArticlesList();
    }
    
    console.log(`Showing article: ${articleId || 'list'}`);
    console.log('Linked games:', contentMap.articles?.[articleId]?.linkedGames);
}

// Make functions globally available
window.showArticle = showArticle;


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

// Initialize games list view (no iframes, just clickable list)
function initializeGamesList() {
    const gamesContainer = document.getElementById('distributed-games');
    if (!gamesContainer || !contentMap.games) return;
    
    const games = Object.entries(contentMap.games);
    
    gamesContainer.innerHTML = `
        <div class="content-list">
            ${games.map(([gameId, gameConfig]) => `
                <div class="content-list-item" onclick="loadGameContent('${gameId}')">
                    <div class="content-icon">🎮</div>
                    <div class="content-info">
                        <h3>${gameConfig.title}</h3>
                        <p>${gameConfig.description}</p>
                        <div class="linked-content">
                            Related articles: ${gameConfig.linkedArticles?.map(id => 
                                contentMap.articles?.[id]?.title || id
                            ).join(', ') || 'None'}
                        </div>
                    </div>
                    <div class="content-arrow">→</div>
                </div>
            `).join('')}
        </div>
    `;
}

// Initialize articles list view (no iframes, just clickable list)  
function initializeArticlesList() {
    const articlesContainer = document.getElementById('distributed-articles');
    if (!articlesContainer || !contentMap.articles) return;
    
    const articles = Object.entries(contentMap.articles);
    
    articlesContainer.innerHTML = `
        <div class="content-list">
            ${articles.map(([articleId, articleConfig]) => `
                <div class="content-list-item" onclick="loadArticleContent('${articleId}')">
                    <div class="content-icon">📊</div>
                    <div class="content-info">
                        <h3>${articleConfig.title}</h3>
                        <p>${articleConfig.description}</p>
                        <div class="linked-content">
                            Related games: ${articleConfig.linkedGames?.map(id => 
                                contentMap.games?.[id]?.title || id
                            ).join(', ') || 'None'}
                        </div>
                    </div>
                    <div class="content-arrow">→</div>
                </div>
            `).join('')}
        </div>
    `;
}

// Load game content (replaces iframe approach)
function loadGameContent(gameId) {
    const gameConfig = contentMap.games?.[gameId];
    if (!gameConfig) return;
    
    const gamesContainer = document.getElementById('distributed-games');
    gamesContainer.innerHTML = `
        <div class="content-viewer">
            <div class="content-header">
                <button class="back-btn" onclick="initializeGamesList()">← Back to Games</button>
                <h2>${gameConfig.title}</h2>
            </div>
            <iframe src="${gameConfig.path}${gameConfig.file}" 
                    width="100%" 
                    height="600" 
                    frameborder="0">
            </iframe>
            <div class="content-links">
                <h3>Related Articles:</h3>
                ${gameConfig.linkedArticles?.map(articleId => 
                    `<button class="link-btn" onclick="showArticle('${articleId}')">
                        📊 ${contentMap.articles?.[articleId]?.title || articleId}
                    </button>`
                ).join('') || '<p>No linked articles</p>'}
            </div>
        </div>
    `;
}

// Load article content (replaces iframe approach)
function loadArticleContent(articleId) {
    const articleConfig = contentMap.articles?.[articleId];
    if (!articleConfig) return;
    
    const articlesContainer = document.getElementById('distributed-articles');
    articlesContainer.innerHTML = `
        <div class="content-viewer">
            <div class="content-header">
                <button class="back-btn" onclick="initializeArticlesList()">← Back to Articles</button>
                <h2>${articleConfig.title}</h2>
            </div>
            <iframe src="${articleConfig.path}${articleConfig.file}" 
                    width="100%" 
                    height="800" 
                    frameborder="0">
            </iframe>
            <div class="content-links">
                <h3>Related Games:</h3>
                ${articleConfig.linkedGames?.map(gameId => 
                    `<button class="link-btn" onclick="showGame('${gameId}')">
                        🎮 ${contentMap.games?.[gameId]?.title || gameId}
                    </button>`
                ).join('') || '<p>No linked games</p>'}
            </div>
        </div>
    `;
}

// Make new functions globally available
window.loadGameContent = loadGameContent;
window.loadArticleContent = loadArticleContent;
window.initializeGamesList = initializeGamesList;
window.initializeArticlesList = initializeArticlesList;