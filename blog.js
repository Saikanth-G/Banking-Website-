document.addEventListener('DOMContentLoaded', () => {
    const apiKey = '0bce1a102fb44926bd5c5a5ea4bb6cd7'; // Replace with your actual News API key
    const apiUrl = `https://newsapi.org/v2/everything?q=banking&language=en&pageSize=5&apiKey=${apiKey}`;

    const articlesContainer = document.getElementById('articles-container');

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.status === 'ok') {
                data.articles.forEach(article => {
                    // Create article card
                    const articleCard = document.createElement('div');
                    articleCard.classList.add('article-card');

                    // Add article content
                    articleCard.innerHTML = `
                        <h3>${article.title}</h3>
                        <p>${article.description || 'No description available'}</p>
                        <a href="${article.url}" target="_blank">Read more</a>
                    `;

                    // Append article card to the container
                    articlesContainer.appendChild(articleCard);
                });
            } else {
                articlesContainer.innerHTML = '<p>Failed to load articles. Please try again later.</p>';
            }
        })
        .catch(error => {
            console.error('Error fetching articles:', error);
            articlesContainer.innerHTML = '<p>Error loading articles. Please check your connection and try again.</p>';
        });
});
