// Ehubs Blog Starter JS

// ---- SITE CONFIG (Editable!) ----
const categories = [
    {name: "Tech", id: "tech"},
    {name: "AI", id: "ai"},
    {name: "Health", id: "health"},
    {name: "Travel", id: "travel"},
    {name: "Finance", id: "finance"},
    {name: "Lifestyle", id: "lifestyle"},
    {name: "Ebooks", id: "ebooks"},
    {name: "Tools", id: "tools"},
    {name: "Products", id: "products"},
    {name: "Affiliate", id: "affiliate"},
];
const articles = {
    tech: [
        {title: "Latest in Web Dev", content: "Web development is evolving rapidly...", date: "2025-09-01"},
        {title: "The Rise of Quantum Computing", content: "Quantum computers may change everything...", date: "2025-08-27"},
    ],
    ai: [
        {title: "AI in Healthcare", content: "AI is transforming diagnostics and treatment...", date: "2025-08-30"},
        {title: "Chatbots: More Than Just Text", content: "Modern chatbots offer emotional support...", date: "2025-09-02"},
    ],
    health: [
        {title: "Wellness Trends 2025", content: "Mindfulness and nutrition are key...", date: "2025-09-03"},
    ],
    travel: [
        {title: "Hidden Gems of Europe", content: "Discover lesser-known cities...", date: "2025-08-15"},
    ],
    finance: [
        {title: "Smart Investing", content: "Diversification and tech-based strategies...", date: "2025-09-01"},
    ],
    lifestyle: [
        {title: "Minimalism for Productivity", content: "Declutter your schedule and home...", date: "2025-08-28"},
    ],
    ebooks: [
        {title: "Free eBook: AI for Beginners", content: "Download your copy now...", date: "2025-09-03"},
    ],
    tools: [
        {title: "PDF Merger Tool", content: "Merge your PDFs easily...", date: "2025-09-04"},
        {title: "AI Text Editor", content: "Edit text with smart AI...", date: "2025-09-04"},
    ],
    products: [
        {title: "Ehubs T-Shirt", content: "Get your exclusive Ehubs merch!", date: "2025-09-04"},
    ],
    affiliate: [
        {title: "Best Web Hosting", content: "Our affiliate link for hosting discounts...", date: "2025-09-04"},
    ],
};
// ---- END CONFIG ----

// DOM Elements
const categoriesList = document.getElementById('categoriesList');
const mainContent = document.getElementById('mainContent');
const sidebar = document.getElementById('sidebar');
const sidebarToggle = document.getElementById('sidebarToggle');
const themeToggle = document.getElementById('themeToggle');
const worldClock = document.getElementById('worldClock');
const ehubsFigure = document.getElementById('ehubsFigure');
const modal = document.getElementById('modal');
const modalContent = document.getElementById('modalContent');
const closeModalBtn = document.getElementById('closeModalBtn');
const timerDisplay = document.getElementById('timerDisplay');
const setTimerBtn = document.getElementById('setTimerBtn');
const readTimer = document.getElementById('readTimer');

// Sidebar handler (mobile)
if (sidebarToggle) {
    sidebarToggle.addEventListener('click', () => {
        sidebar.classList.toggle('open');
    });
}

// Render categories
function renderCategories() {
    categoriesList.innerHTML = '';
    categories.forEach(cat => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.textContent = cat.name;
        a.href = '#';
        a.dataset.cat = cat.id;
        a.addEventListener('click', (e) => {
            e.preventDefault();
            routeTo('category', cat.id);
            sidebar.classList.remove('open');
            animateFigure('star');
        });
        li.appendChild(a);
        categoriesList.appendChild(li);
    });
}
renderCategories();

// Routing
function routeTo(page, data) {
    mainContent.innerHTML = '';
    switch (page) {
        case 'home':
            mainContent.innerHTML = `
                <section>
                    <h2>Welcome to Ehubs Blog!</h2>
                    <p>Discover articles on tech, AI, health, travel, finance, lifestyle, and much more.</p>
                    <div class="featured-articles">
                        <h3>Featured Articles</h3>
                        ${Object.values(articles).flat().slice(0,3).map(a => `
                            <article>
                                <h4>${a.title}</h4>
                                <p>${a.content}</p>
                                <span class="article-date">${a.date}</span>
                            </article>
                        `).join('')}
                    </div>
                </section>
            `;
           