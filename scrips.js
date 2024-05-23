document.addEventListener('DOMContentLoaded', () => {
    // Load latest content
    const latestContent = document.getElementById('latest-content');
    latestContent.innerHTML = '<p>Check out our latest blog posts and forum discussions!</p>';

    // Load blog posts
    const blogPosts = document.getElementById('blog-posts');
    blogPosts.innerHTML = `
        <article>
            <h3>Blog Post Title 1</h3>
            <p>Excerpt from the blog post...</p>
            <a href="#">Read more</a>
        </article>
        <article>
            <h3>Blog Post Title 2</h3>
            <p>Excerpt from the blog post...</p>
            <a href="#">Read more</a>
        </article>
    `;

    // Load forum content
    const forumContent = document.getElementById('forum-content');
    forumContent.innerHTML = `
        <div>
            <h3>Forum Topic 1</h3>
            <p>Discussion excerpt...</p>
            <a href="#">Join the discussion</a>
        </div>
        <div>
            <h3>Forum Topic 2</h3>
            <p>Discussion excerpt...</p>
            <a href="#">Join the discussion</a>
        </div>
    `;

    // Handle form submission
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message!');
    });

    // Handle newsletter subscription
    const subscribeButton = document.getElementById('subscribe-button');
    subscribeButton.addEventListener('click', () => {
        const email = prompt('Enter your email to subscribe:');
        if (email) {
            alert('Thank you for subscribing!');
        }
    });
});
