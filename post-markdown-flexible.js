import fs from 'fs';
import path from 'path';
import fetch from 'node-fetch'; // Add this if your Node version is <18
import { fileURLToPath } from 'url';

// Get __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const config = {
    markdownFile: '1.md', // Use the correct filename
    title: "My Blog Post",
    summary: "This is a blog post created from a markdown file",
    tags: ["blog", "markdown"],
    category: ["general"],
    apiUrl: 'http://localhost:3000/api/blogs'
};

// Read the markdown file
const markdownPath = path.join(__dirname, 'src', 'components', 'MDfiles', config.markdownFile);

try {
    const markdownContent = fs.readFileSync(markdownPath, 'utf8');

    // Prepare the data to send
    const postData = {
        title: config.title,
        summary: config.summary,
        content: markdownContent,
        tags: config.tags,
        category: config.category
    };

    console.log('Posting markdown content to MongoDB...');
    console.log('File:', config.markdownFile);
    console.log('Title:', config.title);
    console.log('Content length:', markdownContent.length, 'characters');

    // Send POST request to your API
    fetch(config.apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log('✅ Success! Blog post created:');
            console.log('ID:', data.id || 'N/A');
            console.log('Slug:', data.slug);
            console.log('Created at:', data.createdAt);
        })
        .catch((error) => {
            console.error('❌ Error posting to API:', error.message);
        });

} catch (error) {
    console.error('❌ Error reading markdown file:', error.message);
} 