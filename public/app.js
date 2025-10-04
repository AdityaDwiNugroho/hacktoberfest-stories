// Load and display stories
let allStories = [];

async function loadStories() {
    try {
        const response = await fetch('../data/stories.json');
        const data = await response.json();
        allStories = data.stories;
        displayStories(allStories);
        updateStats();
    } catch (error) {
        console.error('Error loading stories:', error);
        document.getElementById('storiesContainer').innerHTML = 
            '<p class="loading">Error loading stories. Please try again later.</p>';
    }
}

function displayStories(stories) {
    const container = document.getElementById('storiesContainer');
    
    if (stories.length === 0) {
        container.innerHTML = '<p class="no-results">No stories found. Be the first to share!</p>';
        return;
    }
    
    container.innerHTML = stories.map(story => `
        <div class="story-card" onclick="window.open('${story.githubUrl}', '_blank')">
            <div class="story-header">
                <img 
                    src="https://github.com/${story.username}.png" 
                    alt="${story.name}"
                    class="avatar"
                    onerror="this.src='https://github.com/github.png'"
                >
                <div class="story-user">
                    <h3>${story.name}</h3>
                    <p class="username">@${story.username}</p>
                </div>
            </div>
            <h2 class="story-title">${story.title}</h2>
            <p class="story-text">${story.story}</p>
            <div class="story-tags">
                ${story.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
            <p class="story-date">${story.date}</p>
        </div>
    `).join('');
}

function updateStats() {
    document.getElementById('totalStories').textContent = allStories.length;
    document.getElementById('totalContributors').textContent = allStories.length;
}

// Search functionality
document.getElementById('searchInput').addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    
    const filtered = allStories.filter(story => 
        story.name.toLowerCase().includes(searchTerm) ||
        story.username.toLowerCase().includes(searchTerm) ||
        story.title.toLowerCase().includes(searchTerm) ||
        story.story.toLowerCase().includes(searchTerm) ||
        story.tags.some(tag => tag.toLowerCase().includes(searchTerm))
    );
    
    displayStories(filtered);
});

// Load stories on page load
loadStories();
