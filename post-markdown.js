const fs = require('fs');
const path = require('path');

// Read the markdown file
const markdownPath = path.join(__dirname, 'src', 'components', 'MDfiles', '1.md');

try {
    const markdownContent = fs.readFileSync(markdownPath, 'utf8');

    // Prepare the data to send
    const postData = {
        title: "Test Post from 1.md",
        summary: "This is a test post created from the 1.md file",
        content: markdownContent,
        tags: ["test", "markdown"],
        category: ["general"]
    };

    // Send POST request to your API
    fetch('http://localhost:3000/api/blogs', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData)
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });

} catch (error) {
    console.error('Error reading markdown file:', error);
} 