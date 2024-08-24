const posts = [
    {
        date: "August 24, 2024",
        title: "BELAJAR TIPIS TIPIS HAHAHAHAH",
        summary: "Masi belajar bang heheheheheheheheheheheheheheehehhehehe"
    },
    {
        date: "July 15, 2024",
        title: "COBA COBA AJA WKKWKWKKWKWKWKW",
        summary: "Tipis tipis aja dulu biar ga budrek hhhhhhhhhhhhhhhhhhh"
    },
    {
        date: "June 10, 2024",
        title: "TERKADANG HIDUP PERLU KOPI",
        summary: "Tapi terkadang kopi terasa pahit soalnya lupa dikasi gula"
    }
];

function renderPosts(posts) {
    const blogPostsSection = document.getElementById('blog-posts');
    blogPostsSection.innerHTML = '';

    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.className = 'blog-post';
        postElement.innerHTML = `
            <div class="date">${post.date}</div>
            <h2>${post.title}</h2>
            <p>${post.summary}</p>
        `;
        blogPostsSection.appendChild(postElement);
    });
}

function filterPosts(query) {
    const filteredPosts = posts.filter(post => 
        post.title.toLowerCase().includes(query.toLowerCase()) || 
        post.summary.toLowerCase().includes(query.toLowerCase())
    );
    renderPosts(filteredPosts);
}

// Initial render
renderPosts(posts);

// Search functionality
document.getElementById('search-input').addEventListener('input', (event) => {
    filterPosts(event.target.value);
});