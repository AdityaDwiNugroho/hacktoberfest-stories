// Load and display stories
let allStories = [];
let currentPage = 1;
const storiesPerPage = 12; // Show 12 stories per page

async function loadStories() {
    try {
        const response = await fetch('../data/stories.json');
        const data = await response.json();
        allStories = data.stories;
        displayStories(allStories);
        updateStats();
        updatePagination(allStories);
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
    
    // Calculate pagination
    const startIndex = (currentPage - 1) * storiesPerPage;
    const endIndex = startIndex + storiesPerPage;
    const paginatedStories = stories.slice(startIndex, endIndex);
    
    container.innerHTML = paginatedStories.map(story => {
        const wordCount = story.story.split(' ').length;
        const isLong = wordCount > 100;
        const preview = isLong ? story.story.split(' ').slice(0, 100).join(' ') + '...' : story.story;
        
        return `
        <div class="story-card" data-story-id="${story.id}">
            <div class="story-header" onclick="window.open('${story.githubUrl}', '_blank')" style="cursor: pointer;">
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
            <p class="story-text" id="story-${story.id}">
                ${isLong ? `<span class="preview">${preview}</span><span class="full-text" style="display: none;">${story.story}</span>` : story.story}
            </p>
            ${isLong ? `<button class="read-more" onclick="toggleStory(${story.id}); event.stopPropagation();">Read More</button>` : ''}
            <div class="story-tags">
                ${story.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
            <p class="story-date">${story.date} • ${wordCount} words</p>
        </div>
        `;
    }).join('');
    
    // Scroll to top when changing pages
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleStory(storyId) {
    const storyElement = document.getElementById(`story-${storyId}`);
    const preview = storyElement.querySelector('.preview');
    const fullText = storyElement.querySelector('.full-text');
    const button = storyElement.parentElement.querySelector('.read-more');
    
    if (preview.style.display === 'none') {
        preview.style.display = 'inline';
        fullText.style.display = 'none';
        button.textContent = 'Read More';
    } else {
        preview.style.display = 'none';
        fullText.style.display = 'inline';
        button.textContent = 'Read Less';
    }
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
    
    currentPage = 1; // Reset to first page when searching
    displayStories(filtered);
    updatePagination(filtered);
});

// Pagination
function updatePagination(stories) {
    const totalPages = Math.ceil(stories.length / storiesPerPage);
    const paginationContainer = document.getElementById('pagination');
    
    if (totalPages <= 1) {
        paginationContainer.innerHTML = '';
        return;
    }
    
    let paginationHTML = '<div class="pagination">';
    
    // Previous button
    if (currentPage > 1) {
        paginationHTML += `<button onclick="changePage(${currentPage - 1})" class="page-btn">← Previous</button>`;
    }
    
    // Page numbers
    for (let i = 1; i <= totalPages; i++) {
        if (
            i === 1 || 
            i === totalPages || 
            (i >= currentPage - 2 && i <= currentPage + 2)
        ) {
            paginationHTML += `<button onclick="changePage(${i})" class="page-btn ${i === currentPage ? 'active' : ''}">${i}</button>`;
        } else if (i === currentPage - 3 || i === currentPage + 3) {
            paginationHTML += '<span class="page-dots">...</span>';
        }
    }
    
    // Next button
    if (currentPage < totalPages) {
        paginationHTML += `<button onclick="changePage(${currentPage + 1})" class="page-btn">Next →</button>`;
    }
    
    paginationHTML += '</div>';
    paginationContainer.innerHTML = paginationHTML;
}

function changePage(page) {
    currentPage = page;
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    
    if (searchTerm) {
        const filtered = allStories.filter(story => 
            story.name.toLowerCase().includes(searchTerm) ||
            story.username.toLowerCase().includes(searchTerm) ||
            story.title.toLowerCase().includes(searchTerm) ||
            story.story.toLowerCase().includes(searchTerm) ||
            story.tags.some(tag => tag.toLowerCase().includes(searchTerm))
        );
        displayStories(filtered);
        updatePagination(filtered);
    } else {
        displayStories(allStories);
        updatePagination(allStories);
    }
}

// Load stories on page load
loadStories();
